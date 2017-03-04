<template>
	<header class="header">
		<ul>
			<li v-for='(item,index) in navWords'>
				<a v-bind:class='{active:index===currentId}'  v-on:click='currentId=index' v-bind:href='item.alink'>
					{{item.content}}
				</a>
			</li>
		</ul>
	</header>
</template>

<script>
	export default{
		data:function(){
			return {
				navWords:[
					{content:'首页',alink:'#/home',id:1},
					{content:'产品',alink:'#/product',id:2},
					{content:'其他',alink:'#/others',id:3},
					{content:'联系我',alink:'#/contact',id:4}
				],
				currentId:0
			}
		},
		methods:{
		}
	}
</script>
<style scoped lang='scss'>
	$navHeight:50px;

	.header{
		background: #ccc;
		width: 100%;
		height: $navHeight;
		ul{
			padding-left: 100px;
			width: 920px;
			margin: 0 auto;
			li{
				text-align: center;
				padding: 0 10px;
				height: 100%;
				width: 80px;
				line-height: $navHeight;
				display: inline-block;
				a{
					display: inline-block;
					width: 100%;
					height: 100%;
					color: #fff;
					font-size: 18px;
					&:hover{
						color: #aaa;
					}
				}
				a.active{
					color: #39c;
				}
			}
		}
	}
</style>