import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//
import './styles/index.less'
import Vant from 'vant'
// 加载vant全局样式
import 'vant/lib/index.css'
// 自动设置 REM 基准值
import 'amfe-flexible'
// 加载dayjs
import './utils/dayjs'

createApp(App).use(store).use(router).use(Vant).mount('#app')
