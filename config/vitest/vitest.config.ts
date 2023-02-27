import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
export default defineConfig({
    test: {
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
    },
    plugins: [vue()],
})
