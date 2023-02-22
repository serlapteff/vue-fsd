
<script setup lang="ts">
import cls from './AboutPage.module.scss'
import {inject} from 'vue'

const theme = inject<string>('theme')
const toggle = inject<void>('toggleTheme')

// console.log(unref(theme))

</script>
<template>
  <div>
    <h1>О компании</h1>
    {{ theme }}
    <button :class="cls.buttonPrime" @click="toggle">toggle</button>
  </div>
</template>


<style scoped>

</style>
