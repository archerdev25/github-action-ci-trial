import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: ['**/test-utils/**', '**/vitest.setup.ts','./src/App.tsx','./src/main.tsx','./public/mockServiceWorker.js','./vite.config.ts','./eslint.config.js','./src/mocks/browser.ts'],
    },
  },
})
