<template>
    <div :class="cls['nav-bar']">
        <AppLink :class="cls.link" :variant="AppLinkVariant.PRIMARY" to="/"
            >Главная</AppLink
        >
        <AppLink :class="cls.link" :variant="AppLinkVariant.PRIMARY" to="/about"
            >О компании</AppLink
        >
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLink from '@/shared/ui/AppLink/AppLink.vue'
import { AppLinkVariant } from '@/shared/ui/AppLink/types'

export default defineComponent({
    computed: {
        AppLinkVariant() {
            return AppLinkVariant
        },
    },
    components: { AppLink },
})
</script>
<style lang="scss" module="cls">
@import 'NavBar.module';
</style>
