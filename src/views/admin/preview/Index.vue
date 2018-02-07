<template>
   <div>
       <h4>试卷预览</h4>
       <previewComponent :data="d1">
            <!-- <p>答案：{{d1.answer}}</p> -->
       </previewComponent>
        <previewComponent :data="d2">
            <p>答案：{{d2.answer}}</p>
       </previewComponent>
   </div>
</template>
<script>
import previewComponent from "components/preview/index";
export default {
  components: {
    previewComponent
  },
  data() {
    return {
      d1: {
        type: 1,
        title: `请回答以下问题，每小题2分`,
        question: `what's your name?`,
        content: `baby is crying!`,
        answer: "正确答案是：A"
      },
      d2: {
        type: 2,
        title: `请回答以下问题，每小题7分`,
        question: `what's your father?`,
        content: `oh!`,
        answer: "正确答案是：C"
      }
    };
  }
};
</script>
<style lang="less" scoped>

</style>