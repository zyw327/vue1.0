<template>
  <div>
      <div>{{msg}}---{{config}}</div>
      <child :config.sync='config'></child>
      <button @click="change">我也改</button>
  </div>
</template>
<script>
import Child from './child.vue'
export default {
  data(){
    return {
        msg: 'add',
        config: '你好好'
    };
  },
  methods: {
      change() {
          this.config = '我也改';
      }
  },
  components: {
      Child
  }
}
</script>

<style>
    div{
        background: black;
        color: white;
    }
</style>
