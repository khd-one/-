<template>
  <div class="login">
    <el-form
      :model="formDate"
      status-icon
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
      label-position="top"
      :rules="rules"
    >
      <h2>用户登录</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model.trim="formDate.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model.trim="formDate.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="buttom" type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //数据
      formDate: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: 'change'  }
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
      }
    };
  }
};
</script>
<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
body > div {
  height: 100%;
}
.login {
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.el-form {
  width: 580px;
  height: 440px;
  box-sizing: border-box;
  padding: 40px;
  border-radius: 10px;
  background-color: white;
}
.buttom {
  width: 100%;
}
</style>
 