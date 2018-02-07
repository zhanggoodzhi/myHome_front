<template>
  <el-container class="container">
    <el-header height="60px" class="header">
      <div class="left">
        <a class="img-wrap">
          后台管理系统
        </a>
      </div>
      <div class="right">
        <div class="info-wrap">
          <span class="name">
            欢迎： {{this.alias}}
          </span>
          <span class="logout" @click="onLogout">退出</span>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside class="menu-wrap" width="200px">
        <el-menu :router="true" :default-active="$route.path" class="menu">
          <el-menu-item index="/home">
            <i class="el-icon-info"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/setting">
            <i class="el-icon-setting"></i>
            <span slot="title">设置</span>
          </el-menu-item>
           <el-menu-item index="/preview">
            <i class="el-icon-setting"></i>
            <span slot="title">试卷预览</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <transition name="slide" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
    <el-footer class="footer" height="25px">
      <span class="copyright">小志&nbsp;&nbsp;&nbsp;&nbsp;2018</span>
    </el-footer>
  </el-container>
</template>
<script>
import { getAuthData } from "components/utils";

export default {
  data() {
    return {
      alias: ""
    };
  },
  created() {
    const authDataString = localStorage.getItem("authData");
    if (!authDataString) {
      this.$router.replace("/login");
    } else {
      this.alias = JSON.parse(authDataString).alias;
    }
  },
  methods: {
    onLogout() {
      localStorage.setItem("authData", "");
      this.$router.replace("/login");
    }
  },
  computed: {
    isAdmin() {
      return getAuthData() && getAuthData().ifAdmin;
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  height: 100vh;
}

.menu-wrap {
  border-right: 1px solid #e6e6e6;
  .menu {
    border-right: 0;
    height: 100%;
  }
}

.header {
  border: 0;
  background: #409eff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  .left {
    .img-wrap {
      margin-left: 22px;
      display: inline-block;
      .gicon {
        width: 40px;
        transition: all 0.2s;
      }
    }
  }
  .right {
    flex: 1;
    text-align: right;
    .info-wrap {
      font-size: 12px;
      .name {
        color: white;
        margin-right: 10px;
      }
      .logout {
        color: white;
        cursor: pointer;
        &:hover {
          color: #f56c6c;
        }
      }
    }
  }
}

.footer {
  background: #909399;
  display: flex;
  justify-content: center;
  align-items: center;
  .copyright {
    font-size: 14px;
    color: white;
    font-weight: bold;
  }
}

main {
  display: block;
}
</style>
