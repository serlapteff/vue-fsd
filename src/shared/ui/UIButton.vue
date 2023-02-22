<template>
    <button :class="[cls.button]">
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import cls from './UIButton.module.scss'

// const ttt = 'sdsdf'
export default defineComponent({
    // props: {
    //     text: String,
    // },
    setup() {
        return {
            cls,
        }
    },
})
</script>
