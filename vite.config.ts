import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base so the build works when hosted at the root of a
// github.io user page OR under a /repo-name/ project page path.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: true,
  },
})
