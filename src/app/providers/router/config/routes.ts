import { MainPage } from '@/pages/MainPage'
import { AboutPage } from '@/pages/AboutPage'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found',
}

export const RouthPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routes = [
    {
        path: RouthPath.main,
        name: 'Home',
        component: MainPage,
    },
    {
        path: RouthPath.about,
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: AboutPage,
    },
]
