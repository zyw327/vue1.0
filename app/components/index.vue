<template>
  <div>
      <div>{{msg}}</div>
      <child></child>
  </div>
</template>
<script>
import Child from './child.vue'
export default {
  data(){
    return {
        msg: 'add'
    };
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
