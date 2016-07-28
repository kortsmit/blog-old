<template>
    <section class="content">
        <h1>Users</h1>

        <div class="row">
            <menu :current="users"></menu>

        </div>
    </section>
</template>

<script>
    import menu from './menu.vue'

    export default {
        name: 'users',

        components: {
            menu
        },
        replace: false
    }
</script>
