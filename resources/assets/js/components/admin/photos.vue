<template>
    <section class="content">
        <h1>Photos</h1>

        <div class="row">
            <menu :current="photos"></menu>

        </div>
    </section>
</template>

<script>
    import menu from './menu.vue'

    export default {
        name: 'photos',

        components: {
            menu
        },
        replace: false
    }
</script>
