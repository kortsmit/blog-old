<template>
    <div>
        <navigation></navigation>
    </div>
    <div id="app">
        <section class="content">
            <router-view></router-view>
        </section>
    </div>
</template>

<style>

</style>

<script>
    import navigation from './components/template/navigation.vue'

    export default {
        components: {
            navigation
        },
        replace: false
    }

</script>
