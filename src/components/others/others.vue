<template>
	<div class="others">
		<h3>test Radon UI</h3>
		<!-- 在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 .native 修饰符： -->
		<rd-button @click="open">默认按钮</rd-button>
		<rd-button type="primary">推荐按钮</rd-button>
	</div>
</template>
<script>
import {rdButton} from 'radon-ui'
export default {

	name: 'others',

  	data () {
    	return {
    	};
  	},
	methods: {
		open() {
			this.$Modal.confirm(
				'这里是标题',
				'这里应该说点什么',
				() => {
					this.$Notification.success('你点击了确认', '你点击了确认你点击了确认你点击了确认你点击了确认你点击了确认', 5000)
				},
				() => {
					this.$Notification.success('你点击了取消', '', 5000)
				}
			)
		}
	},
  	mounted(){
  	},
  	components:{
  		rdButton
  	}
};
</script>

<style lang="css" scoped>
</style>