<template>
    <v-container class="fill-height">
        <v-row justify="center">
            <v-col cols="auto">
                <div>SplashScreen</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'SplashScreen',

        mounted() {
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1000)
        },
    }
</script>
