<template>
  <div class="login-bg">
    <div class="login-wrap">
      <el-tabs type="border-card">
        <el-tab-pane label="登录">
          <el-form ref="loginForm" :rules="loginRules" :model="loginForm" label-width="80px">
            <el-form-item label="用户名" prop="loginAccount">
              <el-input name="account" v-model="loginForm.loginAccount"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="loginPsd">
              <el-input auto-complete="new-password" name="password" type="password" v-model="loginForm.loginPsd" @keyup.enter.native="onLogin"></el-input>
            </el-form-item>
            <div class="t-center">
              <el-button type="primary" @click="onLogin">登录</el-button>
            </div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册">
          <el-form ref="form" :rules="rules" :model="form" label-width="80px">
            <el-form-item label="用户名" prop="account">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="alias">
              <el-input v-model="form.alias"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="psd">
              <el-input auto-complete="new-password" type="password" v-model="form.psd"></el-input>
            </el-form-item>
            <el-form-item label="重复密码" prop="rePsd">
              <el-input auto-complete="new-password" type="password" v-model="form.rePsd" @keyup.enter.native="onCreate"></el-input>
            </el-form-item>
            <div class="t-center">
              <el-button type="primary" @click="onCreate">立即创建</el-button>
            </div>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      const validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          if (this.form.rePsd !== "") {
            this.$refs.form.validateField("rePsd");
          }
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.form.psd) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          loginAccount: "",
          loginPsd: ""
        },
        loginRules: {
          loginAccount: [{
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }],
          loginPsd: [{
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }]
        },
        rules: {
          account: [{
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }],
          alias: [{
            required: true,
            message: "请输入昵称",
            trigger: "blur"
          }],
          psd: [{
            required: true,
            validator: validatePass,
            trigger: "blur"
          }],
          rePsd: [{
            required: true,
            validator: validatePass2,
            trigger: "blur"
          }]
        },
        form: {
          account: "",
          alias: "",
          psd: "",
          rePsd: ""
        }
      };
    },
    methods: {
      onLogin() {
        this.$refs.loginForm.validate(result => {
          if (result) {
            const sendData = {
              account: this.loginForm.loginAccount,
              psd: this.loginForm.loginPsd
            };
            this.$http.post("account/login", sendData).then(
              response => {
                if (response.body.success) {
                  this.$message({
                    type: "success",
                    message: response.body.message
                  });
                  const authData = {};
                  Object.keys(response.body).forEach(v => {
                    if (v === "message" || v === "success") {
                      return;
                    }
                    authData[v] = response.body[v];
                  });
                  window.localStorage.setItem(
                    "authData",
                    JSON.stringify(authData)
                  );
                  this.$router.push("/home");
                } else {
                  this.$message({
                    type: "error",
                    message: response.body.message
                  });
                }
              },
              response => {
                // error callback
                this.$message.error({
                  message: "出现错误"
                });
              }
            );
          }
        });
      },
      onCreate() {
        this.$refs.form.validate(result => {
          if (result) {
            const sendData = {
              account: this.form.account,
              alias: this.form.alias,
              psd: this.form.psd
            };
            this.$http.post("account/register", sendData).then(
              response => {
                if (response.body.success) {
                  this.$message({
                    type: "success",
                    message: response.body.message
                  });
                  const authData = {};
                  Object.keys(response.body).forEach(v => {
                    if (v === "message" || v === "success") {
                      return;
                    }
                    authData[v] = response.body[v];
                  });
                  window.localStorage.setItem(
                    "authData",
                    JSON.stringify(authData)
                  );
                  this.$router.push("/home");
                } else {
                  this.$message({
                    type: "error",
                    message: response.body.message
                  });
                }
              },
              response => {
                // error callback
                this.$message.error({
                  message: "出现错误"
                });
              }
            );
          }
        });
      }
    }
  };

</script>

<style lang="less">
  .login-bg {
    // background: #d2ecfc;
    background: radial-gradient(#d2ecfc, white);
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    .el-tabs__nav {
      width: 100% !important;
      display: flex;
      .el-tabs__item {
        flex: 1;
        text-align: center;
      }
    }
    .el-tabs__content {
      padding: 30px 15px;
    }
    .login-wrap {
      border-radius: 5px;
      width: 400px;
      margin: 10% auto;
    }
    .t-center {
      text-align: center;
    }
  }

</style>
