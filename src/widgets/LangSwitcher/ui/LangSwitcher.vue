<script setup lang="ts">
import { reactive, ref } from 'vue'
import i18next from 'i18next'

const lc = reactive<string[]>(['ru', 'en'])

const changeLang = ({ target }: Event): void => {
    const locale = target as HTMLSelectElement
    console.log(locale.value)
    i18next.changeLanguage(locale.value)
}
const curLng = ref(localStorage.getItem('i18nextLng') || 'ru')
i18next.on('initialized', function () {
    curLng.value = i18next.language
})
</script>

<template>
    <!--    <label for="locale">Locale: </label>-->
    <select id="locale" @change="changeLang($event)" v-model="curLng">
        <option v-for="locale in lc" :value="locale" :key="locale">
            {{ locale }}
        </option>
    </select>
</template>
