<!-- KIM CYTON -->
<template>
	<span class='generator'>
		<button class="btn btn-success" @click="generator">generator</button>
		<a href="http://es6.ruanyifeng.com/#docs/generator" target="blank">generator</a>
	</span>
</template>

<script>
export default {
   name: 'generator',
	mounted:function(){
		this.generator();
	},
	methods:{
		generator(){
			// console.warn("You are running Vue in development mode.")
			// console.clear("console")
			// console.count("console")
			// console.dir("console")
			// console.error("console")
			//	console.group("console")
			// console.dirxml("console")
			// console.assert("console")
			// console.table("console")
			//	console.debug(console)
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