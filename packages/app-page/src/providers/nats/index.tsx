import { connect, NatsConnection, ConnectionOptions } from 'nats.ws';
import { FC, useCallback, useEffect, useState } from 'react';
import { NatsProviderProps } from './types';
import { NatsContext } from './constants';

export const NatsProvider: FC<NatsProviderProps> = ({ children, config }) => {
  const [connection, setConnection] = useState<NatsConnection | undefined>();
  const [error, setError] = useState<Error | undefined>();

  const handleConnect = useCallback(async (config: ConnectionOptions) => {
    try {
      let nc: NatsConnection;
      setConnection((nc = await connect(config)));

      console.log('Subscribed');

      await nc.closed();
    } catch (e) {
      setError(e as Error);
    }
  }, []);

  useEffect(() => {
    handleConnect(config);
  }, [config]);

  return (
    <NatsContext.Provider
      value={{
        error,
        connection,
      }}
    >
      {children}
    </NatsContext.Provider>
  );
};

export * from './use-nats';
export * from './use-nats-sub';
export * from './messages';
