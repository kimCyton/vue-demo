<template>
	<div class="contact">
		<h3>Learn ES6</h3>
    <ul>
      <li v-for="(item,index) in $store.state.todos">
          <span>{{index+1}} : {{item.text}}</span>
      </li>
    </ul>
    传字符串参数 <strong>{{countAlias}}</strong><br>
    箭头函数可使代码更简练 <strong>{{count}}</strong><br>
    <!--获取todos的过滤数据<strong>{{GetTodoCount}}</strong><br>-->
    {{GetTodoUndone}}
    <ul>
      <li v-for="item in GetTodoUndone">
        {{item.text}}
      </li>
    </ul>
	</div>
</template>
<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import {mapState} from 'vuex'

export default {
   name: 'contact',

  	methods:{
      //子组件中通过this.$store.state获取数据
  	},
    //当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键：
   computed:mapState({
      //箭头函数可使代码更简练
      count:state=>state.count,
      //传字符串参数 'count' 等同于 `state => state.count`
      countAlias:'count',
      //为了能够使用 `this` 获取局部状态，必须使用常规函数
      // countPlusLocalState(state){
      //   return state.count + this.max
      // }
      GetTodoUndone:state=>state.todos.filter(item=>item.done==false)
    }),
};
</script>

<style lang="css" scoped>
</style>