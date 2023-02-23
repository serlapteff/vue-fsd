import UIButton from './UIButton.vue'
import { Story, StoryFn } from '@storybook/vue3'
//
// export default {
//     title: 'Button/UIButton',
//     component: IUButton,
// }
//
// export const Primary = () => ({
//     components: { IUButton },
//     template: '<IUButton>Текст</IUButton>',
// })

// import MyButton from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Button/UIButton',
    component: UIButton,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick: {},
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        default: { control: 'text' },
    },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: StoryFn<typeof UIButton> = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { UIButton },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args }
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<UIButton v-bind="args">
            <template v-if="args.default" v-slot:default>{{ args.default }}</template>
            <template v-else v-slot:default>Текст</template>
        </UIButton>`,
})

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Button',
    default: 'text',
    // slotContent: 'text',
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
    size: 'large',
    label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
    size: 'small',
    label: 'Button',
}
