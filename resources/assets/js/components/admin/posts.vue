<template>
    <section class="content">
        <h1>Posts</h1>

        <div class="row">
            <menu :current="posts"></menu>

            <div class="col-md-9">
                <table class="table table-hover">

                    <thead>
                        <tr>
                            <th width="1%">#</th>
                            <th>Title</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="post in posts" :class="{ 'removed' : post.removed }">
                            <td>{{ post.id }}</td>
                            <td>{{ post.title }}</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-success">Publish</button>
                            </td>
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
        name: 'posts',

        components: {
            menu
        },

        data() {
            return {
                posts: []
            }
        },

        ready () {
            this.fetchPosts()
        },

        methods: {

            fetchPosts () {
                let self = this
                self.$http.get('api/posts')
                    .then(function (response) {
                        self.posts = JSON.parse(response.data)
                    })
            },

        }

    }
</script>
