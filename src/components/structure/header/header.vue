<template>
	<header class="header">
		<router-link class="alinks" to='/home'>首页</router-link>
		<router-link class="alinks" to='/product'>产品</router-link>
		<router-link class="alinks" to='/others'>其他</router-link>
		<router-link class="alinks" to='/contact'>Counter</router-link>
		<router-link class="alinks" to='/ES6'>ES6</router-link>
		<router-link class="alinks" to='/telephone'>telephone</router-link>
		<router-link class="alinks" to='/radonui'>radonui</router-link>
		<router-link class="alinks" to='/test'>Test</router-link>
	</header>
</template>

<script>
	export default{
		data:function(){
			return {
			}
		},
		methods:{
		}
	}
</script>
<style scoped lang='scss'>
	$navHeight:110px;

	.header{
		background: #ccc;
		width: 100%;
		height: $navHeight;
		padding-left: 10px;
		.alinks{
			padding:5px 10px;
			line-height: $navHeight;
			font-size: 26px;
		}
	}
</style>