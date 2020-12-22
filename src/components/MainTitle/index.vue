<template>
  <el-row class="title" align="center">
    <h3>{{text}}</h3>
  </el-row>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
.title {
  height: 60px;
}
</style>
