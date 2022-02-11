import { ConnectionOptions, NatsConnection } from 'nats.ws';

export interface NatsProviderProps {
  config: ConnectionOptions;
}

export interface NatsContextState {
  connection?: NatsConnection;
  error?: Error;
}
