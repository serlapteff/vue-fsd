import vue from '@vitejs/plugin-vue'
import { BuildOptions } from './types/config'
import { PluginOption } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import stylelint from 'vite-plugin-stylelint'

export function buildPlugins(options: BuildOptions): PluginOption[] {
    return [
        vue(),
        tsconfigPaths(),
        stylelint({
            // recommend to enable auto fix
            fix: true,
        }),
    ]
}
