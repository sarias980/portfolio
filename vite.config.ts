import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  // SWC keeps local feedback loops fast for daily iteration.
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
});
