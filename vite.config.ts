import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

export default defineConfig({
  root: 'demo',
  plugins: [react()],
  resolve: {
    alias: {
      '@tdm-icons': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: resolve(__dirname, 'demo-dist'),
    emptyOutDir: true,
  },
  base: process.env.DEMO_BASE || '/',
  server: {
    port: 4173,
  },
});

