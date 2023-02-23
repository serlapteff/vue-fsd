import { mount } from '@vue/test-utils'
import UIButton from './UIButton.vue'

const MessageComponent = {
    template: '<p>{{ msg }}</p>',
    props: ['msg'],
}
describe('Button', () => {
    it('should display header text', () => {
        const msg = 'text'
        // const wrapper = mount(UIButton, {
        //     props: { msg },
        //     slots: { default: 'text' },
        // })

        expect(msg).toEqual('text')
    })
    it('displays message', () => {
        const wrapper = mount(UIButton, {
            // props: {
            //     msg: 'Hello world',
            // },
            slots: {
                default: 'text',
            },
        })

        // Assert the rendered text of the component
        expect(wrapper.text()).toContain('text')
    })
})
