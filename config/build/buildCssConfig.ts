import {CSSOptions} from "vite";
import {BuildOptions} from "./types/config";

export function buildCssConfig({ isDev }: BuildOptions): CSSOptions {
    return {
        devSourcemap: true,
        modules: {
            localsConvention: 'camelCase',
            generateScopedName: isDev ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]'
        }
    }
}
