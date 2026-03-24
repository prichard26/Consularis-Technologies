import { defineConfig } from 'vite';
import { resolve } from 'path';

const pagesBase = '/Consularis-Technologies/';

export default defineConfig(({ command, mode }) => ({
  base:
    command === 'build' || (command === 'serve' && mode === 'production')
      ? pagesBase
      : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssMinify: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        connect: resolve(__dirname, 'pages/connect.html'),
        'consularis-ai': resolve(__dirname, 'pages/consularis-ai.html'),
        'case-study-maxon': resolve(__dirname, 'pages/case-study-maxon.html'),
        imprint: resolve(__dirname, 'pages/imprint.html'),
        privacy: resolve(__dirname, 'pages/privacy.html'),
        'it-index': resolve(__dirname, 'it/index.html'),
        'it-connect': resolve(__dirname, 'it/connect.html'),
        'it-consularis-ai': resolve(__dirname, 'it/consularis-ai.html'),
        'it-case-study-maxon': resolve(__dirname, 'it/case-study-maxon.html'),
        'it-imprint': resolve(__dirname, 'it/imprint.html'),
        'it-privacy': resolve(__dirname, 'it/privacy.html'),
        'fr-index': resolve(__dirname, 'fr/index.html'),
        'fr-connect': resolve(__dirname, 'fr/connect.html'),
        'fr-consularis-ai': resolve(__dirname, 'fr/consularis-ai.html'),
        'fr-case-study-maxon': resolve(__dirname, 'fr/case-study-maxon.html'),
        'fr-imprint': resolve(__dirname, 'fr/imprint.html'),
        'fr-privacy': resolve(__dirname, 'fr/privacy.html'),
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
