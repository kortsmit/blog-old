<template>
    <section class="content">
        <h1>Post Categories</h1>

        <div class="row">
            <menu :current="categories"></menu>

        </div>
    </section>
</template>

<script>
    import menu from './menu.vue'

    export default {
        name: 'categories',

        components: {
            menu
        },

        replace: false
    }
</script>
