<template>
	<div class="contact">
		<div>
      <!-- <h3>{{$store.state.count}}</h3>
        <button class="btn btn-default" @click="$store.commit('increment')">+</button>
      <ul>
        <li v-for="(item,index) in $store.state.todos">
            <span>{{index+1}} : {{item.text}}</span>
        </li>
      </ul>
      传字符串参数 <strong>{{countAlias}}</strong><br>
      箭头函数可使代码更简练 <strong>{{count}}</strong><br> -->
      <!--获取todos的过滤数据<strong>{{GetTodoCount}}</strong><br>-->
      <!-- {{GetTodoUndone}} -->
      <!-- <ul>
        <li v-for="item in GetTodoUndone">
          {{item.text}}
        </li>
      </ul> -->
    </div>
    <h4>click {{$store.state.count}} times ,
      count is  <strong>{{evenOrOdd}}</strong>
    </h4>
    <button class="btn btn default" @click="increment">+</button>
	</div>
</template>
<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapGetters , mapActions } from 'vuex'

export default {
    name: 'contact',
    //{子组件中通过this.$store.state获取数据},
  	methods:mapActions([
      'increment'
    ]),
    computed:mapGetters([
      'evenOrOdd',
    ]),
};
</script>

<style lang="css" scoped>
</style>