const tableData = {
	// 基础设置
	options: {
		// 是否展示选择 :Boolean
		select: true
	},
	// 列描述数据对象
	columns: [{
		index: 1,
		key: 'name',
		value: '姓名'
	}, {
		index: 2,
		key: 'age',
		value: '年龄'
	}, {
		index: 3,
		key: 'wechat',
		value: '微信'
	}],
	// 行操作对象:Array
	actions: [{
		type: 'de',
		text: '编辑',
		func: (e, row) => {
			this.editTable(row)
		}
	}, {
		type: 'de',
		text: '删除',
		func: (e, row) => {
			console.log(row)
			this.removeTableItem(row)
		}
	}],
	// 展示数据 :Array
	tableData: [{
		// 行列对象属性
		id: 1,
		name: '王尼玛',
		age: '33',
		wechat: 'wangnima',

		// 开启选择时应该有checkbox属性
		checkbox: {
			disabled: false,
			checked: false,
			text: ''
		}
	}, {
		id: 2,
		name: '赵铁柱',
		age: '26',
		wechat: 'Iron-column-zhao',
		checkbox: {
			disabled: false,
			checked: false,
			text: ''
		}
	}, {
		id: 3,
		name: '张全蛋',
		age: '27',
		wechat: 'Michael Jack',
		checkbox: {
			disabled: false,
			checked: false,
			text: ''
		}
	}]
}
export {tableData}