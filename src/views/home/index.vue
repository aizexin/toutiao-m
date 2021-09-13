<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar">
      <template v-slot:title>
        <van-button
          class="search-btn"
          type="primary"
          size="small"
          round
          icon="search"
          >搜索</van-button
        >
      </template>
    </van-nav-bar>
    <!-- /导航栏 -->

    <!-- 频道列表 -->
    <van-tabs class="chanel-tabs"
        animated swipeable swipe-threshold="4">
      <van-tab
        v-for="index in 5"
        :title="'标签 ' + index"
        :key="index"
      >
        内容 {{ index }}
      </van-tab>
      <template v-slot:nav-right>
        <div class="placeholder"></div>
        <div class="more">
          <i class="toutiao toutiao-gengduo"></i>
        </div>
      </template>
    </van-tabs>
    <!-- /频道列表 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  .search-btn {
    width: 555px;
    height: 64px;
    background-color: #5babfb;
    border: none;
    font-size: 28px;
  }
  // scoped 下只能影响一层，加上/deep/
  /deep/ .chanel-tabs {
    .van-tabs__wrap {
      height: 82px;
    }
    .van-tab {
      border-right: 1px solid #edeff3;
      min-width: 200px;
      font-size: 30px;
      color: #777;
    }
    .van-tabs__wrap {
      color: #333333;
    }
    .van-tabs__line {
      width: 31px;
      height: 6px;
      background-color: #3296fa;
      border-radius: 3px;
    }
    .more {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      right: 0;
      width: 66px;
      height: 82px;
      background-color: #fff;
      opacity: 0.9;
    }
    .placeholder {
      // 不参与flex布局计算
      flex-shrink: 0;
      width: 66px;
      height: 82px;
    }
  }
}
</style>
