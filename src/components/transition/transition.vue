<template>
	<div id="demo">
		<button class="btn btn-default btn-sm" v-on:click="show = !show">
			Toggle
		</button>
		<transition
		    name="custom-classes-transition"
		    enter-active-class="animated tada"
		    leave-active-class="animated pulse"
		  >
			<p v-if="show">hello</p>
		</transition>
		<!-- <input type="text" v-focus="{ color: '#39c', text: 'hello!' }"> -->
	</div>
</template>

<script>
export default {
  	data () {
    	return {
    		show: true
    	}
  	},
  	directives:{
  		focus:{
  			inserted:function(el,binding){
  				el.focus()
  				el.style.color = binding.value.color
  				console.log(binding.value)
  				/*
  				钩子函数被赋予了以下参数：
				el: 指令所绑定的元素，可以用来直接操作 DOM 。
				binding: 一个对象，包含以下属性：
					name: 指令名，不包括 v- 前缀。
					value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
					oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
					expression: 绑定值的字符串形式。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。
					arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。
					modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
				vnode: Vue 编译生成的虚拟节点，查阅 VNode API 了解更多详情。
				oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
  				 */
  			}
  		}
  	}
};
</script>

<style lang="scss" scoped>

</style>