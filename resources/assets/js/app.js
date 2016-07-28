import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#csrf-token').getAttribute('value')

var router = new VueRouter()

router.map({
    '/': {
        component: require('./components/home.vue')
    },
    '/blog': {
        component: require('./components/blog.vue')
    },
    '/about': {
        component: require('./components/about.vue')
    },
    '/contact': {
        component: require('./components/contact.vue')
    },
    '/admin': {
        component: require('./components/admin.vue')
    },
    '/admin/posts': {
        component: require('./components/admin/posts.vue')
    },
    '/admin/categories': {
        component: require('./components/admin/categories.vue')
    },
    '/admin/users': {
        component: require('./components/admin/users.vue')
    },
})

router.start(App, '#app')