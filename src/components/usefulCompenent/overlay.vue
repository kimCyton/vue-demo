<!-- KIM CYTON :插槽以及数据传递 -->
<template>
	<div class='overlay'>
		<slot name='title'></slot>

		<span>{{propa}}</span>
		<p>slotcontent goes here ...</p>
		<p>slotcontent goes here ...</p>
		<p>slotcontent goes here ...</p>

		<footer>
			<slot name='footer'></slot>
		</footer>
	</div>
</template>

<script>
export default {
   name: 'overlay',
   props:{
   	propa:{	//prop传递 设置: 类型
   		type:Number,
   		// 设置: 默认值
   		default:1
   	}
   },
   data () {
   	return {

   	};
	},
	mounted:function(){

	},
	methods:{
		methods1(){

		}
	},
	components:{},
};
</script>

<style lang='scss' scoped>
	footer{
	}
</style>