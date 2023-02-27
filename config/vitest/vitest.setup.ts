// import { config } from '@vue/test-utils'
// import i18next from 'i18next'
// const i18n = i18next.createInstance()
// config.global.plugins = [i18n]
import { config } from '@vue/test-utils'

config.global.mocks = {
    $t: (tKey) => tKey, // just return translation key
}
