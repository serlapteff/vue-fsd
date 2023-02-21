import {BuildOptions} from "./types/config";
import path from "path";
import {fileURLToPath} from "url";
// import {AliasOptions, ResolveOptions} from "vite";

export function buildResolvers(options: BuildOptions) {
    return {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, options.paths.src) },
        ],
    }
}
