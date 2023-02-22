import { createApp } from 'vue'
import './app/styles/index.scss'
import App from './app/App.vue'
import { router } from '@/app/providers/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
