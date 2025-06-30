import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    federation({
      name: 'remotez',
      filename: 'remoteEntry.js',
      exposes: {
        './Remote': './src/Remote',
      },
      shared: ['react', 'react-dom'],
    }),
    react(),
  ],
  server: {
    port: 5002
  }
});