<template>
  <div class="my-container">
    <!-- 已登陆头部 -->
    <div v-if="user" class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image
            class="avatar"
            round
            fit="cover"
            :src="userInfo.photo"
          />
          <span class="name">{{userInfo.name}}</span>
        </div>
        <div class="right">
          <van-button round size="mini">编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">{{userInfo.art_count}}</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">{{userInfo.follow_count}}</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">{{userInfo.fans_count}}</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">{{userInfo.like_count}}</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>
    <!-- /已登陆头部 -->
    <!-- 未登录头部 -->
    <div v-else class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-image" src="./mobile.png" />
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <!-- /未登录头部 -->
    <!-- 宫格导航 -->
    <van-grid class="grid-nav" :column-num="2" clickable>
      <van-grid-item class="grid-item" text="收藏">
        <template v-slot:icon>
          <i class="toutiao toutiao-shoucang"></i>
        </template>
      </van-grid-item>
      <van-grid-item class="grid-item" text="历史">
        <template v-slot:icon>
          <i class="toutiao toutiao-lishi"></i>
        </template>
      </van-grid-item>
    </van-grid>
    <!-- /宫格导航 -->

    <van-cell title="消息通知" is-link></van-cell>
    <van-cell title="小智同学" is-link></van-cell>
    <van-cell
      v-if="user"
      clickable
      @click="onlogout"
      class="logout-cell"
      title="退出登陆"
    ></van-cell>
    <!--/ 导航 -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '../../api/user'

export default {
  data() {
    return {
      userInfo: {}
    }
  },
  created() {
    // 如果用户登陆了， 就请求
    if (this.user) {
      this.loadUserInfo()
    }
  },
  components: {},
  computed: {
    // 把state里面的user映射过来
    ...mapState(['user'])
  },
  methods: {
    onlogout() {
      // 退出提示
      // 在组建中需要使用this.$dialog
      this.$dialog
        .confirm({
          title: '确认退出吗'
        })
        .then(() => {
          // on confirm
          // 确认退出： 清楚登陆状态， 容器和 本地存储的user
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          // on cancel
        })
    },
    async loadUserInfo() {
      try {
        const { data } = await getUserInfo()
        this.userInfo = data.data
        console.log(data)
      } catch (error) {
        this.$toast('获取数据失败，请稍后重试')
      }
    }
  }
}
</script>

<style scoped lang="less">
.my-container {
  .header {
    height: 361px;
    background: url('./banner.png');
    background-size: cover;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      .mobile-image {
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: white;
      }
    }
  }
  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      // 让height 把padding计算在其中
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          height: 132px;
          width: 132px;
          margin-right: 23px;
          border: 4px solid white;
        }
        .name {
          font-size: 30px;
          color: white;
        }
      }
    }
    .data-stats {
      display: flex;
      .data-item {
        height: 130px;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        .count {
          font-size: 36px;
        }
        .text {
          font-size: 23px;
          margin-top: 9px;
        }
      }
    }
  }
  .grid-nav {
    .grid-item {
      height: 141px;
      i.toutiao {
        font-size: 45px;
      }
      .toutiao-shoucang {
        color: #eb5253;
      }
      .toutiao-lishi {
        color: #ff9d1d;
      }

      span.text {
        font-size: 28px;
      }
    }
  }
  .logout-cell {
    color: #d86262;
    margin-top: 9px;
    text-align: center;
    font-size: 30px;
  }
}
</style>
