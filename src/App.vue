<template>
    <app-header/>
        <app-view/>
    <app-footer/>
</template>

<script>
import AppFooter from "@/components/layouts/AppFooter.vue";
import AppHeader from "@/components/layouts/AppHeader.vue";
import AppView from "@/components/layouts/AppView.vue";

export default {
    components: {
        AppView,
        AppHeader,
        AppFooter,

    },
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
body {
    font-family: Montserrat;
}
</style>
