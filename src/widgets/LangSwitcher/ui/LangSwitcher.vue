<script setup lang="ts">
import { reactive, ref } from 'vue'
import i18next from 'i18next'

const locales = reactive({
    ru: {
        nativeName: 'RU',
    },
    en: {
        nativeName: 'EN',
    },
})
// const localesLangs = computed(() => Object.keys(locales))

const changeLang = (lng: string) => {
    console.log(lng)
    i18next.changeLanguage(lng)
}
const curLng = ref(localStorage.getItem('i18nextLng') || 'ru')
i18next.on('initialized', function () {
    curLng.value = i18next.language
})
</script>

<template>
    <!--    <label for="locale">Locale: </label>-->
    <select
        id="locale"
        @change="changeLang($event.target.value)"
        v-model="curLng"
    >
        <option
            v-for="locale in Object.keys(locales)"
            :value="locale"
            :key="locale"
        >
            {{ locales[locale].nativeName }}
        </option>
    </select>
</template>
