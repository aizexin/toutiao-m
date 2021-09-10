<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- /导航栏 -->
    <!-- 登陆表单 -->
    <van-form @submit="onSubmit">
      <van-field
        name="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      >
        <template v-slot:left-icon>
          <i class="toutiao toutiao-shouji"></i>
        </template>
      </van-field>
      <van-field
        type="password"
        name="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      >
        <template v-slot:left-icon>
          <i class="toutiao toutiao-yanzhengma"></i>
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button block type="primary" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <!-- /登陆表单 -->
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data() {
    return {}
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 37px;
  }
}
</style>
