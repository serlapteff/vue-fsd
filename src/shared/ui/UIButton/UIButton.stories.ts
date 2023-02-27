import UIButton from './UIButton.vue'
import { Meta, Story, StoryFn } from '@storybook/vue3'
import { ButtonSize, ButtonVariant } from './types'
import ThemeDecorator from '../../config/storybook/ThemeDecorator.vue'
// import StyleDecorator from '../../config/storybook/StyleDecorator.vue'

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export default {
    title: 'Shared/UIButton',
    component: UIButton,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick: {},
        default: {
            control: 'text',
            description: 'Slot content',
            defaultValue: 'Текст кнопки',
        },
        // decorators: StyleDecorator,
        // size: {
        //     control: { type: 'select' },
        //     options: ['small', 'medium', 'large'],
        // },
        // default: { control: 'text' },
    },
    decorators: [
        () => ({
            components: { ThemeDecorator },
            template: `<ThemeDecorator theme="default"><story /></ThemeDecorator>`,
        }),
    ],
} as Meta<UIButton>

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
const Template: StoryFn<typeof UIButton> = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { UIButton },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args }
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<UIButton v-bind="args">{{ args.default }}</UIButton>`,
})

export const Default = Template.bind({})
Default.args = {
    default: 'Текст',
}
export const Clear = Template.bind({})
Clear.args = {
    variant: ButtonVariant.CLEAR,
    default: 'Текст',
}

export const Outline = Template.bind({})
Outline.args = {
    default: 'Text',
    variant: ButtonVariant.OUTLINE,
}

export const OutlineL = Template.bind({})
OutlineL.args = {
    default: 'Text',
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.L,
}

export const OutlineXL = Template.bind({})
OutlineXL.args = {
    default: 'Text',
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.XL,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    default: 'Text',
    variant: ButtonVariant.OUTLINE,
}
OutlineDark.decorators = [
    () => ({
        components: { ThemeDecorator },
        template: '<ThemeDecorator theme="dark"><story /></ThemeDecorator>',
    }),
]

export const Background = Template.bind({})
Background.args = {
    default: 'Text',
    variant: ButtonVariant.BACKGROUND,
}

export const BackgroundInvert = Template.bind({})
BackgroundInvert.args = {
    default: 'Text',
    variant: ButtonVariant.BACKGROUND_INVERT,
}

export const Squire = Template.bind({})
Squire.args = {
    default: '›',
    variant: ButtonVariant.BACKGROUND_INVERT,
    squire: true,
}
//
// export const SizeM = Template.bind({})
// SizeM.args = {
//     default: '›',
//     variant: ButtonVariant.BACKGROUND_INVERT,
//     size: ButtonSize.M,
//     squire: true
// }

export const SquireSizeL = Template.bind({})
SquireSizeL.args = {
    default: '›',
    variant: ButtonVariant.BACKGROUND_INVERT,
    size: ButtonSize.L,
    squire: true,
}

export const SquireSizeXL = Template.bind({})
SquireSizeXL.args = {
    default: '›',
    variant: ButtonVariant.BACKGROUND_INVERT,
    size: ButtonSize.XL,
    squire: true,
}
