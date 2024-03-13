import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPathsPlugin from 'vite-tsconfig-paths';

const config =  defineConfig({
  plugins: [react(), tsconfigPathsPlugin()],
});

export default config;
