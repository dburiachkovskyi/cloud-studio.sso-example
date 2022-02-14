import { ConnectionOptions, NatsConnection } from 'nats.ws';
import * as msgs from './proto/compiled';

export type Msg = keyof typeof msgs.encodergrpc;

export type NatsCallback = (msg: Uint8Array) => void;

export interface NatsProviderProps {
  config: ConnectionOptions;
}

export interface NatsContextState {
  connection?: NatsConnection;
  error?: Error;
}
