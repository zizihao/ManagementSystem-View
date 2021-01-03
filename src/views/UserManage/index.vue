<template>
  <el-card>
    <main-title text="用户管理" />
    <el-row type="flex" justify="end" class="addRow">
      <el-button type="primary" size="small">添加用户</el-button>
    </el-row>
    <table-list />
  </el-card>
</template>

<script>
import TableList from './component/TableList'
export default {
  components: {
    TableList
  }
}
</script>

<style lang="less" scoped>
.addRow{
  padding-right: 40px;
}
</style>
