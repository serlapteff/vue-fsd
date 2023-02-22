import {BuildOptions} from "./types/config";
import {defineConfig, UserConfigExport} from "vite";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";
import {buildPreviewServer} from "./buildPreviewServer";
import {buildResolvers} from "./buildResolvers";
import {buildCssConfig} from "./buildCssConfig";

export function buildViteConfig(options: BuildOptions): UserConfigExport {
    const {mode, paths, isDev, envDir} = options
    return defineConfig({
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: (assetInfo) => {
                        let extType = assetInfo.name.split('.').at(1);
                        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                            extType = 'img';
                        }
                        return `assets/${extType}/[name]-[hash][extname]`;
                    },
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    entryFileNames: 'assets/js/[name]-[hash].js',

                },
            },
        },
        mode,
        envDir,
        plugins: buildPlugins(options),
        server: buildDevServer(options),
        preview: buildPreviewServer(options),
        resolve: buildResolvers(options),
        css: buildCssConfig(options)
    })
}
