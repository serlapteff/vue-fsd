import vue from "@vitejs/plugin-vue";
import {BuildOptions} from "./types/config";
import {PluginOption} from "vite";
import tsconfigPaths from 'vite-tsconfig-paths'

export function buildPlugins(options: BuildOptions): PluginOption[] {
    return [
        vue(),
        tsconfigPaths()
    ]
}
