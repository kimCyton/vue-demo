<template>
	<div>
		<div class="btn-group">
			<button class="btn btn-default btn-lg" @click="sortBy">女士</button>
			<button class="btn btn-default btn-lg" @click="sortByReverse">关注</button>
			<button class="btn btn-default btn-lg" @click="sortByRandom">随机</button>
			<mark>这里可以拿到路由参数：{{$route.params.id||"None now"}}</mark>
		</div>
		<div class="product">
			<div v-for="item in products" class="content">
				<h3>{{item.title}}</h3>
				<img v-bind:src="item.imgSrc" alt="11" width="130px" height="120px">
				<summary>
					{{item.summary}}
				</summary>
			</div>
		</div>
	</div>
</template>

<script>
import content from'./products.js'
export default {
  	name: 'product',
  	data () {
    	return {
    		products:content._products
    	}
  	},
  	mounted :function(){
  	},
  	methods:{
  		sortBy:function(){
  			this.products.sort(function(a,b){
  				return a['key']>b['key']?1:-1;
  			})
  		},
  		sortByReverse:function(){
  			this.products.sort(function(a,b){
  				return a['key']<b['key']?1:-1;
  			})
  		},
  		sortByRandom:function(){
  			this.products.sort(function(){
  				return Math.random()>0.5?1:-1;
  			})
  		}
  	},
  	/*响应路由参数的变化
	提醒一下，当使用路由参数时，例如从 /user/foo 导航到 user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
	复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象
	*/
  	watch:{
  		'$route'(to,from){
  			console.log(to,from)
  		}
  	}
};
</script>

<style lang="scss" scoped>
	.product{
		width:100%;
		.btn-group{
			clear: both;
			display:block;
		}
		.content{
			overflow: hidden;
			float: left;
			box-sizing: border-box;
			padding: 0px 5px 8px 10px;
			height:400px;
			width: 48%;
			h3{
				font-size: 34px;
				text-align: center;
			}
			img{
				display: block;
				vertical-align: center;
				float:left;
				padding-right:9px;
			}
			summary{
				text-indent: 8px;
				font-size: 22px;
				letter-spacing: 1px;
			}
			&:after{
				content:'';
				clear:both;
				display:block;
			}
		}
	}
</style>