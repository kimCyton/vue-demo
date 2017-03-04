<template>
	<div id="demo">
		<button class="btn btn-default btn-sm" v-on:click="show = !show">
			Toggle
		</button>
		<transition
		    name="custom-classes-transition"
		    enter-active-class="animated tada"
		    leave-active-class="animated bounceOutRight"
		  >
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

</style>