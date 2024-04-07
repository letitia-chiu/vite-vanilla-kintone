import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2021',
    rollupOptions: {
      input: 'src/main.ts',
      output: {
        format: 'iife',
        entryFileNames: 'app.js'
      }
    }
  }
})
