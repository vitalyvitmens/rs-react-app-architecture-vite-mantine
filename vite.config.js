import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugin = {
  registerType: 'prompt',
  includeAssets: ['icon.png', 'screenshot.png'],
  manifest: {
    name: 'Rick & Morty',
    short_name: 'Rick&Morty',
    description: 'Rick and Morty app',
    theme_color: '#000000',
    background_color: '#fafafa',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    id: '/',
    start_url: '/',
    screenshots: [
      {
        src: '/src/assets/screenshots/screenshot-1900x920.png',
        sizes: '1900x920',
        type: 'image/png',
        form_factor: 'wide',
        platform: 'web',
      },
      {
        src: '/src/assets/screenshots/screenshot-375x667.png',
        sizes: '375x667',
        type: 'image/png',
        form_factor: 'narrow',
        platform: 'web',
      },
    ],
    icons: [
      {
        src: '/src/assets/icons/icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/src/assets/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/src/assets/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/src/assets/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: '/src/assets/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/src/assets/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: '/src/assets/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/src/assets/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        form_factor: 'narrow',
      },
      {
        src: '/src/assets/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        form_factor: 'wide',
      },
    ],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    VitePWA(manifestForPlugin),
  ],
})
