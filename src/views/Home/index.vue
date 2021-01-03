<template>
  <el-container class="home-container">
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="../../assets/logo.png" />
        <span>后台管理系统</span>
      </div>
      <el-button type="info">退出</el-button>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 左侧 -->
      <el-aside>
        <aside-nav />
      </el-aside>
      <!-- 右侧 -->
      <el-main>
        <!-- <transition mode="out-in" enter-active-class="animate__animated animate__fadeInLeft"  leave-active-class="animate__animated animate__fadeOutRight"> -->
          <!-- 路由占位符 -->
          <router-view></router-view>
        <!-- </transition> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideNav from './component/AsideNav'

export default {
  components: {
    AsideNav
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      height: 55px;
      border-radius: 50%;
      border: 1px soild #eee;
      margin-left: 10px;
    }
    img:hover {
      transition: 1s;
      box-shadow: 0 0 15px #ddd;
      cursor: pointer;
    }
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  width: 200px !important;
}
.el-main {
  background-color: #eaedf1;
}
.zoom-enter-active {
  animation: zoomIn 0.5s;
}
.zoom-leave-active {
  animation: zoomOut 0.5s;
}
</style>
