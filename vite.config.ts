// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: '/src/components/ThreeScene.js' // substitua por sua rota de entrada
    }
  }
})
