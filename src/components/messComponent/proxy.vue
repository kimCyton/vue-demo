<!-- KIM CYTON -->
<template>
	<span class='proxy'>
		<button class="btn btn-warning" @click="proxy">proxy</button>
		<a href="http://es6.ruanyifeng.com/#docs/proxy" target="blank">proxy</a>
	</span>
</template>

<script>
export default {
   name: 'proxy',
	mounted:function(){
		this.proxy()
	},
	methods:{
		proxy(){
			// let validator = {
			// 	set:function(obj,prop,value) {
			// 		if (prop==="age") {
			// 			if (!Number.isInteger(value)) {
			// 				throw new TypeError("age is not an integer")
			// 			};
			// 			if (value>200) {
			// 				throw new RangeError("age is out of range")
			// 			};
			// 		};
			// 		obj[prop]=value;
			// 	}
			// };
			// let person = new Proxy({},validator);
			// var person = {
			// 	name :'KIMCYTON'
			// };
			// var proxy = new Proxy(person,{
			// 	get:function(target,property){
			// 		if (property in target) {
			// 			return target[property];
			// 		}else{
			// 			throw new ReferenceError("Property \""+property +"\" does not exist.")
			// 		};
			// 	}
			// });
			//console.log(proxy.age)
			// console.log(proxy.name)
			// let newProxy = new Proxy({},{
			// 	get(target,property){return 34;}
			// })
			// console.log(newProxy.time)
			// console.log(newProxy.name)
			// var obj = new Proxy({},{
			// 	get:function(target,key,receiver){
			// 		console.log(`getting ${key}!`)
			// 		return Reflect.get(target,key,receiver);
			// 	},
			// 	set:function(target,key,value,receiver){
			// 		console.log(`setting ${key}!`);
			// 		return Reflect.set(target,key,value,receiver)
			// 	}
			// });
			// obj.count = 1;
			//console.log(Array.from([1,3,4]).filter(x=>x%2==0))
			// var str = '123213';
			// console.log(['b',...str,'c'])
		}
	},
	components:{},
};
</script>

<style lang='scss' scoped>
	.proxy{
		padding:5px 0;
	}
</style>