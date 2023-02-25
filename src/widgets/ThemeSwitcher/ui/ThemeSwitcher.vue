<template>
    <UIButton :variant="ButtonVariant.CLEAR" @click="toggleTheme">
        <IconMoon v-if="theme === Theme.DARK" />
        <IconSun v-else />
    </UIButton>
</template>

<script setup lang="ts">
import IconMoon from '@/shared/assets/icons/moon.svg?component'
import IconSun from '@/shared/assets/icons/sun.svg?component'
import UIButton from '@/shared/ui/UIButton/UIButton.vue'
import { inject } from 'vue'
import { ButtonVariant } from '@/shared/ui/UIButton/types'
import { Theme } from '@/shared/lib/composables/theme/useTheme'

const toggleTheme: ((payload: MouseEvent) => void) | undefined =
    inject('toggleTheme')
const theme = inject('theme')
</script>

<!--<style scoped></style>-->
