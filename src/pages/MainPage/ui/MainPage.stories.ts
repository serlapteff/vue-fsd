import MainPage from './MainPage.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator.vue'

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export default {
    title: 'Pages/MainPage',
    component: MainPage,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        () => ({
            components: { ThemeDecorator },
            template: `<ThemeDecorator theme="default"><story /></ThemeDecorator>`,
        }),
    ],
} as Meta<MainPage>

const Template: StoryFn<typeof MainPage> = (args) => ({
    components: { MainPage },
    setup() {
        return { args }
    },
    template: `<MainPage v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
    () => ({
        components: { ThemeDecorator },
        template: '<ThemeDecorator theme="dark"><story /></ThemeDecorator>',
    }),
]
