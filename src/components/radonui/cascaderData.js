const datacascader = [{
	value: 'china',
	label: '中国',
	children: [{
		value: 'sichuan',
		label: '四川',
		children: [
			{value: 'chegndu',label: '成都'},
			{value: 'deyang',label: '德阳'},
			{value: 'guangyuan',label: '广元'},
			{value: 'mianyang',label: '绵阳'},
			{value: 'nanchong',label: '南充'},
			{value: 'guangan',label: '广安'},
			{value: 'suining',label: '遂宁'},
			{value: 'neijiang',label: '内江'},
			{value: 'leshan',label: '乐山'},
			{value: 'zigong',label: '自贡'},
			{value: 'luzhou',label: '泸州'},
			{value: 'yibin',label: '宜宾'},
			{value: 'panzhihua',label: '攀枝花'},
			{value: 'bazhong',label: '巴中'},
			{value: 'dazhou',label: '达州'},
			{value: 'ziyang',label: '资阳'},
			{value: 'meishan',label: '眉山'},
			{value: 'abazhou',label: '阿坝州'},
			{value: 'ganzizhou',label: '甘孜州'},
			{value: 'liangshanzhou',label: '凉山州'},
		]
	}]
}, {
	value: 'America',
	label: '美国',
	children: [{
		value: 'California',
		label: '加利福尼亚',
		children: [{
			value: 'lake',
			label: '湖'
		}, {
			value: 'Los Angeles',
			label: '洛杉矶'
		}]
	}, {
		value: 'Delaware',
		label: '特拉华',
		children: [{
			value: 'Dover',
			label: '多佛'
		}]
	}]
}];
const timelinedata = [{
		icon: 'ion-alert-circled',
		color: '#2db7f5',
		text: '连接服务器 2016-06-16 20:01:12'
	}, {
		color: '#2db7f5',
		text: '准备上传文件 2016-06-16 20:01:13'
	}, {
		color: 'red',
		text: '上传失败 2016-06-16 20:01:14'
	}]
export {datacascader,timelinedata}