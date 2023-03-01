import vue from '@vitejs/plugin-vue'
import { BuildOptions } from './types/config'
import { PluginOption } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import stylelint from 'vite-plugin-stylelint'
import svgLoader from 'vite-svg-loader'
import eslint from 'vite-plugin-eslint'
import checker from 'vite-plugin-checker'

export function buildPlugins(options: BuildOptions): PluginOption[] {
    return [
        vue(),
        eslint(),
        tsconfigPaths(),
        stylelint({
            // recommend to enable auto fix
            fix: true,
        }),
        svgLoader(),
        checker({
            vueTsc: true,
        }),
    ]
}
