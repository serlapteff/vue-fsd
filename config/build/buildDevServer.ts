import { ServerOptions } from 'vite'
import { BuildOptions } from './types/config'

export function buildDevServer(options: BuildOptions): ServerOptions {
    return {
        port: options.port,
        host: options.host,
        // watch: {
        //     usePolling: true,
        // },
    }
}
