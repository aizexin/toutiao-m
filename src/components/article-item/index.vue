<template>
  <van-cell class="article-item">
    <!-- 标题 -->
    <template v-slot:title>
      <div class="title van-multi-ellipsis--l2">{{ item.title }}</div>
    </template>
    <!-- /标题 -->
    <template v-slot:label>
      <div v-if="item.cover.type === 3" class="cover-wrap">
        <div
          class="cover-item"
          v-for="(image, index) in item.cover.images"
          :key="index"
        >
          <van-image
            class="cover-item-img"
            fit="cover"
            :src="item.cover.images[0]"
          />
        </div>
      </div>
      <div class="label-info-wrap">
        <span>{{ item.aut_name }}</span>
        <span>{{ item.comm_count }}评论</span>
        <span>{{ relativeTime }}</span>
      </div>
    </template>
    <template v-if="item.cover.type === 1" v-slot:value>
      <van-image class="right-cover" fit="cover" :src="item.cover.images[0]" />
    </template>
  </van-cell>
</template>

<script>
import { filtertime } from '../../utils/dayjs'
export default {
  name: 'articleItem',
  props: {
    item: {
      type: Object,
      reuqired: true
    }
  },
  computed: {
    relativeTime() {
      return filtertime(this.item.pubdate)
    }
  },
  watch: {},
  created() {}
}
</script>

<style lang="less" scoped>
.article-item {
  .title {
    color: #3a3a3a;
    font-size: 32px;
  }
  .van-cell__value {
    flex: unset;
    width: 232px;
    height: 146px;
  }
  .label-info-wrap span {
    font-size: 23px;
    color: #b4b4b4;
    margin-right: 25px;
  }
  //   三个图片的样式
  .cover-wrap {
    display: flex;
    padding: 30px 0px;
    .cover-item {
      flex: 1;
      height: 146px;
      // &表示父元素本身
      &:not(:last-child) {
        padding-right: 4px;
      }
      .cover-item-img {
        width: 100%;
        height: 146px;
      }
    }
  }
  .right-cover {
  }
}
</style>
