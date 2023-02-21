export type BuildMode = 'production' | 'development' | string

export interface BuildPaths {
    entry?: string;
    build?: string;
    html?: string;
    src?: string;
    envDir?: string
}

export interface BuildOptions {
    mode: BuildMode;
    paths?: BuildPaths;
    isDev?: boolean;
    port: number;
    host: string;
    envDir: string;
}
