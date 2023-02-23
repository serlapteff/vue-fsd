import { mount } from '@vue/test-utils'
import MainPage from './MainPage.vue'
describe('HelloWorld', () => {
    it('displays message', () => {
        const wrapper = mount(MainPage)

        // Assert the rendered text of the component
        expect(wrapper.find('div').text()).toContain('Главная страница')
    })
})
