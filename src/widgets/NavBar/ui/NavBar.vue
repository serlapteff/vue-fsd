<template>
    <div :class="cls['nav-bar']">
        <UIButton :variant="ButtonVariant.CLEAR" @click="onToggleModal(true)">{{
            $t('Войти')
        }}</UIButton>
        <UIModal :is-open="isAuthModal" :on-close="() => onToggleModal(false)">
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur cum cumque distinctio eveniet facilis, fugiat
                itaque magni nulla possimus quis rem sed, sequi similique
                suscipit tempore ullam voluptate voluptates. Quo.
            </div>
        </UIModal>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UIButton from '@/shared/ui/UIButton/UIButton.vue'
import { ButtonVariant } from '@/shared/ui/UIButton/types'
import UIModal from '@/shared/ui/Modal/UIModal.vue'

const isAuthModal = ref<boolean>(false)

const onToggleModal = (value: boolean): void => {
    isAuthModal.value = value
}
// defineEmits([])
</script>
<style lang="scss" module="cls">
@import 'NavBar.module';
</style>
