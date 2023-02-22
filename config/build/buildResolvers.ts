import { BuildOptions } from './types/config'
import path from 'path'

export function buildResolvers(options: BuildOptions) {
    return {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, options.paths.src),
            },
        ],
    }
}
