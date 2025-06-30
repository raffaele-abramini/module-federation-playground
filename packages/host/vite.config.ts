import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 5001
  },
  plugins: [
    react(),
    federation({
      name: 'mf-host',
      remotes: {
        remotez: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    })
  ],
});