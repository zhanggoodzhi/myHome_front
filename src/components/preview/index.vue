
<script>
// 引入本文件下除了index.vue的其他vue
const cache = {};
function importAll(r) {
  r.keys().forEach(key => {
    if (key !== "./index.vue") {
      cache[key] = r(key);
    }
  });
}

importAll(require.context("./", true, /\.vue$/));

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  render(createElement) {
    console.log(11, cache, `./view${this.data.type}.vue`);
    const el = cache[`./view${this.data.type}.vue`].default;
    return createElement(
      el,
      {
        props: {
          data: this.data
        }
      },
      this.$slots.default
    );
  }
};
</script>
<style lang="less" scoped>

</style>