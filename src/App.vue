<template>
  <div id="app">
    <MyHeader></MyHeader>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/header/header.vue'
import MyFooter from './components/footer/footer.vue'

export default {
  data:function() {
    return {

    }
  },
  components:{MyHeader,MyFooter},
}
</script>

<style lang="scss">
  #app{
    margin:0 auto;
  }
</style>
