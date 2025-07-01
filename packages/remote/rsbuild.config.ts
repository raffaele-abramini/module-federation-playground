import { defineConfig } from '@rsbuild/core';
import { pluginModuleFederation } from "../../libs/rsbuild-plugin/src/cli";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'remote',
      exposes: {
        './Remote': './src/Remote.tsx',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
      }
    }),
  ],
  server: {
    port: 5002
  }
});