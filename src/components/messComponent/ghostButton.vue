<!-- KIM CYTON -->
<template>
	<div class='ghostButton'>
		<button class="btn btn-default">StartES6</button>
	</div>
</template>
<script>
export default {
   name: 'ghostButton',
	mounted:function(){
		this.test()
	},
	methods:{
		test(){
			//console.log(new Date(...[2015,1,1]))
			//ES6的合并数组
			//const [b,...zz]= [1,2,44,55]
			//var a = [...'aaaaass'] =>字符串的解构
			//var a=(value1,value2)=>value1+value2
			//var list =({name,age})=>name+','+age
			// console.log(list({name:"kim",age:12}))
			// const isEven = n=>n%2==0;
			// console.log(isEven(4))
			// const a = [1,3,5].map(x=>x*x)
			// console.log(a)
			// let foo = "123";
			// var baz = {foo};
			// console.log(baz)
			// function f(x,y){
			// 	return {x,y};
			// }
			// console.log(f(1,2))
			// var o ={
			// 	method(){console.log(1)}
			// }
			// o.method()
			// var cart = {
			// 	_wheels:4,
			// 	get wheels(){
			// 		return this._wheels;
			// 	},
			// 	set wheels(value){
			// 		if (value<this._wheels) {
			// 			throw new Error("数值太小了！")
			// 		}
			// 		this._wheels = value;
			// 	}
			// }
			// const person = {
			// 	sayName(){
			// 		console.log("hello!")
			// 	},
			// }
			// console.log(person.sayName.name)
			// console.log((new Function()).name)
			//如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。
				//Object.is(item1,item2)
			// console.log(Object.is({},{}))//false
			// console.log(Object.is(true,true))//true
			// console.log(+0===-0)//true
				//Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
			// var target1 = {a:1};
			// var target2 = {b:2};
			// var target3 = {c:3};
			// console.log(Object.assign(target1,target2,target3))
			//object {a:1,b:2,c:3}
			//注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
			// 如果只有一个参数，Object.assign会直接返回该参数。
			// 如果该参数不是对象，则会先转成对象，然后返回
			// 如果undefined和null不在首参数，就不会报错。
			// var a ={
			// 	a:1,
			// 	b:2,
			// 	c:3
			// };
			// console.log(Object.keys(a)) // [a,b,c]
			// console.log(Object.values(a)) // [1,2,3]
			//console.log([1,3,5].__proto__)
			// console.log(Object.values("cdg")) //['c','d','g']
			// console.log(Object.values(true))
			// console.log(Object.values(123))
			// console.log(Object.entries({a:1}))
			//const firstName = message?.body?.user?.firstName || 'default'; //传导运算符
					//Symbol值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的Symbol类型。凡是属性名属于Symbol类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
			// let s = Symbol();
			// console.log(typeof s)
			// var a = 11;
			// console.log(`${a}2233`)
			
		},
	},
	components:{},
};
</script>

<style lang='scss' scoped>
	.ghostButton{
		display: inline-block;
		border-radius: 3px;
		box-sizing: border-box;
		padding-left: 1px;
	}
</style>