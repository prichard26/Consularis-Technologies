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
        'it-index': resolve(__dirname, 'it/index.html'),
        'it-connect': resolve(__dirname, 'it/connect.html'),
        'it-imprint': resolve(__dirname, 'it/imprint.html'),
        'it-privacy': resolve(__dirname, 'it/privacy.html'),
        'fr-index': resolve(__dirname, 'fr/index.html'),
        'fr-connect': resolve(__dirname, 'fr/connect.html'),
        'fr-imprint': resolve(__dirname, 'fr/imprint.html'),
        'fr-privacy': resolve(__dirname, 'fr/privacy.html'),
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
});
