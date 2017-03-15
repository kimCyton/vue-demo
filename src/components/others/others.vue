<template>
	<div class="others" style='height: 1000px'>
		<h3 ref='title' @click='ref'>test Radon UI</h3>
		<rd-audio :audio="audio"></rd-audio>
		<rd-card-group id='cardgroup'>
			<rd-card title="Voice" class='cardtitle'>
				<p class="cardparagraph">
				   《Voice》是韩国OCN电视台于2017年1月14日首播的悬疑剧，由金道赫执导，马珍媛编剧，张赫、李荷娜、白成铉等主演。该剧讲述守护犯罪现场黄金时间的112报案中心队员们，妻子因意外事故去世的刑警武镇赫与112报案中心队员姜权酒一同追查杀害家人的连锁杀人魔的过程中，解决事件的故事
				</p>
			</rd-card>
			<rd-card title="Voice" class='cardtitle'>
				<p class="cardparagraph">
				   《Voice》是韩国OCN电视台于2017年1月14日首播的悬疑剧，由金道赫执导，马珍媛编剧，张赫、李荷娜、白成铉等主演。该剧讲述守护犯罪现场黄金时间的112报案中心队员们，妻子因意外事故去世的刑警武镇赫与112报案中心队员姜权酒一同追查杀害家人的连锁杀人魔的过程中，解决事件的故事
				</p>
			</rd-card>
			<rd-card title="tag" class='cardtitle'>
				<p class="cardparagraph">
				   《Voice》是韩国OCN电视台于2017年1月14日首播的悬疑剧，由金道赫执导，马珍媛编剧，张赫、李荷娜、白成铉等主演。该剧讲述守护犯罪现场黄金时间的112报案中心队员们，妻子因意外事故去世的刑警武镇赫与112报案中心队员姜权酒一同追查杀害家人的连锁杀人魔的过程中，解决事件的故事
				</p>
			</rd-card>
		</rd-card-group>
		<!-- 在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 .native 修饰符： -->
		<rd-button @click='open'>默认按钮</rd-button>
		<br>
		<rd-drop-button type='success' v-bind:text='selectButtonContent'>
			<rd-button @click='selectButtonContent="编辑"'>编辑</rd-button>
			<rd-button disabled @click='selectButtonContent="审核"'>审核</rd-button>
			<rd-button @click='selectButtonContent="删除"'>删除</rd-button>
		</rd-drop-button>
		<rd-button @click='addPersonInfo' type="primary">添加信息</rd-button>
		<rd-table :table="TableData"></rd-table>
		<br>
		<br>
		<br>
		<div id="buttonGroup">
			<rd-slider :slider="slider"></rd-slider>
				<rd-button type="primary">
				<rd-tooltip>这里是tooltip</rd-tooltip>鼠标移上来就会出现提示 按钮
			</rd-button>
			<span>鼠标移上来就会出现提示<rd-tooltip>这里是tooltip</rd-tooltip></span>
		</div>
	</div>
</template>
<script>
import $ from 'jQuery'
import {rdButton,rdDropButton,rdTable,rdCard,rdCardGroup,rdAudio,rdSlider,rdTooltip} from 'radon-ui'

import {tableData} from './tabledata.js'

export default {

	name: 'others',

	data() {
		return {
			name:'name',
			slider: {
				value: 66, // 必选 default 0，会根据step调整
				min: 10, // 可选 default 0
				max: 100, // 可选 default 100
				start: 0, // 可选 default 0
				end: 100, // 可选 default 100
				step: 5 // 可选 default 1
			},
			selectButtonContent: '操作',
			TableData: tableData,
			audio: {
				title: 'voice',
				src: 'http://fs.web.kugou.com/6d8e6b4519552a939e41abd96edefa76/58c6a7ce/G085/M0A/0E/10/NZQEAFio7pSAaVrSADb1fi_3U_s569.mp3',
				poster: 'https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/c8177f3e6709c93da238d8a6963df8dcd000549d.jpg',
				options: {
					preload: false,
					autoplay: false,
					rate: 1,
					loop: false,
					volume: 0.5
				}
			}
		};
	},
	methods: {
		open() {
			this.$Modal.confirm(
				'今日任务',
				'这里应该说点什么...',
				() => {
					this.$Notification.success('确认', '任务已添加', 2000)
				},
				() => {
					this.$Notification.success('取消了', '', 2000)
				}
			)
		},
		editTable(row) {
			this.$Notification.success('正在编辑' + row._value[0], '', 5000)
		},
		removeTableItem(row) {
			this.TableData.tableData.forEach(item => {
				if (item.id === row.id) {
					this.TableData.tableData.$remove(item)
				}
			})
			this.$Notification.success('删除' + row._value[0] + '成功', '', 5000)
		},
		addPersonInfo(){
			this.TableData.tableData.push({
				id: new Date().getTime(),
				name: this.name,
				age: '22',
				wechat: 'kimCyton',
				checkbox: {
					disabled: false,
					checked: false,
					text: ''
				}
			})
		},
		ref(){
			console.log(this.$refs.title.innerHTML="new")
		}
	},
  	mounted(){
  	},
  	components:{
  		rdButton,rdDropButton,rdTable,rdCard,rdCardGroup,rdAudio,rdSlider,rdTooltip
  	}
};
</script>

<style lang="css" scoped>
	#cardgroup{
		padding: 30px;
	}
	p.cardparagraph{
		font-size: 16px;
	}
	#buttonGroup{
		padding: 80px;
	}
</style>