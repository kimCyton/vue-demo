<!-- KIM CYTON -->
<template>
	<div class='telephone'>
		<p>{{fatherNum}}</p>
		<overlay :propa='dataA' :propb='dataB'>
			<h1 slot='title'>这是插槽1的标题</h1>
			<span></span>
			<p slot='footer'>这是插槽1的tail</p>
		</overlay>
		<!-- <h3>from counter :{{$store.state.counter.count}}</h3> -->
		<!-- {{getCustomNum}} -->
		<!-- <ul>
			<li v-for="item in $store.state.telephone.customs">
				<strong>{{item.name}}</strong>  tel: <span>{{item.tel}}</span>
			</li>
		</ul> -->
		<br>
		<h2>datapicker</h2>
		<div class="row">
	      <span> Departure Date：</span>
	      <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
		</div>
		<input type="text" v-model='startTime.time'>
	</div>
</template>

<script>
import myDatepicker from 'vue-datepicker'
import { mapGetters , mapActions } from 'vuex'
import overlay from './../../usefulCompenent/overlay.vue'
export default {
   name: 'telephone',
   data () {
		return {
			fatherNum:0,
			dataA:'ClickMe To Get Browser vendor',	//prop传递
			dataB:2,	//prop传递
			startTime: {
				time: ''
			},
			endtime: {
				time: ''
			},
			option: {
				type: 'day',
				week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
				month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				format: 'YYYY-MM-DD',
				placeholder: 'when ?',
				inputStyle: {
					'display': 'inline-block',
					'padding': '6px',
					'line-height': '22px',
					'font-size': '16px',
					'border': '2px solid #fff',
					'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
					'border-radius': '2px',
					'color': '#5F5F5F'
				},
				color: {
					header: '#ccc',
					headerText: '#39c'
				},
				buttons: {
					ok: 'Ok',
					cancel: 'Cancel'
				},
				overlayOpacity: 0.5, // 0.5 as default
				dismissible: true // as true as default
			},
			timeoption: {
				type: 'min',
				week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
				month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				format: 'YYYY-MM-DD HH:mm'
			},
			multiOption: {
				type: 'multi-day',
				week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
				month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				format: "YYYY-MM-DD HH:mm"
			},
			limit: [{
				type: 'weekday',
				available: [1, 2, 3, 4, 5]
			}, {
				type: 'fromto',
				from: '2016-02-01',
				to: '2016-02-20'
			}]
		};
	},
	mounted:function(){

	},
	methods:{
		getTime(){
			console.log(this.startTime.time)
		},
		add(){
			this.fatherNum+=1
		}
	},
	computed:mapGetters([
		'getCustomNum'
	]),
	components:{'date-picker': myDatepicker,overlay},
};
</script>

<style lang='scss' scoped>
	
</style>