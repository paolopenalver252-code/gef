import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // Modo `artifact`: versión para compartir por enlace (rutas relativas y fuentes embebidas en el CSS).
  ...(mode === 'artifact' && {
    base: './',
    build: { outDir: 'dist-artifact', assetsInlineLimit: 400_000 },
  }),
}))
