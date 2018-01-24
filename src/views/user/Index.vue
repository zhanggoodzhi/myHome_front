<template>
  <div>
    <div class="table-wrap">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="account" label="用户名">
        </el-table-column>
        <el-table-column prop="alias" label="昵称">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button v-show="scope.row.account!=='admin'" size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  created(){
    this.reload();
  },
  methods: {
    handleDelete(row) {
      this.$confirm("确定要删除该用户吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http
          .post("api/deleteUser", {
            id: row._id
          })
          .then(
            response => {
              // get body data
              this.$message({
                type: "success",
                message: response.body.message
              });
              this.reload();
            },
            response => {
              // error callback
              this.$message.error({
                message: "出现错误"
              });
            }
          );
      });
    },
    reload() {
      this.$http.get(`api/getUsers`).then(response => {
        this.tableData = response.body;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.table-wrap {
  margin-top: 20px;
}
</style>
