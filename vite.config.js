import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Consularis-Technologies/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssMinify: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        connect: resolve(__dirname, 'pages/connect.html'),
        imprint: resolve(__dirname, 'pages/imprint.html'),
        privacy: resolve(__dirname, 'pages/privacy.html'),
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
});
