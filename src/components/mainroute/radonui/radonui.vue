<!-- KIM CYTON -->
<template>
	<div class='radonui'>
		<h1>radonui</h1>
		<div  class='hypot'>
			<h4>勾股定理</h4><br>
			<p>One side of Triangle:
				<input class="hypotValue" type="text" v-model='trangleSide.side1'>
			</p>
			<p>
				Other side of Triangle:
				<input class="hypotValue" type="text" v-model='trangleSide.side2'><br>
			</p>
			Result: <strong class="hypotResult">{{resultHypot}}</strong>
		</div>
		<rd-spin></rd-spin>
		<rd-spin color="red"></rd-spin>
		<rd-spin color="#aaa"></rd-spin>
		<br>
		<rd-timeline :timeline="timeline"></rd-timeline>
		<rd-cascader :cascader="cascader"></rd-cascader>
		<!-- 级联选择 -->
		<button @click="test">1</button>
	</div>
</template>

<script>
import {rdSpin,rdTimeline,rdCascader} from 'radon-ui'
import {datacascader,timelinedata} from './cascaderData.js'
export default {
   name: 'radonui',
   data () {
   	return {
   		trangleSide:{ //勾股定理
   			side1:'',
   			side2:''
   		},
   		methodsArray:1,
			switchA: {
				checked: false,
				size: 'small'
			},
			timeline:timelinedata,
			cascader:{
				options:datacascader,
				valueArr:[]
			}

   	};
	},
	mounted:function(){

	},
	methods:{
		test(){
			console.log(this.cascader.options)
		}
	},
	computed:{
		resultHypot(){
			return Math.hypot(this.trangleSide.side1,this.trangleSide.side2)
		},
	},
	components:{rdSpin,rdTimeline,rdCascader},
};
</script>

<style lang='scss' scoped>
	.hypot{
		display: none;
		width: 300px;
		padding: 10px;
		box-sizing: border-box;
		background-color: #ccc;
		border-radius: 10px;
		text-align: center;
		h4{
			text-align: center;
			margin: 0;
			position: relative;
			top:8px;
		}
		.hypotResult{
			color: red;
		}
	}
	input.hypotValue{
		display: inline-block;
		width: 70px;
		border:none;
		padding-left: 10px;
		background-color: rgba(255,255,255,.5);
	}
</style>