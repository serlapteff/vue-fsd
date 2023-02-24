<script setup lang="ts">
// import cls from './Sidebar.module.scss'
import { inject } from 'vue'
import IconMoon from '@/shared/assets/icons/moon.svg?component'
import IconSun from '@/shared/assets/icons/sun.svg?component'
import { Theme } from '@/shared/lib/composables/theme/useTheme'
// import UIButton from '@/shared/ui/UIButton.vue'
import LangSwitcher from '@/widgets/LangSwitcher/ui/LangSwitcher.vue'
import { useTranslation } from 'i18next-vue'

const toggleTheme: ((payload: MouseEvent) => void) | undefined =
    inject('toggleTheme')
const theme = inject('theme')
const { t } = useTranslation()
</script>
<template>
    <div :class="$style['side-bar']">
        <button @click="toggleTheme">
            <IconMoon v-if="theme === Theme.DARK" />
            <IconSun v-else />
        </button>
        <!--        <UIButton>Text</UIButton>-->
        <div :class="$style.links">
            <router-link :class="$style.link" to="/">{{
                t('Главная')
            }}</router-link>
            <router-link :class="$style.link" to="/about">{{
                t('О компании')
            }}</router-link>
        </div>
        <div>
            <LangSwitcher />
        </div>
    </div>
</template>

<style module>
@import './Sidebar.module.scss';
</style>
