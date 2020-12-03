<template>
  <div class="container">
    <div class="main">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="import">
        <div class="import-box">
          <p>用户名：</p>
          <div class="input-box">
            <el-input v-model="username" placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="import-box">
          <p>密码：</p>
          <div class="input-box">
            <el-input v-model="password" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </div>
      <div class="btn">
        <el-button type="primary" class="login" round @click="onSumber"
          >登录</el-button
        >
        <el-button type="info" class="reset" round @click="reset"
          >重置</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSumber() {
      this.$axios({
        method: "post",
        url: "/login",
        data: {
          username: this.username,
          password: this.password,
        },
      }).then((res) => {
        console.log(res);
      });
    },
    reset() {
      this.username = "";
      this.password = "";
    },
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 350px;
  border-radius: 3px;
  background-color: #fff;
  .logo {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
      object-fit: cover;
    }
  }
  .import {
    margin-top: 65px;
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .import-box {
      display: flex;
      width: 80%;
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
    margin-bottom: 9px;
    .login,
    .reset {
      margin: 0;
      width: 85px;
      height: 40px;
    }
  }
}
</style>