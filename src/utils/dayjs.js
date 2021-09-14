import dayjs from 'dayjs'
// dayjs 默认英文， 我们配置为中文
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('zh-cn')
// 配置使用相对时间插件
dayjs.extend(relativeTime)

// 定一个全局过滤器，然后就可以在任何组件模版中使用了
// 参数1，过滤器名称，不重复即可
// 参数2，过滤函数
// 使用方法 {{ 表达式｜ 过滤器名称}}
export function filtertime(value) {
  return dayjs().to(dayjs(value))
}
