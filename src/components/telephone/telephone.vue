<!-- KIM CYTON -->
<template>
	<div class='telephone'>
		<h3>from counter :{{$store.state.counter.count}}</h3>
		{{getCustomNum}}
		<ul>
			<li v-for="item in $store.state.telephone.customs">
				<strong>{{item.name}}</strong>  tel: <span>{{item.tel}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex'
export default {
   name: 'telephone',
   data () {
   	return {

   	};
	},
	mounted:function(){

	},
	methods:{
	},
	computed:mapGetters([
		'getCustomNum'
	]),
	components:{},
};
</script>

<style lang='scss' scoped>
	
</style>