import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter.js' //counter的数据
import telephone from './telephone.js' //telephone的数据

Vue.use(Vuex)
//配置数据汇总

const store = new Vuex.Store({
	modules:{
		counter:counter,
		telephone:telephone
	}
})

export default store