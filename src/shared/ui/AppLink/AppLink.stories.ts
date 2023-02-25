import Applink from './Applink.vue'
import { Meta, Story, StoryFn } from '@storybook/vue3'
import { AppLinkVariant } from './types'
import ThemeDecorator from '../../config/storybook/ThemeDecorator.vue'

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export default {
    title: 'Shared/Applink',
    component: Applink,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick: {},
        default: {
            control: 'text',
            description: 'Slot content',
            defaultValue: 'Текст',
        },
        // decorators: StyleDecorator,
        // size: {
        //     control: { type: 'select' },
        //     options: ['small', 'medium', 'large'],
        // },
        // default: { control: 'text' },
    },
    args: {
        to: '/',
    },
} as Meta<Applink>

// const Template: StoryFn<typeof UIButton> = (args) => ({
//     // Components used in your story `template` are defined in the `components` object
//     components: { UIButton },
//     // The story's `args` need to be mapped into the template through the `setup()` method
//     setup() {
//         return { args }
//     },
//     // And then the `args` are bound to your component with `v-bind="args"`
//     template: `<UIButton v-bind="args">
//             <template v-if="args.default" v-slot:default>{{ args.default }}</template>
//             <template v-else v-slot:default>Текст</template>
//         </UIButton>`,
// })
const Template: StoryFn<typeof Applink> = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Applink },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args }
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<Applink :to="args.to" v-bind="args">{{ args.default }}</Applink>`,
})

export const Primary = Template.bind({})
Primary.args = {
    variant: AppLinkVariant.PRIMARY,
}
export const Secondary = Template.bind({})
Secondary.args = {
    variant: AppLinkVariant.SECONDARY,
}
export const Red = Template.bind({})
Red.args = {
    variant: AppLinkVariant.RED,
}
export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    variant: AppLinkVariant.PRIMARY,
}
PrimaryDark.decorators = [
    () => ({
        template: '<div class="app dark"><story /></div>',
    }),
]
export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    variant: AppLinkVariant.SECONDARY,
}
SecondaryDark.decorators = [
    () => ({
        template: '<div class="app dark"><story /></div>',
    }),
]
export const RedDark = Template.bind({})
RedDark.args = {
    variant: AppLinkVariant.RED,
}
RedDark.decorators = [
    () => ({
        template: '<div class="app dark"><story /></div>',
    }),
]
