<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" >
      <template v-slot:left>
        <van-icon name="cross" color="#fff" @click="$router.back()"></van-icon>
      </template>
    </van-nav-bar>
    <!-- /导航栏 -->
    <!-- 登陆表单 -->
    <van-form ref="loginForm" @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        type="number"
        maxlength="11"
        :rules="userFormRules.mobile"
      >
        <template v-slot:left-icon>
          <i class="toutiao toutiao-shouji"></i>
        </template>
      </van-field>

      <van-field
        v-model="user.code"
        name="code"
        placeholder="密码"
        :rules="userFormRules.code"
        type="number"
        maxlength="11"
      >
        <template v-slot:left-icon>
          <i class="toutiao toutiao-yanzhengma"></i>
        </template>
        <template #button>
          <!-- 倒计时 -->
          <van-count-down
            v-if="isShowCountDown"
            :time="1000 * 5"
            format="ss s"
            @finish="isShowCountDown = false"
          />
          <van-button
            v-else
            @click="onsendSms"
            class="send-sms-btn"
            round
            size="small"
            type="default"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="primary" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <!-- /登陆表单 -->
  </div>
</template>

<script>
import { login, sendSms } from '../../api/user'
export default {
  name: 'LoginIndex',
  data() {
    return {
      user: {
        mobile: '13611111111',
        code: '246810'
      },
      userFormRules: {
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' }
        ],
        code: [{ required: true, message: '验证码', trigger: 'blur' }]
      },
      isShowCountDown: false
    }
  },
  methods: {
    async onSubmit() {
      const user = this.user
      // 在组件中必须通过 this，$toast
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      // 3 提交请求
      try {
        const { data } = await login(user)
        this.$store.commit('setUser', data.data)
        console.log('登陆成功', data)
        this.$toast.success('login success')
        // 直接back不严谨
        this.$router.back()
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('手机好或验证码错误')
          console.log('手机好或验证码错误')
        } else {
          console.log('登陆失败', err)
          this.$toast.fail('登陆失败')
        }
      }
    },
    async onsendSms() {
      // 1 验证手机号
      try {
        await this.$refs.loginForm.validate('mobile')
        console.log('验证通过')
      } catch (error) {
        return console.log('验证失败', error)
      }
      // 2 通过验证显示倒计时
      this.isShowCountDown = true
      // 3 发送请求
      try {
        await sendSms(this.sendSms(this.user.mobile))
        this.$toast('发送成功')
      } catch (error) {
        // 发送失败关闭倒计时
        this.isShowCountDown = false
        this.$toast('发送失败')
        if (error.response.status === 429) {
          this.$toast('发送太频繁')
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 152px;
    height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666666;
    line-height: 46px;
  }
  .login-btn-wrap {
    padding: 53px 33px;
  }
  .login-btn {
    background-color: #6db4fb;
    border-radius: 10px;
    border: none;
  }
}
</style>
