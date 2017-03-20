<!-- KIM CYTON -->
<template>
	<div class='vonEvent'>
		<span class="btn" v-on:click='add'>{{data}}</span>
	</div>
</template>

<script>
export default {
   name: 'vonEvent',
   props:['prop'],
   data () {
   	return {
   		data:1
   	};
	},
	mounted:function(){

	},
	methods:{
		add(){
			this.data+=1;
			this.$emit('fatherAdd');
			// fatherAdd 此组件的事件名
		}
	},
	components:{},
};
</script>

<style lang='scss' scoped>
	.vonEvent{
		border: 2px solid #39c;
		border-radius: 5px;
	}
</style>