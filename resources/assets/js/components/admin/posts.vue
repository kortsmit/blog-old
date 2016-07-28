<template>
    <section class="content">
        <h1>Posts</h1>

        <div class="row">
            <menu :current="posts"></menu>

        </div>
    </section>
</template>

<script>
    import menu from './menu.vue'

    export default {
        name: 'posts',

        components: {
            menu
        },
        replace: false
    }
</script>
