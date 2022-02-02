import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const prefix = 'APP_';
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), [prefix]) };
  return defineConfig({
    plugins: [react()],
    envPrefix: prefix,
    server: {
      proxy: {
        '/api': {
          target: process.env.APP_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  });
};
