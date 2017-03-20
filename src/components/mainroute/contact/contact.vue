<template>
	<div class="contact">
    <h4>click <strong>{{$store.state.counter.count}}</strong> {{$store.state.count|danFushu('time')}} ,
      count is  <strong>{{evenOrOdd}}</strong>
    </h4>
    <button class="btn btn-default" @click="decrement">-</button>
    <button class="btn btn-default" @click="increment">+</button>
    <button class="btn btn-default" @click="incrementIfOdd">+IfOdd</button>
    <button class="btn btn-default" @click="incrementAsync">1s+</button>
	</div>
</template>
<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapGetters , mapActions } from 'vuex'

export default {
    name: 'contact',
    //{子组件中通过this.$store.state获取数据},
  	methods:mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ]),
    computed:mapGetters([
      'evenOrOdd',
    ]),
    filters:{
      danFushu:(n,w)=>{return Math.abs(n)==1?w:w+'s'}
    }
};
</script>

<style lang="css" scoped>
</style>