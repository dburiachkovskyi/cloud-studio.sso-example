import {
  connect,
  ConnectionOptions,
  Msg,
  StringCodec,
  NatsConnection,
} from 'nats';
import { connections, env } from './constants';
import { getCMDSubject, getMessage, getResponseSubject } from './utils';

const sc = StringCodec();

const services: Record<string, NatsConnection> = {};

export const getService = (name: string) => services[name];

export const listen = async (
  serviceName: string,
  subject: string,
  listener: (msg: Msg) => void
) => {
  const service = getService(serviceName);
  const sub = service.subscribe(subject);
  const p = 12 - serviceName.length;
  const pad = ''.padEnd(p);
  for await (const m of sub) {
    // respond returns true if the message had a reply subject, thus it could respond
    if (m.respond(m.data)) {
      listener(m);
    } else {
      console.log(
        `[${serviceName}]:${pad} #${sub.getProcessed()} ignoring request - no reply subject`
      );
    }
  }

  return service;
};

export const cmd = async (
  serviceName: string,
  message: string,
  payload?: any
) => {
  const msg = await getMessage(message, payload);
  const service = getService(serviceName);

  const subj = getCMDSubject();

  try {
    await service.publish(subj, msg);
    console.log(`Request to ${subj} ${msg.toString()}`);
  } catch (e) {
    console.error(e);
  }

  return msg;
};

const createService = async (
  opts: ConnectionOptions,
  name: string
): Promise<NatsConnection> => {
  const nc = await connect({ ...opts, name });
  nc.closed().then((err) => {
    if (err) {
      console.error(`service ${name} exited because of error: ${err.message}`);
    }
  });
  // create a subscription - note the option for a queue, if set
  // any client with the same queue will be a member of the group.
  console.log(`${nc.info?.server_name} is listening for requests...`);

  return (services[name] = nc);
};

// let's create two queue groups and a standalone subscriber

export const init = async () => {
  const subOptions: ConnectionOptions = connections[env];
  const { servers, user, pass, port } = subOptions;
  console.log(`Connection as ${user}:${pass} to ${servers}:${port}`);
  const url = `nats://${servers}:${port}`;

  const rSubj = getResponseSubject();

  await createService(
    {
      servers: url,
      user,
      pass,
    },
    env
  );
  console.log(env, rSubj);
  listen(env, '*', (msg) => {
    console.log('OMG RESPONSE!', msg);
  });
  listen(env, rSubj, (msg) => {
    console.log('OMG RESPONSE!', msg);
  });
};
