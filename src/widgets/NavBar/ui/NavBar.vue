<template>
    <div :class="cls.navBar">
        {{ props.name }}
        <router-link :class="cls.link" to="/">Главная</router-link>
        <router-link :class="cls.link" to="/about">О компании</router-link>
    </div>
</template>

<script setup lang="ts">
// import { defineComponent } from 'vue'
import cls from './NavBar.module.css'

interface User {
    name?: number
}

const props = defineProps<User>()

// export default defineComponent({
//     name: 'NavBar',
//     setup() {
//         return {
//             cls,
//         }
//     },
// })
</script>
