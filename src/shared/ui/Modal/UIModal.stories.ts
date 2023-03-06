import UIModal from './UIModal.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator.vue'
import vueRouter from 'storybook-vue3-router'

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export default {
    title: 'Shared/UIModal',
    component: UIModal,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        default: {
            control: 'text',
            description: 'Slot content',

            defaultValue:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem excepturi neque quaerat! Aliquam, commodi ea itaque laudantium mollitia obcaecati ratione reiciendis. Aliquid atque commodi error harum quasi quo, saepe tenetur!',
        },
    },
    decorators: [
        vueRouter(),
        () => ({
            components: { ThemeDecorator },
            template: `<ThemeDecorator theme="default"><story /></ThemeDecorator>`,
        }),
    ],
} as Meta<typeof UIModal>

const Template: StoryFn<typeof UIModal> = (args) => ({
    components: { UIModal },
    setup() {
        return { args }
    },
    template: `<UIModal v-bind="args" >{{args.default}}</UIModal>`,
})

export const Default = Template.bind({})
Default.args = {
    isOpen: true,
}

export const Dark = Template.bind({})
Dark.args = {
    isOpen: true,
    to: '.dark',
}
Dark.decorators = [
    () => ({
        components: { ThemeDecorator },
        template: '<ThemeDecorator theme="dark"><story /></ThemeDecorator>',
    }),
]
