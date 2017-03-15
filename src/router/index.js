import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../components/home/home.vue'
import Product from './../components/product/product.vue'
import Others from '../components/others/others.vue'
import Contact from '../components/contact/contact.vue'
import ES6 from '../components/ES6/es6.vue'
import Telephone from '../components/telephone/telephone.vue'
import RadonUI from '../components/radonui/radonui.vue'

export default new Router({
   routes: [
		{path: '/home',component: Home},
		{path: '/product/:id?',component: Product},
		{path: '/others/:id?',component: Others,
			// 路由模板嵌套
			children:[
				{path:'child1',component:Contact},
				{path:'child2',component:Home},
			]
		},
		{path: '/contact',component: Contact},
		{path: '/ES6',component: ES6},
		{path: '/telephone',component: Telephone},
		{path: '/radonui',component: RadonUI},
		{path: '*',redirect: '/home'}
	]
})