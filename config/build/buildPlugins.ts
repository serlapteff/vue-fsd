import vue from "@vitejs/plugin-vue";
import {BuildOptions} from "./types/config";
import {PluginOption} from "vite";

export function buildPlugins(options: BuildOptions): PluginOption[] {
    return [
        vue()
    ]
}
