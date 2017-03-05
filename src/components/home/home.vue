<template>
	<div class="home">
    	<h1>Movie On</h1>
    	<button class="btn btn-success" @click="sortByorder">按照评分排序</button>
    	<button class="btn btn-success" @click="sortByyear">时间排序</button>
    	<button class="btn btn-success" @click="sortByRandom">混排</button>
    	<ul>
    		<li v-for="(item,index) in contents"
    			:class="{active:index==currentItem}"
	    		v-on:click="currentItem=index"
	    		@click="deleteItem(index)">
    			<img v-bind:src="item.images.small" alt="item.title">
    			<div class="details">
    				<h3>{{item.title}} -- <span>{{item.year}}</span> </h3>
	    			<mark>{{item.rating.average}}</mark>
	    			导演：<strong v-for="(d,index) in item.directors">{{d.name}}
	    			<span v-show="index!=item.directors.length-1">、</span></strong><br>
	    			<strong v-for="(type,index) in item.genres">{{type}}
	    			<span v-show="index!=item.genres.length-1">、</span></strong>
    			</div>
    		</li>
    	</ul>
	</div>
</template>

<script>
import MyTransition from '../transition/transition.vue'
import $ from './../../../node_modules/jquery/dist/jquery.min.js'
export default {
  	name: 'home',
  	data () {
    	return {
    		contents:[],
    		currentItem:0
    	};
  	},
  	filters:{// Vue 2.x 中，过滤器只能在 mustache 绑定和 v-bind 表达式（从 2.1.0 开始支持）中使用，因为过滤器设计目的就是用于文本转换。为了在其他指令中实现更复杂的数据变换，你应该使用计算属性
  		firstToRed(value){
  		}
  	},
  	mounted:function(){
  		this.$nextTick(function(){
  			this.getList()
  		})
  	},
  	methods:{
  		getList(){
  			this.$http.jsonp("http://api.douban.com/v2/movie/in_theaters").then(function(res){
  				this.contents = res.body.subjects;
  			})
  		},
  		sortByorder(){
  			this.contents.sort(function(a,b){
  				return a.rating.average<b.rating.average?1:-1;
  			})
  		},
  		sortByyear(){
  			this.contents.sort(function(a,b){
  				return a.year<b.year?1:-1;
  			})
  		},
  		sortByRandom(){
  			this.contents.sort(function(){
  				return Math.random()<0.5?1:-1;
  			})
  		},
  		deleteItem(item){
  			//this.contents.splice(item,1)
  		}
  	},
  	components:{},
};
</script>

<style lang="scss" scoped>
   .home{
   	ul{
   		li{
   			height: 120px;
   			position: relative;
   			padding:4px 10px;
   			min-width:500px;
   			img{
   				border-radius: 5px;
   				position: relative;
   				top:-25px;
   				display:inline-block;
   				padding-left:10px;
   			}
   			.details{
   				display:inline-block;
   				padding-left: 20px;
   				h3{
   					color:#bbb;
   				}
   				mark{
   					position: absolute;
   					right:20px;
   					top:20px;
   				}
   			}
   		}
   		li.active{
   			background: #fafff6;
   		}
   	}
   }
</style>