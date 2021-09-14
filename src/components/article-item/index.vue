<template>
  <van-cell class="article-item">
    <template v-slot:title>
      <div>xxx {{ JSON.stringify(item) }}</div>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: 'articleItem',
  props: {
    item: {
      type: Object,
      reuqired: true
    }
  },
  watch: {},
  created() {
    console.log('====+' + this.item)
  }
}
</script>

<style lang="less" scoped>
.article-item {
}
</style>
