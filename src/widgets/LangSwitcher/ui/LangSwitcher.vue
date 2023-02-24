<script setup lang="ts">
// import { Locales, setLocale } from '@/shared/config/i18n/i18n'
import { useTranslation } from 'i18next-vue'
import { ref } from 'vue'

const locales = {
    ru: {
        nativeName: 'Русский',
    },
    en: {
        nativeName: 'English',
    },
}
const { i18next } = useTranslation()

const changeLang = (lng: string) => {
    console.log(lng)
    i18next.changeLanguage(lng)
}
const curLng = ref(localStorage.getItem('i18nextLng'))
i18next.on('initialized', function () {
    curLng.value = i18next.language
})
// })
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
