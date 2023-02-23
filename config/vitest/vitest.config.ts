import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
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
    },
    plugins: [vue()],
})
