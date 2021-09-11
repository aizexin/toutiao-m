import { createStore } from 'vuex'

const TOKEN_KEY = 'TOUTIAO_USER'
export default createStore({
  state: {
    // 一个对象，存粗当前用户登陆信息 ， token数据
    user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了防止晒行丢失， 需要吧数据放在本地
      window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
