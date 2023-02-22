<script setup lang="ts">
import {provide, readonly} from "vue";
import {useTheme} from "@/shared/lib/composables/theme/useTheme";
import NavBar from "@/widgets/NavBar/index";
import {Routing} from "@/app/providers/router/index";

const {theme, toggleTheme} = useTheme()
provide('theme', readonly(theme))
provide('toggleTheme', toggleTheme)
</script>

<template>
  <div :class="['app', theme]">
    <NavBar/>
    <button @click="toggleTheme">toggle</button>
    <Routing/>
  </div>
</template>

<style module lang="scss">

</style>
