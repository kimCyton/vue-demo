<template>
	<div class="hello">
		<h1>{{msg}}</h1>
		<h1>{{msgfrommother}}</h1>
		<!-- 这里也可以取到父组件的属性键值 -->
		<button v-on:click="onClickMe">click</button>
	</div>

</template>

<script>
	export default{
		data:function(){
			return {
				msg:'Hello from component  A'
			}
		},
		methods:{
			onClickMe:function(){
				console.log(this.msgfrommother)
			}
		},
		props:['msgfrommother']//传递通信过渡 数组内为字符串的key属性
	}


</script>

<style scoped>
	h1{
		color: #42b983;
	}
</style>