import Vue from 'vue'
import VueRouter from 'vue-router'

const SplashScreen = () => import('@/screens/SplashScreen')

const HomeTabScreen = () => import('@/screens/Home/HomeTabScreen')
const StartScreen = () => import('@/screens/Home/StartScreen')
const SettingsScreen = () => import('@/screens/Home/SettingsScreen')

const routes = [
    {
        path: '/',
        name: 'Splash',
        component: SplashScreen,
    },
    {
        path: '/home',
        name: 'Home',
        redirect: { name: 'Start' },
        component: HomeTabScreen,
        children: [
            {
                path: 'start',
                name: 'Start',
                component: StartScreen,
            },
            {
                path: 'settings',
                name: 'Settings',
                component: SettingsScreen,
            },
        ],
    },
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
})

router.beforeEach((to, from, next) => {
    const isBootstrap = !from.name
    const isSplashScreen = to.name === 'Splash'

    if (isBootstrap) {
        if (isSplashScreen) {
            // Open Splash Screen
            next()
        } else {
            // Push to Splash Screen
            next({ name: 'Splash' })
        }
    } else {
        // Open Screen
        next()
    }
})

export default router
