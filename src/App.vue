<template>
    <v-app>
        <v-content>
            <router-view />
        </v-content>

        <BottomNavigation v-if="isHomeScreen" :items="tabs" />
    </v-app>
</template>

<script>
    import BottomNavigation from './components/vuetify/BottomNavigation'

    export default {
        name: 'App',

        components: {
            BottomNavigation,
        },

        data: () => ({
            tabs: [
                {
                    text: 'Start',
                    icon: 'mdi-home',
                    route: { name: 'Start' },
                },
                {
                    text: 'Settings',
                    icon: 'mdi-home',
                    route: { name: 'Settings' },
                },
            ],
        }),

        computed: {
            isHomeScreen() {
                return this.$route.matched.some(record => record.name === 'Home')
            },
        },
    }
</script>
