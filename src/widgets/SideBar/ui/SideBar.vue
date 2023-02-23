<script setup lang="ts">
// import cls from './Sidebar.module.scss'
import { inject } from 'vue'
import IconMoon from '@/shared/assets/icons/moon.svg?component'
import IconSun from '@/shared/assets/icons/sun.svg?component'
import { Theme } from '@/shared/lib/composables/theme/useTheme'
import UIButton from '@/shared/ui/UIButton.vue'

const toggleTheme: ((payload: MouseEvent) => void) | undefined =
    inject('toggleTheme')
const theme = inject('theme')
</script>
<template>
    <div :class="$style['side-bar']">
        <button @click="toggleTheme">
            <IconMoon v-if="theme === Theme.DARK" />
            <IconSun v-else />
        </button>
        <UIButton>Text</UIButton>
        <div :class="$style.links">
            <router-link :class="$style.link" to="/">Главная</router-link>
            <router-link :class="$style.link" to="/about"
                >О компании</router-link
            >
        </div>
    </div>
</template>

<style module>
@import './Sidebar.module.scss';
</style>
