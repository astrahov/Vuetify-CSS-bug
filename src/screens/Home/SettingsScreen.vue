<template>
    <v-container class="fill-height">
        <v-row justify="center" no-gutters>
            <v-col cols="auto">
                <div>Settings</div>

                <v-btn
                    color="primary"
                    @click="$router.push({name: 'Start'})"
                >
                    To Start
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'SettingsScreen',
    }
</script>
