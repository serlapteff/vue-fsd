<template>
    <div :class="cls.PageError">
        <h1>{{ t('Что-то пошло не так.') }}</h1>
        <UIButton @click="reload">{{ t('Обновить страницу') }}</UIButton>
    </div>
</template>

<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import UIButton from '@/shared/ui/UIButton/UIButton.vue'

const { t } = useTranslation()

const reload = (): void => {
    window.location.reload()
}
</script>

<style lang="scss" module="cls">
@import 'PageError.module';
</style>
