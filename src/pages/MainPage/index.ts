import { defineAsyncComponent } from 'vue'

// export const MainPage = defineAsyncComponent(() => import('./ui/MainPage.vue'))
export const MainPage = defineAsyncComponent(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                return resolve(import('./ui/MainPage.vue'))
            }, 1500)
        })
)
