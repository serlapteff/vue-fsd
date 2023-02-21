import {BuildOptions} from "./types/config";
// import {AliasOptions, ResolveOptions} from "vite";

export function buildResolvers(options: BuildOptions) {
    return {
        alias: {
            '@': options.paths.src,
        },
    }
}
