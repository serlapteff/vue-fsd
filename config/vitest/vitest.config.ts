import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'
import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
    test: {
        // root: '.',
        clearMocks: true,
        globals: true,
        environment: 'jsdom',
        // coverage: {
        //     reporter: ['text', 'html'],
        //     exclude: [
        //         'node_modules/',
        //         // 'src/setupTests.ts',
        //     ],
        // },
        setupFiles: [resolve(__dirname, 'vitest.setup.ts')],
        css: {
            modules: {
                classNameStrategy: 'non-scoped',
            },
        },
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, '../../src'),
                // replacement: fileURLToPath(
                //     new URL(options.paths.src, import.meta.url)
                // ),
            },
        ],
    },
    plugins: [vue(), tsconfigPaths(), svgLoader()],
})
