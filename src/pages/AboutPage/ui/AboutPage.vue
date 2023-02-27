<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()
</script>
<template>
    <div>
        <div>{{ t('О компании', { ns: 'about' }) }}</div>
    </div>
</template>
