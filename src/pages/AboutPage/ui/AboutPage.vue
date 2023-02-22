<script setup lang="ts">
import cls from './AboutPage.module.scss'
import { inject } from 'vue'

const theme: string | undefined = inject('theme')
const toggle: ((payload: MouseEvent) => void) | undefined =
    inject('toggleTheme')

console.log(theme)
</script>
<template>
    <div>
        <div>О компании</div>
        {{ theme }}
        <button :class="cls.buttonPrime" @click="toggle">toggle</button>
    </div>
</template>
