import { createContext } from 'react';
import { NatsContextState } from './types';

export const NatsContext = createContext<NatsContextState>({
  error: undefined,
  connection: undefined,
});
