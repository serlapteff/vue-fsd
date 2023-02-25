<template>
    <button :class="[cls.UIButton, classes, mods]" @click="emit('click')">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { ButtonHTMLAttributes, computed, defineProps, useCssModule } from 'vue'
// import cls from './UIButton.module.scss'
import { ButtonVariant, ButtonSize } from './types'
interface ButtonProps extends ButtonHTMLAttributes {
    // className?: string
    variant?: ButtonVariant
    squire?: boolean
    size?: ButtonSize
}

const props = withDefaults(defineProps<ButtonProps>(), {
    variant: ButtonVariant.DEFAULT,
    size: ButtonSize.M,
})

const cls = useCssModule()

const classes = computed((): string[] => [cls[props.variant], cls[props.size]])
const mods = computed(() => {
    return {
        [cls.squire]: props.squire,
    }
})
const emit = defineEmits(['click'])
</script>

<style lang="scss" module>
@import './UIButton.module.scss';
</style>
