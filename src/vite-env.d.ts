/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly APP_PORT: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
