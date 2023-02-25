<template>
    <div :class="['app', $props.theme]">
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    theme: string
}>()
</script>
