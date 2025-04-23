import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    // Configuración de Vitest
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    // Incluir todos los archivos que terminan con test.ts/js o spec.ts/js
    include: ['**/*.{test,spec}.{ts,tsx,js,jsx}'],
    // Excluir node_modules y otros directorios
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    // Para ver más detalles en los informes de cobertura
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/setupTests.ts',
      ],
    },
  },
})
