import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        component: require('./../components/home/home.vue')
    }, {
        path: '/product',
        component: require('./../components/product/product.vue')
    }, {
        path: '/others',
        component: require('./../components/others/others.vue')
    }, {
        path: '/contact',
        component: require('./../components/contact/contact.vue')
    }, {
        path: '*',
        redirect: '/home'
    }]
})