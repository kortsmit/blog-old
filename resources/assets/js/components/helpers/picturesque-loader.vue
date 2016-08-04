<template>
    <div class="vue-loader" v-show="loading">
        <div><span><i class="fa fa-spinner fa-spin"></i></span></div>
    </div>
</template>

<script>
   export default {
        name: 'one-loader',

        props: {
            loading: false
        },

    }
</script>