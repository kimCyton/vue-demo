
export default {
	state:{
		todos:[
			{id:1,text:'hello',done:true},
			{id:2,text:'world',done:true},
			{id:3,text:'kim',done:true},
			{id:4,text:'cyton',done:false}
		],
		count:1
	},
	getters: { //（可以认为是 store 的计算属性）
		doneTodos: state => { // Getters 接受 state 作为其第一个参数
			return state.todos.filter(item => item.done)
		}
	},
	mutations:{
	}
}