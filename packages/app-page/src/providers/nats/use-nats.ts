import { useCallback, useContext } from 'react';
import { NatsContext } from './constants';

export const useNats = () => {
  const { connection, error } = useContext(NatsContext);

  const handlePublish = useCallback(
    (subject: string, msg: Uint8Array) => {
      if (connection) {
        console.log(`CMD for ${subject} with data ${msg.toString()}`);
        try {
          connection.publish(subject, msg);
        } catch (e) {
          console.log(e);
        }
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
