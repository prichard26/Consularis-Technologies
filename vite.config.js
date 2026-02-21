import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssMinify: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        connect: resolve(__dirname, 'connect.html'),
        imprint: resolve(__dirname, 'imprint.html'),
        privacy: resolve(__dirname, 'privacy.html'),
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
});
