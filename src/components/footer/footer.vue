<template>
	<footer class="footer">
		<div v-for="item in customService" class='f_p'>
			<h4 @click="titleChange" class="title">{{item.title}}</h4>
			<p class="detailLinks">
				<a v-for="obj in item.detailLinks" target="_blank" :href="obj.link">{{obj.content}}</a>
			</p>
		</div>
	</footer>
</template>

<script>
import content from './data.js'
export default {
  name: 'footer',

  	data () {
    	return {
    		customService:content.data_detail
    	};
  	},
  	methods:{
  		titleChange(){
  			console.log(1)
  		}
  	}
};
</script>

<style lang="scss" scoped>
	.footer{
		width:980px;
		margin:0 auto;
		background:#f1f1f1;
		margin-top: 730px;
		.f_p{
			width: 25%;
			float: left;
			padding:35px 25px 45px 30px;
			box-sizing: border-box;
			h4.title{
				padding-left: 40px;
				padding-bottom: 15px;
				font-size: 15px;
			}
			p.detailLinks a{
				display:inline-block;
				margin:5px 10px 2px 8px;
				font-size: 9px;
				color:#999;
				&:hover{
					color:#f60;
				}
			}
		}
		&:after{
			content:'';
			display:block;
			clear:both;
		}
	}

</style>