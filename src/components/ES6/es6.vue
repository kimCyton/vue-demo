<!-- KIM CYTON -->
<template>
	<div class='ES6'>
		<h2>ES6 Study</h2>
		<button class="btn btn-default" @click='go'>1</button>
	</div>
</template>

<script>
export default {
   name: 'ES6',
   data () {
   	return {
   	};
	},
	mounted:function(){
		this.go()
	},
	methods:{
		go(){
			//1.RegExp构造函数
			//var regex = new RegExp('xyz','i');
			//但是，ES5不允许此时使用第二个参数，添加修饰符，否则会报错

			// console.log(new RegExp(/abc/ig,'i').flags)
			//上面代码中，原有正则对象的修饰符是ig，它会被第二个参数i覆盖
			// 2.字符串的正则方法
			/*
			字符串对象共有4个方法，可以使用正则表达式：match()、replace()、search()和split()。
			ES6将这4个方法，在语言内部全部调用RegExp的实例方法，从而做到所有与正则相关的方法，全都定义在RegExp对象上。
			String.prototype.match 调用 RegExp.prototype[Symbol.match]
			String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
			String.prototype.search 调用 RegExp.prototype[Symbol.search]
			String.prototype.split 调用 RegExp.prototype[Symbol.split]
			 */
			// 3.u修饰符
			// ES6对正则表达式添加了u修饰符，含义为“Unicode模式”，用来正确处理大于\uFFFF的Unicode字符。也就是说，会正确处理四个字节的UTF-16编码.
				//（1）点字符
			//点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。对于码点大于0xFFFF的Unicode字符，点字符不能识别，必须加上u修饰符。
			//4.y修饰符
			//除了u修饰符，ES6还为正则表达式添加了y修饰符，叫做“粘连”（sticky）修饰符。
			//y修饰符的作用与g修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。不同之处在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。
			// var s = 'aaa_aa_a'
			// var r1 =/a+/g;
			// var r2 =/a+/y;
			// r2.exec(s);
			// console.log(r2.exec(s))
			//5.sticky 属性
			//与y修饰符相匹配，ES6的正则对象多了sticky属性，表示是否设置了y修饰符。
				// let r1 = /hello/y;
				// let r2 = /world/;
				// console.log(r1.sticky)
				// console.log(r2.sticky)
			//6.flags属性
			//ES6为正则表达式新增了flags属性，会返回正则表达式的修饰符
				// var r =/abc/ig;
				// console.log(r.source)
				// console.log(r.flags)
			// 目前，有一个提案，引入后行断言。V8 引擎4.9版已经支持，Chrome 浏览器49版打开”experimental JavaScript features“开关（地址栏键入about:flags），就可以使用这项功能。
			// 	var a = /(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill')
			// 	console.log(a)
			//## NUMBER extension
				//----Number.isFinite() & Number.isNaN()
			// console.log(Number.isFinite(15.8))
			// console.log(Number.isNaN(9/true)) // => 9 //false
			// console.log(Number.isNaN(9/"true")) //true
				//ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
			// var a = Number.parseInt(5.3);
			// const b = Number.parseFloat("12.55AA")
				// ----Number.isInteger()
			// var n1 = Number.isInteger(33)
			// let n2 = Number.EPSILON.toFixed(20);
			// console.log(0.1+0.2-0.3)
				// ----安全整数和Number.isSafeInteger()
			//JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值
			/*
				Math.trunc()方法用于去除一个数的小数部分，返回整数部分。
				Math.sign()方法用来判断一个数到底是正数、负数、还是零。//+1 -1 0 -0 NaN
				Math.cbrt()方法用于计算一个数的立方根。
				Math.clz32()方法返回一个数的32位无符号整数形式有多少个前导0
				Math.imul()方法返回两个数以32位带符号整数形式相乘的结果，返回的也是一个32位的带符号整数。
				Math.fround方法返回一个数的单精度浮点数形式。
				Math.hypot方法返回所有参数的平方和的平方根。
			 */
			/*
				对数方法：
				Math.expm1(x)返回ex - 1，即Math.exp(x) - 1。
				Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。
				Math.log10(x)返回以10为底的x的对数。如果x小于0，则返回NaN。
				Math.log2(x)返回以2为底的x的对数。如果x小于0，则返回NaN。
			 */
			/*
				三角函数方法
				ES6新增了6个三角函数方法。
					Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
					Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
					Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
					Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
					Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
					Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
			 */
			/*
				Math.sign()用来判断一个值的正负，但是如果参数是-0，它会返回-0。
			 */
			/*
				指数运算符
					ES2016 新增了一个指数运算符（**）。
			 */
			console.log(2**5)
		}
	},
	components:{},
};
</script>

<style lang='scss' scoped>

</style>