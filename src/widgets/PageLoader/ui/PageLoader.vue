<template>
    <SpinnerLoader :class="cls.PageLoader" />
</template>

<script setup lang="ts">
import SpinnerLoader from '@/shared/ui/Spinner/SpinnerLoader.vue'
</script>

<style lang="scss" module="cls">
@import 'PageLoader.module';
</style>
