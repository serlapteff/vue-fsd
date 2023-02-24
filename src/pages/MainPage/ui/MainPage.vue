<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()
</script>

<template>
    <div>{{ t('Главная страница', { ns: 'main' }) }}</div>
</template>
