<template>
    <section class="content">
        <h1>Home</h1>
        <blog></blog>
    </section>
</template>

<script>
    import blog from './../components/blog.vue'

    export default {
        name: 'home',

        components: {
            blog,
        },
        replace: false
    }
</script>
