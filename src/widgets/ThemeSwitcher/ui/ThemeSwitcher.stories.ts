import ThemeSwitcher from './ThemeSwitcher.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator.vue'
import { inject, provide, readonly, ref } from 'vue'
import { Theme, useTheme } from '@/shared/lib/composables/theme/useTheme'

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export default {
    title: 'Widgets/ThemeSwitcher',
    component: ThemeSwitcher,
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
} as Meta<ThemeSwitcher>

const Template: StoryFn<typeof ThemeSwitcher> = (args) => ({
    components: { ThemeSwitcher },
    setup() {
        return { args }
    },
    template: `<ThemeSwitcher v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
    () => ({
        components: { ThemeDecorator },
        setup() {
            provide('theme', Theme.DARK)
        },
        template: '<ThemeDecorator theme="dark"><story /></ThemeDecorator>',
    }),
]
