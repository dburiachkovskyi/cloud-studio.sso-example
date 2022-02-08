import { ConnectionOptions } from 'nats';

export const env = 'pablo_aws';
export const connections: Record<string, ConnectionOptions> = {
  local1: { servers: '127.0.0.1', port: 4222 },
  local_u1: {
    servers: '127.0.0.1',
    port: 4222,
    user: 'cluster',
    pass: 'test123',
  },
  test_aws: {
    servers: 'ec2-204-236-137-71.us-west-1.compute.amazonaws.com',
    port: 4222,
  },
  pablo_aws: {
    servers:
      'lc-encoder-nats-nlb-stg-c126ab1a9d98b2f4.elb.us-west-1.amazonaws.com',
    port: 4222,
    user: 'cluster',
    pass: 'test123',
  },
};

export enum Source {
  PRODID = 'ABC',
  CLIID = 'CLI',
  ENCID = 'DEF',
  CAMID = 'GHI',
  STREAM = 'event',
}

export const commands = {};
