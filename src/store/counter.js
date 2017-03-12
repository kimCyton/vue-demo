export default {
	state: {
		count: 0
	},
	mutations: {
		increment(state) {
			state.count++
		},
		decrement(state) {
			state.count--
		}
	},

	getters: {
		evenOrOdd: state => state.count % 2 == 0 ? 'even' : 'odd'
	},
	actions: {
		increment: ({
			commit
		}) => commit('increment'),
		decrement: ({
			commit
		}) => commit('decrement'),
		incrementIfOdd({
			commit,
			state
		}) {
			if ((state.count + 1) % 2 === 0) {
				commit('increment')
			}
		},
		incrementAsync({
			commit
		}) { //es6 promise syntax
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit("increment")
					resolve()
				}, 1000)
			})
		}
	}
}