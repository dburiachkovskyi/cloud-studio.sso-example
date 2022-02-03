import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const prefix = 'APP_';
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), [prefix]) };
  return defineConfig({
    plugins: [react()],
    envPrefix: prefix,
    server: {
      https: true,
      proxy: {
        '/api': {
          target: process.env.APP_API_URL,
          changeOrigin: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  });
};
