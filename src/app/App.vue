<script setup lang="ts">
import { provide, readonly } from 'vue'
import { useTheme } from '@/shared/lib/composables/theme/useTheme'
import { NavBar } from '@/widgets/NavBar/index'
import { Routing } from '@/app/providers/router/index'
import { SideBar } from '@/widgets/SideBar/'

const { theme, toggleTheme } = useTheme()
provide('theme', readonly(theme))
provide('toggleTheme', toggleTheme)
</script>

<template>
    <div :class="['app', theme]">
        <header>
            <NavBar />
        </header>
        <main class="content">
            <SideBar />
            <Routing />
        </main>
    </div>
</template>
