<template>
  <div class="container">
    <div class="main">
      <div class="import">
        <div class="import-box">
          <p>用户名：</p>
          <div class="input-box">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="import-box">
          <p>密码：</p>
          <div class="input-box">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </div>
      <div class="btn">
        <el-button type="primary" class="login" round>登录</el-button>
        <el-button type="info" class="reset" round>重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b4b6b;
  height: 100%;
}
.main {
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 300px;
  border-radius: 3px;
  background-color: #fff;
  .import {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .import-box {
      display: flex;
      width: 85%;
      p {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .input-box {
        flex: 4;
      }
    }
  }
  .btn {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    .login,
    .reset {
      margin: 0;
      width: 85px;
      height: 40px;
    }
  }
}
</style>