<!-- <template>
   <div id="app">
      <MyHeader></MyHeader>
      <MyTransition></MyTransition>
      <MyFooter></MyFooter>
   </div>
</template> -->
<template>
   <div id="app">
      <MyHeader></MyHeader>
      <router-view style="padding:5px 10px;"></router-view>
      <rd-modal></rd-modal>
      <rd-notification></rd-notification>
      <rd-loadingbar></rd-loadingbar>
      <rd-preview></rd-preview>
      <MyFooter></MyFooter>
   </div>
</template>

<script>
import MyHeader from './components/header/header.vue'
import MyFooter from './components/footer/footer.vue'
import MyTransition from './components/transition/transition.vue'

export default {
   data:function() {
      return {

      }
   },
   components:{MyHeader,MyFooter,MyTransition},
}
</script>

<style lang="scss">
   #app{
      width: 100%;
      margin:0 auto;
   }
</style>
