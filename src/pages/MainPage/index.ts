import {defineAsyncComponent} from "vue";

export const MainPage = defineAsyncComponent(() => import('./ui/MainPage.vue'))
