import path from 'path'

import { mergeConfig } from 'vite'
import { ViteFinal } from '@storybook/builder-vite'
import svgLoader from 'vite-svg-loader'
module.exports = {
    stories: ['./../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/vue3',
    core: {
        builder: '@storybook/builder-vite',
    },
    features: {
        storyStoreV7: false,
    },
    /**
     * A option exposed by storybook-builder-vite for customising the Vite config.
     * @see https://github.com/eirslett/storybook-builder-vite#customize-vite-config
     * @param {import("vite").UserConfig} config
     * @see https://vitejs.dev/config/
     */
    async viteFinal(config: ViteFinal) {
        // Merge custom configuration into the default config
        return mergeConfig(config, {
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, '../../src/'),
                },
            },
            plugins: [svgLoader()],
            // Add dependencies to pre-optimization
            // optimizeDeps: {
            //   include: ['storybook-dark-mode'],
            // },
        })
    },
}
