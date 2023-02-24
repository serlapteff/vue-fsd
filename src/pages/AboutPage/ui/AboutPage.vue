<script setup lang="ts">
import cls from './AboutPage.module.scss'
import { inject } from 'vue'
import { useTranslation } from 'i18next-vue'

const theme: string | undefined = inject('theme')
const toggle: ((payload: MouseEvent) => void) | undefined =
    inject('toggleTheme')

console.log(theme)

const { t } = useTranslation()
</script>
<template>
    <div>
        <div>{{ t('О компании', { ns: 'about' }) }}</div>
        {{ theme }}
        <button :class="cls.buttonPrime" @click="toggle">
            {{ t('toggle') }}
        </button>
    </div>
</template>
