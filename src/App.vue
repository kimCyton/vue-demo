<template>
  <div id="app">
    <h2>TodoList</h2>
    <input type="text" v-model='content' v-on:keyup.enter="addNew">
    <ul>
      <li v-for='item in todos' v-bind:class="{completed:item.completed}" v-on:click="toggleComp(item)">
        <span>{{item.task}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span @click="remove(item.id)">X</span>
      </li>
    </ul>
    <component-a></component-a>
  </div>
</template>

<script>
import Store from './store'
import ComponentA from './components/componentA.vue'
//导入A组件

export default {
  name: 'app',
  data:function() {
    return {
      todos:Store.fetch(),
      content:''
    }
  },
  components:{ComponentA},
  //组件 的引用
  methods:{
    toggleComp:function(item){
      item.completed=!item.completed
    },
    addNew:function(){
      console.log(this.content)
      this.todos.push({
        task:this.content,
        id:new Date().getTime(),
        completed:false
      });
      this.content='';
      //console.log(Storage)
    },
    remove:function(id){
      var _this = this;
      this.todos.forEach(function(value,index){
        if (value.id==id) {
          _this.todos.splice(index,1)
        };
      })
    }
  },
  watch:{
    todos:{
      handler:function(items){
        Store.save(items)
      },
      deep:true
    }
  }
}
</script>

<style lang="scss">

.completed span:nth-of-type(1){
  text-decoration: line-through;
}

span:nth-of-type(2){
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #39c;
  color:#fff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
