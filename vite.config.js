// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rs-react-app-architecture-vite-mantine/',
  plugins: [react()],
})
