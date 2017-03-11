<!-- KIM CYTON -->
<template>
	<span class='reflect'>
		<button class="btn btn-success" @click="reflect">reflect</button>
		<a href="http://es6.ruanyifeng.com/#docs/reflect" target="blank">reflect</a>
	</span>
</template>

<script>
export default {
   name: 'reflect',
	mounted:function(){
		this.reflect();
	},
	methods:{
		reflect(){
			// this.$http.get("./../../../php/wechat.php").then((res)=>{
			// 	console.log(res.body)
			// })
			//console.log(Reflect.apply(Math.floor,undefined,[1.77]))
		}
	},
	components:{},
};
</script>

<style lang='scss' scoped>
	.reflect{
		padding:5px 0px;
	}
</style>