<template>
	<div class="others">
		<h1>Others</h1>
		from path id : {{$route.params.id}}
		<router-view></router-view>
		<!-- 路由模板嵌套 -->
	</div>
</template>

<script>
export default {

  name: 'others',

  	data () {
    	return {

    	};
  	}
};
</script>

<style lang="css" scoped>
</style>