<template>
  <div>
    <h3>题型1</h3>
    <p>标题: {{data.title}}</p>
    <p>问题：{{data.question}}</p>
    <p>内容：{{data.content}}</p>
    </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>

</style>