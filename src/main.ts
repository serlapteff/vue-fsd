import { createApp } from 'vue'
import './app/styles/index.scss'
import App from './app/App.vue'
import { router } from '@/app/providers/router'
import I18NextVue from 'i18next-vue'
import i18next from '@/shared/config/i18n/i18n'

const app = createApp(App)

app.use(router)
app.use(I18NextVue, { i18next })

app.mount('#app')
