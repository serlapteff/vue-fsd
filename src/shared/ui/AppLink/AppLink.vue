<template>
    <router-link
        :class="[cls.AppLink, cls[$props.variant]]"
        :to="$props.to"
        v-bind="$attrs"
    >
        <slot />
    </router-link>
</template>

<script setup lang="ts">
import { RouterLinkProps } from 'vue-router'
import { AppLinkVariant } from './types'

interface AppLinkProps extends RouterLinkProps {
    className?: string
    variant?: AppLinkVariant
}

defineProps<AppLinkProps>()
</script>

<style lang="scss" module="cls">
@import 'AppLink.module';
</style>
