<template>
  <div>
    <div class="search-wrap">
      <el-input class="keyword" v-model="keyword" placeholder="请输入日志关键字"></el-input>
      <el-button type="primary" icon="el-icon-search"></el-button>
      <el-button class="add" type="success" icon="el-icon-plus" @click="handleAdd()">新增日志</el-button>
    </div>
    <div class="table-wrap">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="标题">
        </el-table-column>
        <el-table-column prop="content" label="日志内容">
        </el-table-column>
        <el-table-column prop="date" label="更新日期">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
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
        <el-form-item label="日志内容" prop="content">
          <el-input v-model="data.content"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: "",
      dialogTitle: "新增日志",
      dialogVisible: false,
      data: {
        title: "",
        content: ""
      },
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        content: [{ required: true, message: "请输入日志内容", trigger: "blur" }]
      },
      tableData: [
        {
          date: "2016-05-02",
          title: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          title: "王小虎",
          content: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          title: "王小虎",
          content: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          title: "王小虎",
          content: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleAdd() {
      this.dialogTitle='新增日志';
      this.dialogVisible=true;
    },
    handleEdit(row) {
      console.log(row);
      this.dialogTitle='编辑日志';
      this.dialogVisible=true;
    },
    handleDelete(row) {
      console.log(row);
    },
    clearModal(){
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
