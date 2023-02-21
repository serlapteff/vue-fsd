<script setup lang="ts">
import {RouterView} from 'vue-router';
</script>

<template>
  <RouterView name="default" v-slot="{ Component, route }">
    <transition mode="out-in" :key="route.path">
      <Suspense>
        <template #default>
          <component :is="Component" :key="route.path"/>
        </template>
        <template #fallback>
          <div>
            Загрузка...
          </div>
        </template>
      </Suspense>
    </transition>
  </RouterView>
</template>
