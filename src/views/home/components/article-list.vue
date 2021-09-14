<template>
  <div class="article-list">
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      :success-text="refreshSuccessText"
      success-duration="1000"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        v-model:error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
        <article-item
          v-for="(item, index) in list"
          :key="index"
          :item="item"
        ></article-item>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticles } from '../../../api/article'
import articleItem from '@/components/article-item/index.vue'

export default {
  components: { articleItem },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      list: [],
      error: false,
      loading: false,
      finished: false,
      timestamp: null,
      // 控制下啦刷新的状态
      refreshing: false,
      refreshSuccessText: ''
    }
  },
  methods: {
    // 初始化或者滚动到底部
    async onLoad() {
      console.log('onload')
      // 1、异步更新数据
      try {
        const { data } = await getArticles({
          channel_id: this.channel.id,
          // 简单理解就是页码
          // 请求第一页：当前最新事件撮
          // 请求之后的数据，写，最后返回的时间戳
          timestamp: this.timestamp ? this.timestamp : Date.now(),
          with_top: this.timestamp ? 1 : 0
        })
        // 2、把请求结果房子啊list数组里
        const { results } = data.data
        this.$toast(data.message)
        // ...数组的展开操作符 把数组一个个拿出来
        this.list.push(...results)
        // 3、本次加载数据结束
        this.loading = false
        // 4、判断是否加载完成
        if (results.length) {
          // 更新获取下一页的时间戳
          this.timestamp = data.data.pre_timestamp
        } else {
          // 没有数据
          this.finished = true
        }
      } catch (error) {
        this.error = true
        // 请求失败loading关闭
        this.loading = false
      }
      console.log(this.list)
      console.log(this.list[1].title)
    },
    async onRefresh() {
      // 请求获取数据
      try {
        const { data } = await getArticles({
          channel_id: this.channel.id,
          // 简单理解就是页码
          // 请求第一页：当前最新事件撮
          // 请求之后的数据，写，最后返回的时间戳
          timestamp: Date.now(),
          with_top: 1
        })
        const { results } = data.data
        this.list.unshift(...results)
        this.refreshSuccessText = `跟新${results.length}条数据`
        this.refreshing = false
      } catch (error) {
        this.refreshing = false
        this.refreshSuccessText = '刷新失败'
        console.log('请求失败', error)
      }
    }
  }
}
</script>

<style scoped>
.article-list {
  /* vh视口单位 */
  height: 79vh;
  overflow-y: auto;
}
</style>
