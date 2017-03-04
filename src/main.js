import Vue from 'vue'
import App from './App.vue'
import './css/index.scss'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/animate.css'
import router from './router'

new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
