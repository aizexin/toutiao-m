//  postcss 配置文件
module.exports = {
    plugins: {
        // 用来生成浏览器css规则前缀
        'autoprefixer': {
            browsers: ['Android >= 4.0', 'iOS >= 8']
        },
        'postcss-pxtorem': {
            // 转换的根元素基准值  375 / 10
            rootValue({ file }) {
                console.log('处理css文件：', file)
                return file.indexOf('vant') !== -1 ? 37.5 : 75
            },
            propList: ['*']
        }
    }
}