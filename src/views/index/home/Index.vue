<template>
    <ul>
        <li class="item" v-for="(item,index) in logs" :key="index">
            <el-tag type="warning" class="date-tag">{{item.date}}</el-tag>
            <el-tag class="text-tag">{{item.text}}</el-tag>
        </li>
    </ul>
</template>
<script>
export default {
  data() {
    return {
      logs: ""
    };
  },
  created() {
    this.$http.get(`api/getLogs`).then(response => {
      this.logs = response.body.reverse();
    });
  }
};
</script>
<style lang="less" scoped>
   .item{
       padding: 5px;
       .date-tag{
           border-top-right-radius:0; 
           border-bottom-right-radius:0; 
       }
       .text-tag{
           border-top-left-radius:0; 
           border-bottom-left-radius:0; 
           margin-left:-5px; 
           max-width: 1000px;
           text-overflow: ellipsis;
           overflow: hidden;
           white-space: nowrap;
           vertical-align: bottom;
       }
   }
</style>