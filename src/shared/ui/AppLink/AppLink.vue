<template>
    <router-link
        :class="[cls.AppLink, cls[$props.variant]]"
        :to="$props.to"
        v-bind="$attrs"
    >
        <slot />
    </router-link>
</template>
<script lang="ts">
import { RouterLink, useLink } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AppLink',

    props: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        ...RouterLink.props,
        variant: String,
    },

    // setup(props) {
    //     // `props` contains `to` and any other prop that can be passed to <router-link>
    //     const { navigate, href, route, isActive, isExactActive } =
    //         useLink(props)
    //
    //     // profit!
    //
    //     return { isExternalLink }
    // },
})
</script>

<!--<script setup lang="ts">-->
<!--import { RouterLinkProps } from 'vue-router'-->
<!--import { AppLinkVariant } from './types'-->
<!--interface AppLinkProps extends RouterLinkProps {-->
<!--    variant?: AppLinkVariant | undefined-->
<!--}-->

<!--const props = defineProps<{-->
<!--    ...RouterLinkProps,-->
<!--    variant?: AppLinkVariant,-->

<!--}>()-->
<!--console.log(props)-->
<!--</script>-->

<style lang="scss" module="cls">
@import 'AppLink.module';
</style>
