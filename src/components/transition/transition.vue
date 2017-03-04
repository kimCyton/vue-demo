<template>
	<div id="demo">
		<button class="btn btn-default" v-on:click="show = !show">
			Toggle
		</button>
		<transition name="fade">
			<p v-if="show">hello</p>
		</transition>
	</div>
</template>

<script>
export default {
  	data () {
    	return {
    		show: true
    	}
  	}
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>