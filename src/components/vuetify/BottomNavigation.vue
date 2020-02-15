<template>
    <v-bottom-navigation
        app
        color="primary"
        fixed
        grow
        :horizontal="!!$vuetify.breakpoint.smAndUp"
    >
        <v-btn
            v-for="item in items"
            :key="`bottomNavigationItem_${item.text}`"
            :to="item.route"
        >
            <span>{{item.text}}</span>
            <v-icon v-text="`${item.icon}`" />
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
    export default {
        name: 'BottomNavigation',

        props: {
            items: { type: Array },
        },
    }
</script>
