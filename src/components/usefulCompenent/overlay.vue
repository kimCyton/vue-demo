<!-- KIM CYTON :插槽以及数据传递 FatherComponent:telephone -->
<template>
	<div class='overlay'>
		<slot name='title'></slot>
		<span @click="getWindow">{{propa}}</span>
		<i v-show='dataBrowser'>equals</i>
		<mark>{{dataBrowser}}</mark>
		<p>{{propb}} slotcontent goes here ...</p>
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
   		type:String,
   		// 设置: 默认值
   		default:"获取该浏览器信息"
   	},
   	propb:{
   		type:Number,
   		default:1
   	}
   },
   data () {
   	return {
   		dataBrowser:'',
   	};
	},
	mounted:function(){

	},
	methods:{
		getWindow(){
			this.dataBrowser = window.clientInformation.vendor
		}
	},
	components:{},
};
</script>

<style lang='scss' scoped>
	footer{
	}
	mark{
		padding: 0;
	}
</style>