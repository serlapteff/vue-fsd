import { ServerOptions } from 'vite'
import { BuildOptions } from './types/config'

export function buildPreviewServer(options: BuildOptions): ServerOptions {
    return {
        port: options.port,
        host: options.host,
    }
}
