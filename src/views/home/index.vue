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
  </div>
</template>

<script setup lang="ts">
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
}
</style>
