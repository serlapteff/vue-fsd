<template>
  <div :class="cls.navBar">
    <router-link :class="cls.link" to="/">Главная</router-link>
    <router-link :class="cls.link" to="/about">О компании</router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import cls from './NavBar.module.css'

export default defineComponent({
  name: 'NavBar',
  setup() {


    return {
      cls
    }
  }
})
</script>

