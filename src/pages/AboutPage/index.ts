import { defineAsyncComponent } from 'vue'

// export const AboutPage = defineAsyncComponent(
//     () => import('./ui/AboutPage.vue')
// )
export const AboutPage = defineAsyncComponent(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                return resolve(import('./ui/AboutPage.vue'))
            }, 1500)
        })
)
