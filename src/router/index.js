import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../components/mainroute/home/home.vue'
import Product from './../components/mainroute/product/product.vue'
import Others from '../components/mainroute/others/others.vue'
import Contact from '../components/mainroute/contact/contact.vue'
import ES6 from '../components/mainroute/ES6/es6.vue'
import Telephone from '../components/mainroute/telephone/telephone.vue'
import RadonUI from '../components/mainroute/radonui/radonui.vue'
import Test from '../components/mainroute/test/test.vue'

//ES6
import varibleDeconstruction from '../components/mainroute/ES6/deconstruction.vue'
import letconst from '../components/mainroute/ES6/let_Const.vue'

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
		{path: '/ES6',component: ES6,
			children:[ //ES6 study details
				{path:'deconstruction',component:varibleDeconstruction},
				{path:'let_Const',component:letconst},
				{path:'*',component:letconst},
			]
		},
		{path: '/telephone',component: Telephone},
		{path: '/radonui',component: RadonUI},
		{path: '/test',component: Test},
		{path: '*',redirect: '/ES6'}
	]
})