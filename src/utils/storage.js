// 封装本地存储操作

// 存储数据
export const setItem = (key, value) => {
  // 将数组、对象类型的数据转为json格式的字符串存储
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
// 获取数据
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    // 直接试图转换
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

// 删除数据
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}
