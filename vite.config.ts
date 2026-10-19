import { defineConfig } from 'vite';
export default defineConfig({ base: '/Sketchbook/', esbuild: { jsx: 'automatic' }, optimizeDeps: { entries: ['index.html'] } });
