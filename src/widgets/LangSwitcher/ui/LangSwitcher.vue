<script setup lang="ts">
// import { Locales, setLocale } from '@/shared/config/i18n/i18n'
import { useTranslation } from 'i18next-vue'
import { reactive, ref } from 'vue'

const locales = reactive({
    ru: {
        nativeName: 'RU',
    },
    en: {
        nativeName: 'EN',
    },
})
const { i18next } = useTranslation()

const changeLang = (lng: string) => {
    console.log(lng)
    i18next.changeLanguage(lng)
}
const curLng = ref(localStorage.getItem('i18nextLng') || 'ru')
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
