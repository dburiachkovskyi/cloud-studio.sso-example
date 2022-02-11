import { useCallback, useContext, useEffect, useRef } from 'react';
import { NatsContext } from './constants';
import { Subscription, StringCodec } from 'nats.ws';

const sc = StringCodec();

export const useNatsSub = (subject: string, cb: (msg: string) => void) => {
  const cbRef = useRef<Function>();
  const { connection } = useContext(NatsContext);

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  const handleListenForMessages = useCallback(async (sub: Subscription) => {
    for await (const msg of sub) {
      console.log(`MSG received for ${sub.getID()}`);
      cbRef.current?.(sc.decode(msg.data));
    }
  }, []);

  useEffect(() => {
    if (connection) {
      const sub = connection.subscribe(subject);

      console.log(`Listen for ${subject}`);
      handleListenForMessages(sub);

      return () => {
        console.log('Unsubscribe');
        sub.unsubscribe();
      };
    }
  }, [connection, subject]);
};
