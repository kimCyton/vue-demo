<template>
	<div class="contact">
		<h3>Learn ES6</h3>
		<strong title='kim'>
			name:KIMCYTON
		</strong>
		<p>@: <mark>850910629@qq.com</mark></p>
		<button class="btn btn-danger" @click="calcArr">calcArr</button>
	</div>
</template>
<script>
export default {
  name: 'contact',
  	data () {
    	return {
    	};
  	},
  	mounted:function(){
  		this.calcArr()
  	},
  	methods:{
  		calcArr(){
  			// ====1数组的解构
  			//let[bar,foo] = [1,{}];
  			//let[x,y,z] = new Set(['a','b','c']);
  			//let [x, y = 'b'] = ['a'];
  			//let[x,y='b'] = [[123,22,2],undefined];
  			//let[x=1]=[undefined];
  			//let[x=1]=[null];
  			//let[x=1,y=x]=[];
  			// let[x=1,y=x]=[];
  			// ====2对象的解构
  			// let{x,y}={y:'3',x:'2'}
  			// let{a}={b:1,c:2}
  			// let { foo: baz } = { foo: "aaa", bar: "bbb" };
  			// 上面代码中，foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。
  			// 注意，采用这种写法时，变量的声明和赋值是一体的。对于let和const来说，变量不能重新声明，所以一旦赋值的变量以前声明过，就会报错。
  			// let foo;
			// let {foo} = {foo: 1}; SyntaxError: Duplicate declaration "foo"
			// let baz;
			// let {bar: baz} = {bar: 1}; // SyntaxError: Duplicate declaration "baz"
			// let obj = {
			// 	p:[
			// 		'hello',
			// 		{y:'world'}
			// 	]
			// };
			// let{p:[x,{y}]} = obj;
			// ====3字符串的解构
  			// let [a,b,...c] = 'hello'
  			// c = c.join('-')
  			//let{length:len}='abc'//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
  			//----add中参数相当于被解构。
  			// let x =[1,5,5];
  			// function add([x,y,z]){
  			// 	return x+y+z;
  			// }
  			// ----★
  			// var a = [[3,5],[2,4]].map(([a,b])=>a*b)
  			// <==>
  			// var a =[[3,5],[2,4]].map(function([a,b]){
  			// 	return a*b
  			// })
  			// function move({x=1,y=0}={}){
  			// 	return [x,y]
  			// }
  			//var a = [1,undefined,null].map((x="yes")=>x)
  			//var a = [1,undefined,null].map((x)=>2*x)
  			//
  			//用途：快速提取json数据
  			// let jsonData ={
  			// 	id:1,
  			// 	status:'OK',
  			// 	data:[123,222]
  			// }
  			// let{id,status,data:number} = jsonData;
  			//console.log('\u{20BB7}')
  			// let hello = 123;
  			// console.log(hell\u{6F})
  			// console.log(String.fromCharCode(0x20BB7))
  			// for(let codePoint of '我是自己'){
  			// 	console.log(codePoint)
  			// }
  			// var str = "@@";
  			// var a = 'x'+str +'x'
  			// let b = `x${str}x`//这里使用反引号
  			// console.log(b)
  			//alert`123` which equals alert(123)
  			//console.log(new RegExp(/abc/ig,'i').flags)
  		},
  	}
};
</script>

<style lang="css" scoped>
</style>