<!-- KIM CYTON -->
<template>
	<div style="height:2000px;">
		<h1>deconstruction</h1>
		<div class="container deconstruction">
			<div class="row public">
				<div class="col-md-4 col-sm-6 col-xm-6">
					<h4>数组的解构赋值</h4>
					<p>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。</p>
					<p>以前，为变量赋值，只能直接指定值</p>
					<p style='cursor:pointer;' @click="isShow=!isShow">
						<strong>ES6允许写成下面这样。
							<span class='caret'></span>
							{{isShow?'CLOSE':'SHOW'}}
						</strong>
						<br>
						<mark>let [a, b, c] = [1, 2, 3];</mark>
					</p>
					<div class="code" v-show='isShow'>
						let [foo, [[bar], baz]] = [1, [[2], 3]];<br>
						foo // 1<br>
						bar // 2<br>
						baz // 3<hr>
						let [ , , third] = ["foo", "bar", "baz"];<br>
						third // "baz"<hr>
						let [x, , y] = [1, 2, 3];<br>
						x // 1<br>
						y // 3<hr>
						let [head, ...tail] = [1, 2, 3, 4];<br>
						head // 1<br>
						tail // [2, 3, 4]<hr>
						let [x, y, ...z] = ['a'];<br>
						x // "a"<br>
						y // undefined<br>
						z // []<hr>
						<h4>默认值</h4>
						<p>
							let [foo = true] = [];<br>
							foo // true<br>
							let [x, y = 'b'] = ['a'];<br>
							// x='a', y='b'<br>
							let [x, y = 'b'] = ['a', undefined];<br>
							// x='a', y='b'<br>
							<strong>
							注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
							<br>
							如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。</strong>
						</p>
					</div>
				</div>
				<div class="col-md-4 col-sm-6 col-xm-6">content goes here</div>
				<div class="col-md-4 col-sm-6 col-xm-6">content goes here</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components:{},
   name: 'deconstruction',
   data () {
   	return {
   		isShow:true,
   	};
	},
	mounted:function(){

	},
	methods:{

	},
};
</script>

<style lang='scss' scoped>
	hr{
		width: 300px;
	}
	.deconstruction{
		min-width: 950px;
	}
	.public{
		text-align: center;
	}
</style>