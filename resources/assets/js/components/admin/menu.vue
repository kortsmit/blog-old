<template>
    <div class="col-md-3">
        <div class="list-group">
            <a v-link="{ path: '/admin/posts' }"
               class="list-group-item"
               :class="{ 'active' : v-link-active }">
                <span class="badge">0</span>
                Posts
            </a>
            <a v-link="{ path: '/admin/categories' }"
               class="list-group-item"
               :class="{ 'active' : v-link-active }">
                <span class="badge">0</span>
                Categories
            </a>
            <a v-link="{ path: '/admin/photos' }"
               class="list-group-item"
               :class="{ 'active' : v-link-active }">
                <span class="badge">0</span>
                Photos
            </a>
            <a v-link="{ path: '/admin/users' }"
               class="list-group-item"
               :class="{ 'active' : v-link-active }">
                <span class="badge">0</span>
                Users
            </a>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'menu',

        data() {
            return {
                current: ''
            }
        },
    }
</script>
