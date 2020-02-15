<template>
    <v-container class="fill-height">
        <v-row justify="center" no-gutters>
            <v-col cols="auto">
                <div>Start</div>

                <v-btn
                    color="primary"
                    @click="$router.push({name: 'Settings'})"
                >
                    To Settings
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'StartScreen',
    }
</script>
