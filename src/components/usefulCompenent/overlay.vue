<!-- KIM CYTON :插槽以及数据传递 FatherComponent:telephone -->
<template>
	<div class='overlay'>
		<button class="btn" v-on:click='addOne'>{{counter}}</button>
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
   		counter:0
   	};
	},
	mounted:function(){

	},
	methods:{
		addOne(){
			this.counter+=1;
			this.$emit('plus')
		}
	},
	components:{},
};
</script>

<style lang='scss' scoped>
	footer{
	}
</style>