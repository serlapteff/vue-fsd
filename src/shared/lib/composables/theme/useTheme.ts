import { Ref, ref, UnwrapRef } from 'vue'
export enum Theme {
    DEFAULT = 'default',
    DARK = 'dark',
}
interface UseThemeResult {
    toggleTheme: () => void
    theme: Ref<UnwrapRef<Theme>>
}
// export type ProvidedTheme = Symbol as InjectionKey<string>;
export const LOCAL_STORAGE_THEME_KEY = 'theme'

const curTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DEFAULT

localStorage.setItem(LOCAL_STORAGE_THEME_KEY, curTheme)
export function useTheme(): UseThemeResult {
    // console.log(import.meta.env)

    const theme = ref<Theme>(curTheme)
    const toggleTheme = () => {
        theme.value = theme.value === Theme.DARK ? Theme.DEFAULT : Theme.DARK
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme.value)
    }
    return {
        theme,
        toggleTheme,
    }
}
