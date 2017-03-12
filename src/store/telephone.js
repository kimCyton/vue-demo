//	vuexModule by KIM

export default {
	state: {
		customs:[
			{name:'kim',tel:'13764647527'},
			{name:'kim',tel:'13764647527'},
			{name:'kim',tel:'13764647527'}
		]
	},
	mutations: {

	},

	getters: {
		getCustomNum(state){
			return state.customs.length
		}
	},
	actions: {

	}
}