<!-- KIM CYTON -->
<template>
	<div class="containersplit">
		<div class="mysplitline"></div>
	</div>
</template>

<script>
export default {
	components:{},
   name: 'splitLine',
   data () {
   	return {

   	};
	},
	mounted:function(){

	},
	methods:{

	},
};
</script>

<style lang='scss' scoped>
	.containersplit{
		width: 100%;
		.mysplitline{
			margin: 0 0 3px 0;
			width: 100%;
			padding:1px 0;
			display: inline-block;
			border:2px solid #39c;
			background-color: #39c;
			border-radius: 11px;
			box-shadow: 4px 3px 1px rgba(0,0,0,.7);
		}
	}
</style>