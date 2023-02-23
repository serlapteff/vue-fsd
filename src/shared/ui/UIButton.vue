<template>
    <button :class="[cls.button]">
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// const ttt = 'sdsdf'
export default defineComponent({
    // props: {
    //     text: String,
    // },
    setup() {
        return {
            // cls,
        }
    },
})
</script>

<style module="cls">
@import 'UIButton.module.scss';
</style>
