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
            <el-input v-model="form.username" placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="import-box">
          <p>密码：</p>
          <div class="input-box">
            <el-input type="password" v-model="form.password" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </div>
            <div class="tips">
        <p>账号：admin</p>
        <p>密码：123</p>
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
import { login } from '../api/user'
export default {
  data () {
    return {
      form: {
        username: 'admin',
        password: '123'
      }
    }
  },
  methods: {
    onSumber () {
      login(this.form).then(res => {
        const { messge, token, success } = res.data
        if (success === true) {
          localStorage.setItem('token', token)
          this.$message.success(messge)
          this.$router.push('/')
        }
      })
    },
    reset () {
      this.username = ''
      this.password = ''
    }
  }
}
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
  .tips{
    display: flex;
    justify-content:space-around;
    align-items: center;
    margin-top: -20px;
    margin-bottom: 15px;
    padding: 0 130px;
    p{
      font-size: 13px;
    }
  }
}
</style>
