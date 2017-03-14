import Vue from 'vue'
import App from './App.vue'
import './css/index.scss'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/animate.css'
import router from './router'
import Vuex from 'vuex'
import store from './store/index.js'
import $ from 'jQuery'
import { RadonInstall } from 'radon-ui'
import './../node_modules/radon-ui/dist/radon-ui.css'
Vue.use(RadonInstall, {
    Modal: true,
    Notification: true,
    LoadingBar: true,
    Preview: true
})


// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios)
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(Vuex)

new Vue({
	router,
	store,
	el: '#app',
	render: function(h){
	return h(App);
  }
  //render: h => h(App);
})
