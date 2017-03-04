import Vue from 'vue'
import App from './App.vue'
import './css/index.scss'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/animate.css'
import router from './router'

import VueResource from 'vue-resource'
Vue.use(VueResource)

new Vue({
	router,
	VueResource,
  el: '#app',
  render: function(h){
  	return h(App);
  }
  //render: h => h(App);
})
