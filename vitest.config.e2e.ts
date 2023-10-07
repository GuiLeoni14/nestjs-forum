import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globals: true,
    root: './',
    setupFiles: ['./test/setup-e2e.ts'],
    testTimeout: 50000, // tebi upload time out, verificar se realmente precisa
  },
  plugins: [
    tsConfigPaths(),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
})
