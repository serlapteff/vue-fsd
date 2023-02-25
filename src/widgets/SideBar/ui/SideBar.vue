<script setup lang="ts">
// import cls from './Sidebar.module.scss'
import { ref } from 'vue'
import LangSwitcher from '@/widgets/LangSwitcher/ui/LangSwitcher.vue'
import { useTranslation } from 'i18next-vue'
import UIButton from '@/shared/ui/UIButton/UIButton.vue'
import { ButtonSize, ButtonVariant } from '@/shared/ui/UIButton/types'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher/'
import AppLink from '@/shared/ui/AppLink/AppLink.vue'
import { AppLinkVariant } from '@/shared/ui/AppLink/types'
import IconHome from '@/shared/assets/icons/icon-home-page.svg?component'
import IconAbout from '@/shared/assets/icons/icon-about-page.svg?component'
import { RouthPath } from '@/app/providers/router/config/routes'

const { t } = useTranslation()

const collapsed = ref<boolean>(false)
const toggleSidebar = (): void => {
    collapsed.value = !collapsed.value
}
</script>
<template>
    <div :class="[cls.Sidebar, { [cls.collapsed]: collapsed }]">
        <UIButton
            :class="cls.collapsedBtn"
            :variant="ButtonVariant.BACKGROUND_INVERT"
            :size="ButtonSize.XL"
            squire
            @click="toggleSidebar"
        >
            {{ collapsed ? '>' : '<' }}
        </UIButton>
        <div :class="cls.navItems">
            <AppLink
                :class="cls.navItem"
                :variant="AppLinkVariant.PRIMARY"
                :to="RouthPath.main"
            >
                <IconHome :class="cls.icon" />
                <span>{{ t('Главная') }}</span>
            </AppLink>
            <AppLink
                :class="cls.navItem"
                :variant="AppLinkVariant.PRIMARY"
                :to="RouthPath.about"
            >
                <IconAbout :class="cls.icon" />
                <span>{{ t('О компании') }}</span>
            </AppLink>
        </div>
        <div :class="cls.switchers">
            <ThemeSwitcher />
            <LangSwitcher :class="cls.langSwitcher" />
        </div>
    </div>
</template>

<style lang="scss" module="cls">
@import './Sidebar.module.scss';
</style>
