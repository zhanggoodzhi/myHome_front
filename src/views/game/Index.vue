<template>
  <div>
    <div class="horse-wrap">
      <el-carousel trigger="click">
        <el-carousel-item class="box" v-for="(item,index) in horseLamp" :key="index">
          <img class="horse-img" :src="item.imgUrl" alt="" @click="jump(item.href)">
          <h3 class="text" @click="jump(item.href)">{{item.text}}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row type="flex" class="rank-wrap" justify="space-between">
      <el-col :span="11">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>新游期待榜</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="jump('http://top.17173.com/list-1-0-0-0-0-0-0-0-0-0-1.html')">更多>></el-button>
          </div>
          <el-collapse accordion>
            <el-collapse-item class="rank-item" v-for="(item,index) in rank.newRank" :key="index">
              <template slot="title">
                <span class="index">{{index + 1}}</span>
                <span>{{item.name}}</span>
              </template>
              <div class="c-content">
                <div class="img-wrap">
                  <img :src="item.imgUrl" alt="">
                </div>
                <div class="info">
                  <p>{{item.updateTime}}</p>
                  <p>
                    <a target="_blank" :href="item.infoUrl">资料</a>
                    <a target="_blank" class="official" :href="item.officialUrl">官网</a>
                  </p>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col :span="11">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>热门游戏榜</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="jump('http://top.17173.com/list-2-0-0-0-0-0-0-0-0-0-1.html')">更多>></el-button>
          </div>
          <el-collapse accordion>
            <el-collapse-item class="rank-item" v-for="(item,index) in rank.hotRank" :key="index">
              <template slot="title">
                <span class="index">{{index + 1}}</span>
                <span>{{item.name}}</span>
              </template>
              <div class="c-content">
                <div class="img-wrap">
                  <img :src="item.imgUrl" alt="">
                </div>
                <div class="info">
                  <p>{{item.updateTime}}</p>
                  <p>
                    <a :href="item.infoUrl">资料</a>
                    <a class="official" :href="item.officialUrl">官网</a>
                  </p>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import moment from "moment";
import { ceshi } from "components/ceshi";
var a=ceshi();
export default {
  data() {
    return {
      rank: [],
      horseLamp: []
    };
  },
  created() {
    this.getGameRank();
    this.getHorseLamp();
  },
  methods: {
    getHorseLamp() {
      this.$http.get("api/games/horseLamp").then(response => {
        this.horseLamp = response.body;
      });
    },
    getGameRank() {
      this.$http.get("api/games/rank").then(response => {
        this.rank = response.body;
      });
    },
    jump(href) {
      console.log("111");
      window.open(href);
    }
  }
};
</script>
<style lang="less" scoped>
.horse-wrap {
  padding: 0 100px;
  text-align: center;
  background: #eee;
  .box {
    .horse-img {
      cursor: pointer;
      width: 690px;
      height: auto;
    }
    .text {
      cursor: pointer;
      position: absolute;
      bottom: 0;
      left: calc(~"50% - 345px");
      padding-left: 10px;
      color: white;
    }
    &:hover {
      .text {
        color: #ff4e00;
      }
    }
  }
}

.rank-wrap {
  margin-top: 20px;
  .el-collapse-item__header::after {
    content: "1";
    display: inline;
  }
  .rank-item {
    .index {
      display: inline-block;
      width: 50px;
      font-size: 16px;
      color: #e6a23c;
    }
  }
}
.c-content {
  display: flex;
  .img-wrap {
    flex: none;
  }
  .info {
    padding: 20px;
    margin-left: 10%;
    flex: 1;
    .official {
      margin-left: 46px;
    }
  }
}
</style>
