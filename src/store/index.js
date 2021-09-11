import { createStore } from 'vuex'
import { getItem, setItem } from '../utils/storage'

const TOKEN_KEY = 'TOUTIAO_USER'
export default createStore({
  state: {
    // 一个对象，存粗当前用户登陆信息 ， token数据
    user: getItem(TOKEN_KEY)
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了防止晒行丢失， 需要吧数据放在本地
      setItem(TOKEN_KEY, state.user)
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
