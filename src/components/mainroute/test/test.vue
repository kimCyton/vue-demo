KIM CYTON -->
<template>
	<div class='test' height='1200px'>
	<headerUnit :headerStyle="headerStyle1"></headerUnit>
	<mysplitline></mysplitline>
	<headerUnit :headerStyle="headerStyle2"></headerUnit>
	<mysplitline></mysplitline>
	<span>{{Date.now()}}</span>
		<h1>自定义事件</h1>
		<h3>父组件：{{content}}</h3>
		<div>
			<h6>子组件传输的值：</h6>
			<input type="text" v-model="aha">
			<!-- fatherAdd为子组件 methods 里的 this.$emit('fatherAdd') -->
			<vonevent class='vonevent' v-on:fatherAdd='add' :prop="aha"></vonevent>
		</div>
	</div>
</template>

<script>
import { slider,carousel } from 'vue-strap'
import vonevent from '../test/vOnEvent.vue'
import headerUnit from './../../public/headerUnit.vue'
import mysplitline from './../../public/split.vue'
export default {
	components:{vonevent,headerUnit,mysplitline,slider,carousel},
   name: 'test',
   data () {
   	return {
   		aha:0,
   		content:0,
   		headerStyle1:{
   			bgcolor:"pink",
   			fontsize:19,
   			fontcolor:"blued",
   			lineheight:10,
   			titles:[
					{name:"kim",link:"#"},
					{name:"Cyton",link:"#"},
					{name:"parkDog",link:"#"},
					{name:"parCheunYU",link:"#"},
					{name:"chMino",link:"#"},
				]
   		},
   		headerStyle2:{
   			titles:[
					{name:"kim",link:"#"},
					{name:"Cyton",link:"#"},
					{name:"parkDog",link:"#"},
					{name:"parCheunYU",link:"#"},
					{name:"chMino",link:"#"},
				]
   		}
   	};
	},
	mounted:function(){

	},
	methods:{
		add(){
			this.content+=1;
			this.prop+=1
		}
	},
};
</script>

<style lang='scss' scoped>
	.vonevent{
		display: inline-block;
	}
</style>


<!-- slider from vueStrap starts -->
	<!-- <carousel :indicators='true' :controls='true'>
		<slider>
			<img src="https://placehold.it/1200x400?text=one">
			<div class="carousel-caption">
				sasd
			</div>
		</slider>
		<slider>
			<img src="https://placehold.it/1200x400?text=two">
		</slider>
		<slider>
			<img src="https://placehold.it/1200x400?text=three">
		</slider>
	</carousel> -->
<!-- ends slider from vueStrap