<template>
    <teleport :to="teleportElem" v-if="isLoaded">
        <transition
            :duration="250"
            name="nested"
            mode="out-in"
            :enter-active-class="cls['nested-enter-active']"
            :leave-active-class="cls['nested-leave-active']"
            :enter-from-class="cls['nested-enter-from']"
            :leave-to-class="cls['nested-leave-to']"
        >
            <div
                v-if="isOpen"
                :class="[cls.Modal, cls.overlay, { [cls.opened]: isOpen }]"
                @click="closeHandler"
            >
                <div :class="cls.content" @click="onContentClick">
                    <slot />
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

interface ModalProps {
    to?: string
    isOpen?: boolean
    onClose?: () => void
}

const isLoaded = ref(false)
onMounted(() => {
    isLoaded.value = true
})

const teleportElem = computed(() => {
    return props.to ? props.to : '.app'
})

const props = defineProps<ModalProps>()

const closeHandler = (): void => {
    if (props.onClose) {
        props.onClose()
        window.removeEventListener('keydown', onKeyDown)
    }
}

const onContentClick = (e: Event): void => {
    e.stopPropagation()
}

watch(
    () => props.isOpen,
    (isOpen) => {
        if (isOpen) {
            console.log(isOpen)
            window.addEventListener('keydown', onKeyDown)
        }
    }
)

const onKeyDown = (e: KeyboardEvent): void => {
    console.log(e)
    if (e.key === 'Escape') {
        closeHandler()
    }
}
</script>

<style lang="scss" module="cls">
@import './UIModal.module.scss';
</style>
