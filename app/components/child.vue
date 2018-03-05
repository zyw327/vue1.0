<template>
  <div>我是子组件{{msg}}---{{config}}
      <button @click="change">改变值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        msg: '你好'
    };
  },
  methods: {
    change() {
        this.config = '我改';
    }
  },
  props: ['config']
}
</script>

<style scoped>
    div{
        color: red;
    }
</style>
