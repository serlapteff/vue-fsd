<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()
</script>

<template>
    <div :class="cls.NotFoundPage">
        <div>{{ t('Страница не найдена') }}</div>
    </div>
</template>

<style lang="scss" module="cls">
@import 'NotFoundPage.module';
</style>
