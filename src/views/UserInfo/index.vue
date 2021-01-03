<template>
  <el-card>
    <main-title text="个人信息" />
    <el-row>
      <el-col :span="10">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名" placeholder="用户名">
            <el-col :span="12">
              <el-input v-model="form.username"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="生日">
            <el-col :span="12">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-row class="uploadRow" type="flex" justify="center" align="center">
            <image-upload />
          </el-row>
          <el-form-item label="激活状态">
            <el-switch v-model="form.activate"></el-switch>
          </el-form-item>
          <el-form-item label="描述">
            <el-col :span="18">
              <el-input
                resize="none"
                type="textarea"
                v-model="form.desc"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">更改</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        date: '2020-12-29',
        activate: false,
        sex: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form)
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-textarea__inner {
  height: 100px;
}
.uploadRow{
  padding-bottom: 10px;
}
</style>
