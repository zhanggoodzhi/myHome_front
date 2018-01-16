<template>
  <div id="app">
    <el-container>
      <el-header height="60px" class="header">
        <div class="left">
          <h1>Github:</h1>
        </div>
        <div class="right">
          <a href="https://github.com/zhanggoodzhi/myHome" class="img-wrap">
            <img class="gicon" src="/static/github.png" alt="">
          </a>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :router="true" default-active="/" class="el-menu-vertical-demo">
            <el-menu-item index="/">
              <i class="el-icon-info"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/note">
              <i class="el-icon-setting"></i>
              <span slot="title">日志管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    jump:function(path){
      console.log('334343');
      this.$router.push(path);
    }
  }
};
</script>

<style lang="less" scope>
@keyframes run {
  from {
    margin-left: 0;
    transform: rotateZ(0deg);
  }
  to {
    margin-left: 90%;
    transform: rotateZ(1800deg);
  }
}

.header {
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  .left {
    width: 90px;
    flex: none;
  }
  .right {
    flex: 1;
    .img-wrap {
      display: inline-block;
      animation: run 5s infinite linear alternate;
      .gicon {
        width: 50px;
        transition: all 0.2s;
        &:hover {
          transform: scale(1.2, 1.2);
        }
      }
    }
  }
}
</style>
