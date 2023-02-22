import { BuildOptions } from './types/config'
import { defineConfig, UserConfigExport } from 'vite'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'
import { buildPreviewServer } from './buildPreviewServer'
import { buildResolvers } from './buildResolvers'
import { buildCssConfig } from './buildCssConfig'
import { buildConfig } from './buildConfig'

export function buildViteConfig(options: BuildOptions): UserConfigExport {
    const { mode, paths, isDev, envDir } = options
    return defineConfig({
        build: buildConfig(),
        mode,
        envDir,
        plugins: buildPlugins(options),
        server: buildDevServer(options),
        preview: buildPreviewServer(options),
        resolve: buildResolvers(options),
        css: buildCssConfig(options),
    })
}
