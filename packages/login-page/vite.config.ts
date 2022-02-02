import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default () => {
  const prefix = 'APP_';
  return defineConfig({
    plugins: [react()],
    envPrefix: prefix,
  });
};
