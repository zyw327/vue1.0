<template>
  <div>我是子组件{{msg}}</div>
</template>

<script>
export default {
  data() {
    return {
        msg: '你好'
    };
  }
}
</script>

<style scoped>
    div{
        color: red;
    }
</style>
