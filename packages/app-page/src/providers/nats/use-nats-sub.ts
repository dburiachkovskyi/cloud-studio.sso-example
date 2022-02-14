import { StringCodec, Subscription } from 'nats.ws';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { useNats } from '.';
import { NatsContext } from './constants';
import { NatsCallback } from './types';

const subs = new Map<string, Set<NatsCallback>>();
const connectedSubjects = new Map<string, boolean>();

export const useNatsSub = (subject: string, cb: NatsCallback) => {
  const cbRef = useRef<NatsCallback>();
  const { publish } = useNats();
  const { connection } = useContext(NatsContext);

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  useEffect(() => {
    if (!cbRef.current) return;
    subs.set(
      subject,
      subs.get(subject)?.add(cbRef.current) || new Set([cbRef.current])
    );
  }, [subject]);

  const handlePublish = useCallback(
    (msg: Uint8Array) => {
      publish(`${subject}.command`, msg);
    },
    [subject, publish]
  );

  const handleListenForMessages = useCallback(async (sub: Subscription) => {
    for await (const msg of sub) {
      console.log(`MSG received for ${sub.getID()}`);
      subs.get(subject)?.forEach((cb) => cb(msg.data));
    }
  }, []);

  useEffect(() => {
    console.log(subs);
    if (!connection) return;
    if (!connectedSubjects.has(subject)) {
      const sub = connection.subscribe(`${subject}.response`);

      console.log(`Listen for ${subject}.response`);
      handleListenForMessages(sub);

      connectedSubjects.set(subject, true);

      return () => {
        if (cbRef.current) {
          subs.get(subject)?.delete(cbRef.current);
        }

        if (!subs.has(subject) || !subs.get(subject)?.size) {
          console.log('Unsubscribe');
          sub.unsubscribe();
        }
      };
    }
  }, [connection, subject]);

  return {
    publish: handlePublish,
  };
};
