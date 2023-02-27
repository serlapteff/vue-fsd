import { app } from '@storybook/vue3'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import StyleDecorator from '@/shared/config/storybook/StyleDecorator.vue'
import i18next from 'i18next'
import I18NextVue from 'i18next-vue'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
export const decorators = [
    (story) => ({
        components: { story, StyleDecorator },
        template: '<StyleDecorator><story /></StyleDecorator>',
    }),
]

app.use(I18NextVue, { i18next })
