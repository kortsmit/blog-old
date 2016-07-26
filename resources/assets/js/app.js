import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#csrf-token').getAttribute('value');

Vue.use(VueRouter)

Vue.use(VueResource)

var router = new VueRouter({
    history: true,
    root: 'dashboard'
})

router.map({
    '/': {
        component: require('./components/Home.vue')
    },
    '/about': {
        component: require('./components/Home.vue')
    },
    '/contact': {
        component: require('./components/Home.vue')
    },
})

router.start(App, 'body')