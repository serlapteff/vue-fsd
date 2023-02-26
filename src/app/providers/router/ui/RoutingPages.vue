<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageLoader from '@/widgets/PageLoader/ui/PageLoader.vue'
</script>

<template>
    <RouterView name="default" v-slot="{ Component, route }">
        <transition mode="out-in" :key="route.path">
            <div class="page-wrap">
                <Suspense timeout="0">
                    <template #default>
                        <component :is="Component" :key="route.path" />
                    </template>
                    <template #fallback>
                        <PageLoader />
                    </template>
                </Suspense>
            </div>
        </transition>
    </RouterView>
</template>
