import { useCallback, useContext } from 'react';
import { NatsContext } from './constants';
import { StringCodec } from 'nats.ws';

const sc = StringCodec();

export const useNats = () => {
  const { connection, error } = useContext(NatsContext);

  const handlePublish = useCallback(
    (subject: string, msg: string) => {
      if (connection) {
        console.log(`CMD for ${subject} with data ${msg}`);
        connection.publish(subject, sc.encode(msg));
      }
    },
    [connection]
  );

  return {
    connection,
    error,
    publish: handlePublish,
  };
};
