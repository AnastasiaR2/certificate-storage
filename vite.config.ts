import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';

const config = defineConfig({
  plugins: [react(), tsconfigPathsPlugin(), svgr()],
});

export default config;
