import { mount } from '@vue/test-utils'
import { expect } from 'vitest'
import UIButton from './UIButton.vue'
import { ButtonVariant } from './types'

describe('Button', () => {
    it('Render button', () => {
        const wrapper = mount(UIButton, {
            slots: {
                default: 'text',
            },
        })
        expect(wrapper.text()).toBe('text')
    })
    it('Render button theme clear', () => {
        const wrapper = mount(UIButton, {
            props: {
                variant: ButtonVariant.CLEAR,
            },
            slots: {
                default: 'text',
            },
        })
        expect(wrapper.classes()).toContain('clear')
    })
})
