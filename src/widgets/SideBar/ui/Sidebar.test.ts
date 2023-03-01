import { mount, RouterLinkStub } from '@vue/test-utils'
import SideBar from './SideBar.vue'
import { Theme } from '@/shared/lib/composables/theme/useTheme'
import { useTheme } from '@/shared/lib/composables/theme/useTheme'
describe('SideBar', () => {
    const { toggleTheme } = useTheme()
    const wrapper = mount(SideBar, {
        global: {
            provide: {
                theme: Theme.DEFAULT,
                toggleTheme: toggleTheme,
            },
            stubs: {
                RouterLink: RouterLinkStub,
            },
        },
    })
    it('SideBar render', () => {
        expect(wrapper.find('.Sidebar').exists()).toBe(true)
    })
    it('Sidebar toggle', async () => {
        expect(wrapper.find('.Sidebar').exists()).toBe(true)
        const toggle = wrapper.find('[data-test="toggleSidebar"]')
        console.log(toggle.html())
        await toggle.trigger('click')
        expect(wrapper.classes()).toContain('collapsed')
    })
})
