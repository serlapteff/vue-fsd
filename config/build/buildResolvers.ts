import { BuildOptions } from './types/config'
import path from 'path'
// import { fileURLToPath } from 'node:url'

export function buildResolvers(options: BuildOptions) {
    return {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, options.paths.src),
                // replacement: fileURLToPath(
                //     new URL(options.paths.src, import.meta.url)
                // ),
            },
            // {
            //     // this is required for the SCSS modules
            //     find: /^@(.*)$/,
            //     replacement: '$1',
            // },
        ],
    }
}
