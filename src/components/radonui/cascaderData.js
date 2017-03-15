const datacascader = [{
	value: 'china',
	label: '中国',
	children: [{
		value: 'sichuan',
		label: '四川',
		children: [{
			value: 'chegndu',
			label: '成都'
		}, {
			value: 'deyang',
			label: '德阳'
		}]
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