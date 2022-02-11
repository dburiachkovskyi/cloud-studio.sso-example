import { useCallback, useEffect, useRef, useState } from 'react';

export type Listener = (value: string) => void;

export const useWorker = (
  workerInstance: new () => Worker,
  onMessage?: Listener,
  onError?: Listener
) => {
  const [worker, setWorker] = useState<Worker>();
  const onMessageRef = useRef<Listener>();
  const onErrorRef = useRef<Listener>();

  const handlePostMessage = useCallback(
    (message: any) => {
      if (!worker) return;
      worker.postMessage(message);
    },
    [worker]
  );

  const handleMessage = useCallback((e: any) => {
    onMessageRef.current?.(e.data);
  }, []);

  const handleError = useCallback((e: any) => {
    onMessageRef.current?.(e.message);
  }, []);

  useEffect(() => {
    onMessageRef.current = onMessage;
    onErrorRef.current = onError;
  }, [onMessage, onError]);

  useEffect(() => {
    if (!worker) return;

    worker.addEventListener('message', handleMessage, false);
    worker.addEventListener('error', handleError, false);

    return () => {
      worker.removeEventListener('error', handleError);
      worker.removeEventListener('message', handleMessage);
    };
  }, [worker]);

  useEffect(() => {
    setWorker(new workerInstance());
  }, [workerInstance]);

  return {
    post: handlePostMessage,
  };
};
