
<script setup lang="ts">
import {useTheme} from "@/app/composables/theme/useTheme";
import {provide, readonly} from "vue";

const {theme, toggleTheme} = useTheme()
provide('theme', readonly(theme))
provide('toggleTheme', toggleTheme)
</script>

<template>
  <div :class="['app', theme]">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      <!--    <router-link to="/profile">Profile</router-link>-->
    </div>
    <button @click="toggleTheme">toggle</button>
    <RouterView name="default" v-slot="{ Component, route }">
      <transition mode="out-in" :key="route.path">
        <Suspense>
          <template #default>
            <component :is="Component" :key="route.path"/>
          </template>
          <template #fallback>
            <div>
              Загрузка...
            </div>
          </template>
        </Suspense>
      </transition>
    </RouterView>
  </div>
</template>

<style module lang="scss">

</style>
