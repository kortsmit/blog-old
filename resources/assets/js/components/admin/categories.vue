<template>
    <section class="content">
        <h1>Categories</h1>

        <div class="row">
            <menu :current="categories"></menu>

            <div class="col-md-9">
                <table class="table table-hover">

                    <thead>
                    <tr>
                        <th width="1%">#</th>
                        <th>Title</th>
                        <th width="1%"></th>
                        <th width="1%"></th>
                    </tr>
                    </thead>

                    <tbody>
                        <tr v-for="category in categories" :class="{ 'removed' : post.removed }">
                            <td>{{ category.id }}</td>
                            <td>{{ category.name }}</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-default">Edit</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

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

        data() {
            return {
                categories: []
            }
        },

        ready () {
            this.fetchCategories()
        },

        methods: {

            fetchCategories () {
                let self = this
                self.$http.get('api/categories')
                    .then(function (response) {
                        self.categories = JSON.parse(response.data)
                    })
            },

        }

    }
</script>
