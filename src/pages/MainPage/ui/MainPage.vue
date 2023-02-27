<script setup lang="ts">
// import { ref, watchEffect } from 'vue'
//
// const er = ref(false)
// watchEffect(() => {
//     if (er.value) {
//         throw new Error('это не кот и он не умеет говорить мяу, дурень')
//     }
//     // console.log(er.value)
// })
// const setErr = () => {
//     er.value = true
// }
</script>

<template>
    <!--    Кнопка для тестирования ErrorBoundary-->
    <!--    <button @click="setErr">ошибка</button>-->
    <div>{{ $t('Главная страница', { ns: 'main' }) }}</div>
</template>
