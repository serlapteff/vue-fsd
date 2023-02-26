<script setup lang="ts">
import { provide, readonly } from 'vue'
import { useTheme } from '@/shared/lib/composables/theme/useTheme'
import { NavBar } from '@/widgets/NavBar/index'
import { Routing } from '@/app/providers/router/index'
import { SideBar } from '@/widgets/SideBar/'
import VErrorBoundary from 'vue-error-boundary'
import { PageError } from '@/widgets/PageError'

const { theme, toggleTheme } = useTheme()
provide('theme', readonly(theme))
provide('toggleTheme', toggleTheme)

const errorLog = (e: ErrorEvent) => {
    console.log(e)
}
</script>

<template>
    <VErrorBoundary
        @error-captured="errorLog"
        :on-error="errorLog"
        :fall-back="PageError"
        stop-propagation
    >
        <div :class="['app', theme]">
            <header>
                <NavBar />
            </header>
            <main class="content">
                <SideBar />
                <Routing />
            </main>
        </div>
    </VErrorBoundary>
</template>
