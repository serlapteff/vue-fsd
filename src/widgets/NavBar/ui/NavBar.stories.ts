import NavBar from './NavBar.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator.vue'
import vueRouter from 'storybook-vue3-router'

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export default {
    title: 'Widgets/NavBar',
    component: NavBar,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        vueRouter(),
        () => ({
            components: { ThemeDecorator },
            template: `<ThemeDecorator theme="default"><story /></ThemeDecorator>`,
        }),
    ],
} as Meta<NavBar>

const Template: StoryFn<typeof NavBar> = (args) => ({
    components: { NavBar },
    setup() {
        return { args }
    },
    template: `<NavBar v-bind="args" />`,
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
