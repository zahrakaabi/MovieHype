/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* -------------------------------------------------------------------------- */
/*                                DEFINE CONFIG                               */
/* -------------------------------------------------------------------------- */
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          supabase: ['@supabase/supabase-js'],
          ui: ['react-bootstrap', 'bootstrap'],
        }
      }
    }
  }
});