 <template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="index"> </el-table-column>
    <el-table-column prop="date" label="用户名"> </el-table-column>
    <el-table-column prop="name" label="性别"> </el-table-column>
    <el-table-column prop="address" label="激活状态"> </el-table-column>
    <el-table-column prop="address" label="头像"> </el-table-column>
    <el-table-column label="操作" width="240">
      <template>
        <el-button size="mini">查看</el-button>
        <el-button size="mini">编辑</el-button>
        <el-button size="mini" type="danger">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>

<style>
</style>
