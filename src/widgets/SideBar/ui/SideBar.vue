<script setup lang="ts">
// import cls from './Sidebar.module.scss'
import { ref } from 'vue'
// import { useTranslation } from 'i18next-vue'
import UIButton from '@/shared/ui/UIButton/UIButton.vue'
import { ButtonSize, ButtonVariant } from '@/shared/ui/UIButton/types'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher/'
import AppLink from '@/shared/ui/AppLink/AppLink.vue'
import { AppLinkVariant } from '@/shared/ui/AppLink/types'
import IconHome from '@/shared/assets/icons/icon-home-page.svg?component'
import IconAbout from '@/shared/assets/icons/icon-about-page.svg?component'
import { RouthPath } from '@/app/providers/router/config/routes'
import { LangSwitcher } from '@/widgets/LangSwitcher/'

// const { t } = useTranslation()

const collapsed = ref<boolean>(false)
const toggleSidebar = (): void => {
    collapsed.value = !collapsed.value
}
// const btnVariant = computed(() => ButtonVariant.BACKGROUND_INVERT)
// const btnSize = computed(() => ButtonSize.XL)
// const appLinkVariant = computed(() => AppLinkVariant.PRIMARY)

// const paths = computed(() => RouthPath)
</script>
<template>
    <div data-test="sidebar" :class="['Sidebar', { ['collapsed']: collapsed }]">
        <UIButton
            data-test="toggleSidebar"
            class="collapsedBtn"
            :variant="ButtonVariant.BACKGROUND_INVERT"
            :size="ButtonSize.XL"
            squire
            @click="toggleSidebar"
        >
            {{ collapsed ? '>' : '<' }}
        </UIButton>
        <div class="navItems">
            <AppLink
                class="navItem"
                :variant="AppLinkVariant.PRIMARY"
                :to="RouthPath.main"
            >
                <IconHome class="icon" />
                <span>{{ $t('Главная') }}</span>
            </AppLink>
            <AppLink
                class="navItem"
                :variant="AppLinkVariant.PRIMARY"
                :to="RouthPath.about"
            >
                <IconAbout class="icon" />
                <span>{{ $t('О компании') }}</span>
            </AppLink>
        </div>
        <div class="switchers">
            <ThemeSwitcher />
            <LangSwitcher class="langSwitcher" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/widgets/SideBar/ui/Sidebar.scss';
</style>
