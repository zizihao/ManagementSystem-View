<template>
  <!-- 侧边栏 -->
  <el-row>
    <el-col :span="24">
      <el-menu
        default-active="usermanage"
        class="el-menu-vertical-demo"
        background-color="#333744"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="menuSelect"
      >
        <el-menu-item index="usermanage" >
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="userinfo" >
          <i class="el-icon-setting"></i>
          <span slot="title">个人信息</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    menuSelect (index) {
      this.$router.push(index)
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu {
  border-right: none;
}
</style>
