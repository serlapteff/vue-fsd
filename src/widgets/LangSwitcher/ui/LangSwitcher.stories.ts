import LangSwitcher from './LangSwitcher.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator.vue'
// import { ButtonSize, ButtonVariant } from './types'

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export default {
    title: 'Widgets/LangSwitcher',
    component: LangSwitcher,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        // onClick: {},
        // default: {
        //   control: 'text',
        //   description: 'Slot content',
        //   defaultValue: 'Текст кнопки',
        // },
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
    args: {
        curLang: 'ru',
        locales: {
            ru: {
                nativeName: 'RU',
            },
            en: {
                nativeName: 'EN',
            },
        },
    },
} as Meta<LangSwitcher>

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
const Template: StoryFn<typeof LangSwitcher> = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { LangSwitcher },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args }
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<LangSwitcher v-bind="args"/>`,
})

export const Default = Template.bind({})
Default.args = {
    // default: 'Текст',
    // locales: {
    //     ru: {
    //         nativeName: 'RU',
    //     },
    //     en: {
    //         nativeName: 'EN',
    //     },
    // },
}
