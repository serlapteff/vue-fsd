<script setup lang="ts">
// import cls from './AboutPage.module.scss'
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()
</script>
<template>
    <div>
        <div>{{ t('О компании', { ns: 'about' }) }}</div>
    </div>
</template>
