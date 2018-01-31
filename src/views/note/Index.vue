<template>
  <div>
    <div class="search-wrap">
      <el-input class="keyword" v-model="keyword" placeholder="请输入留言关键字"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="handleSearch()"></el-button>
      <el-button class="add" type="success" icon="el-icon-plus" @click="handleAdd()">新增留言</el-button>
    </div>
    <div class="table-wrap">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="标题">
        </el-table-column>
        <el-table-column prop="content" label="留言内容">
        </el-table-column>
        <el-table-column prop="date" label="更新日期">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="30%" @close="clearModal()">
      <el-form ref="form" :model="data" :rules="rules" label-width="100px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="data.title"></el-input>
        </el-form-item>
        <el-form-item label="留言内容" prop="content">
          <el-input v-model="data.content"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import moment from "moment";
import { createNamespacedHelpers } from "vuex";
import { ceshi } from "components/ceshi";
var a=ceshi();
const { mapMutations } = createNamespacedHelpers("noteBadge");
export default {
  data() {
    return {
      keyword: "",
      dialogTitle: "新增留言",
      dialogVisible: false,
      data: {
        title: "",
        content: ""
      },
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        content: [
          { required: true, message: "请输入留言内容", trigger: "blur" }
        ]
      },
      currentId: "",
      tableData: []
    };
  },
  created() {
    this.reload();
  },
  methods: {
    ...mapMutations(['add','init','reduce']),
    handleSearch() {
      this.reload();
    },
    handleAdd() {
      this.dialogVisible = true;
      this.dialogTitle = "新增留言";
    },
    handleEdit(row) {
      this.dialogTitle = "编辑留言";
      this.dialogVisible = true;
      setTimeout(()=>{
        this.data.title = row.title;
        this.data.content = row.content;
      },0);
      this.currentId = row._id;
    },
    handleDelete(row) {
      this.$confirm("确定要删除该留言吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http
          .post("api/deleteNote", {
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
              this.reduce();
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
      this.$http.get(`api/getNotes?keyword=${this.keyword}`).then(response => {
        this.tableData = response.body;
      });
    },
    save() {
      this.$refs.form.validate(result => {
        if (result) {
          // 验证通过,调用module里的setUserInfo方法
          const currentDate = moment().format("YYYY-MM-DD HH:mm:ss");
          const sendData = {
            ...this.data,
            date: currentDate
          };
          if (this.dialogTitle == "新增留言") {
            this.$http.post("api/addNote", sendData).then(
              response => {
                // get body data
                this.dialogVisible = false;
                this.keyword = "";
                this.$message({
                  type: "success",
                  message: response.body.message
                });
                this.reload();
                this.add();
              },
              response => {
                // error callback
                this.$message.error({
                  message: "出现错误"
                });
              }
            );
          } else {
            this.$http
              .post("api/updateNote", {
                ...sendData,
                id: this.currentId
              })
              .then(
                response => {
                  // get body data
                  this.dialogVisible = false;
                  this.keyword = "";
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
          }
        }
      });
    },
    clearModal() {
      this.$refs.form.resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
.keyword {
  width: 200px;
}

.search-wrap {
  .add {
    float: right;
  }
}

.table-wrap {
  margin-top: 20px;
}
</style>
