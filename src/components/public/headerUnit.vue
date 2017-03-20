<!-- KIM CYTON -->
<template>
	<div class='myheader' :style="{backgroundColor:headerStyle.bgcolor}">
		<ul class="headerNav">
			<li   v-for='(item,index) in headerStyle.titles'
					transition="item"
					:style="{lineHeight:headerStyle.lineheight+'px'}">
				<a :style="{
						fontSize:headerStyle.fontsize+'px',
						color:headerStyle.fontcolor,
					}"
					target="blank"
					:href="[item.link+'/'+item.name]"
				>
					{{item.name}}
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	components:{},
   name: 'myheader',
   data () {
   	return {

   	};
	},
	props:{
		headerStyle:{
			type:Object,
			default:function(){
				return{
					bgcolor:{
						type:string,
						default:'#39c'
					},
					fontsize:{
						type:Number,
						default:18
					},
					fontcolor:{
						type:String,
						default:"#39c"
					},
					lineheight:{
						type:Number,
						default:80
					},
					titles:{
						type:Array,
						default:[
							{name:"kim",link:"#"},
							{name:"Cyton",link:"#"},
							{name:"parCheunYU",link:"#"},
							{name:"chMino",link:"#"},
						]
					},
				}
			}
		}
	},
	mounted:function(){

	},
	methods:{
	},
};
</script>

<style lang='scss' scoped>
	.myheader{
		background-color: #ddd;
		.headerNav{
			width: 920px;
			margin: 0 auto;
			padding: 0 5px;
			li{
				padding: 25px 0;
				display: inline-block;
				a{
					font-size: 20px;
					padding: 0px 10px;
					&:hover{
						color:red;
					}
				}
			}
		}
	}
</style>
/*		header组件数据api

	headerStyle1:{
		bgcolor:"pink",		//选填
		fontsize:19,			//选填
		fontcolor:"blued",	//选填
		lineheight:10,			//选填
		titles:[					:::::: 必填 ::::::
			{name:"kim",link:"#"},
			{name:"Cyton",link:"#"},
			{name:"parkDog",link:"#"},
			{name:"parCheunYU",link:"#"},
			{name:"chMino",link:"#"},
		]
	},
*/