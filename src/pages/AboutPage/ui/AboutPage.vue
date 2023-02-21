
<script setup lang="ts">
import cls from './AboutPage.module.scss'
import {inject, unref} from 'vue'

const theme = inject<string>('theme')
const toggle = inject<VoidFunction>('toggleTheme')

// console.log(unref(theme))

</script>
<template>
  <div>
    <h1>About</h1>
    {{ theme }}
    <button :class="cls.buttonPrime" @click="toggle">toggle</button>
  </div>
</template>


<style scoped>

</style>
