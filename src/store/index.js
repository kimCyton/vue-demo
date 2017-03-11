import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	count: 0
}
const mutations = {
	increment(state){
		state.count++
	},
	decrement(state){
		state.count--
	}
}

const getters = {
	evenOrOdd:state=>state.count%2==0?'even':'odd'
}
const actions ={
	increment:({commit})=>commit('increment')
}



export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})