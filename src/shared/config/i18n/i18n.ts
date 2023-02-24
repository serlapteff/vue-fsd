import i18next from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(Backend)
    .use(LanguageDetector)
    .init({
        ns: ['translation', 'main', 'about'],
        defaultNS: 'translation',
        fallbackLng: 'ru',
        debug: true,
        // debug: __IS_DEV__,

        load: 'languageOnly',
        backend: {
            loadPath: '/src/shared/config/i18n/locales/{{lng}}/{{ns}}.json',
        },
    })
    .then((r) => r)
    .catch((e) => e)

export default i18next
