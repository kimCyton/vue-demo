<template>
	<div class="hello">
		<h1>{{msg}}</h1>
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
				alert("you clicked on the componentA")
			}
		}
	}


</script>

<style scoped>
	h1{
		color: #42b983;
	}
</style>