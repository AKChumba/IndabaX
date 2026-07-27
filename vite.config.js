import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/2026/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        schedule: resolve(__dirname, 'schedule.html'),
        speakers: resolve(__dirname, 'speakers.html'),
        contact: resolve(__dirname, 'contact.html'),
        highlights: resolve(__dirname, 'highlights.html')
      }
    }
  }
})