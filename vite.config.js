import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Team_Period/",
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: false,
  
      pwaAssets: {
        disabled: false,
        config: true,
      },
  
      manifest: {
        name: '고궁의밤',
        short_name: '고궁의밤',
        description: '고궁의밤',
        theme_color: '#ffffff',
      },
  
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
  
      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    })
  ],
})
