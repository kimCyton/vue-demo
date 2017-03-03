<template>
	<footer class="footer">
		<div v-for="item in customService" class='f_p f_part1'>
			<h4 class="title">{{item.title}}</h4>
			<p class="detailLinks">
				<a v-for="obj in item.detailLinks" :href="obj.link">{{obj.content}}</a>
			</p>
		</div>
	</footer>
</template>

<script>
export default {
  name: 'footer',

  	data () {
    	return {
    		customService:[
    			{title:'消费者保障',detailLinks:[{link:'#',content:'保障范围'},{link:'#',content:'退货退款流程'},{link:'#',content:'服务中心'},{link:'#',content:'更多特色服务'}]},
    			{title:'新手上路',detailLinks:[{link:'#',content:'新手专区'},{link:'#',content:'消费警示'},{link:'#',content:'交易安全'},{link:'#',content:'24小时在线帮助'},{link:'#',content:'免费开店'}]},
    			{title:'淘宝特色',detailLinks:[{link:'#',content:'手机淘宝'},{link:'#',content:'旺信'},{link:'#',content:'大众点评'}]},
    			{title:'付款方式',detailLinks:[{link:'#',content:'快捷支付'},{link:'#',content:'信用卡'},{link:'#',content:'余额宝'},{link:'#',content:'蚂蚁花呗'},{link:'#',content:'货到付款'}]}
    		]
    	};
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