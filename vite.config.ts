import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';

const config = defineConfig({
  plugins: [react(), tsconfigPathsPlugin()],
});

export default config;
