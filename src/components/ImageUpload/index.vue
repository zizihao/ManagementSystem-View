<template>
  <el-upload
    class="avatar-uploader"
    action="http://127.0.0.1:3000/upload"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    :file-list="fileList"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>

<script>
export default {
  data () {
    return {
      imageUrl: '',
      fileList: []
    }
  },
  methods: {
    // 成功后
    handleAvatarSuccess (res, file) {
      console.log(file)
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    // 上传前，校验
    beforeAvatarUpload (file) {
      console.log(file)
      const imageType = ['image/jpeg', 'image/png', 'image/gif']
      const isJPG = imageType.some(item => item === file.type)
      const isLt3M = file.size / 1024 / 1024 < 3

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG , png 或 gif 格式!')
      }
      if (!isLt3M) {
        this.$message.error('上传头像图片大小不能超过 3MB!')
      }
      return isJPG && isLt3M
    }
  }
}
</script>

<style lang="less">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 999;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
