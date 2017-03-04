import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../components/home/home.vue'
import Product from './../components/product/product.vue'
import Others from '../components/others/others.vue'
import Contact from '../components/contact/contact.vue'

export default new Router({
    routes: [
        {path: '/home',component: Home},
        {path: '/product',component: Product},
        {path: '/others',component: Others},
        {path: '/contact',component: Contact},
        {path: '*',redirect: '/home'}
    ]
})