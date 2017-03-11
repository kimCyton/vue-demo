import Vue from 'vue'
import App from './App.vue'
import './css/index.scss'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/animate.css'
import router from './router'
import Vuex from 'vuex'
import store from './store/counter.js'

// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios)
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(Vuex)

new Vue({
	router,
	VueResource,
	Vuex,
	store,
  el: '#app',
  render: function(h){
  	return h(App);
  }
  //render: h => h(App);
})
