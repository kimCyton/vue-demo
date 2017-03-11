
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
	getters:{
		doneTodos:state=>{
			return state.todos.filter(item=>item.done)
		},
		doneTodosCount:(state,getters)=>{
			return getters.doneTodos.length;
		}
	},
	mutations:{
	}
}