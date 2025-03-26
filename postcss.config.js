module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-pxtorem': {
            rootValue: 16, // 基准值，1rem = 16px
            propList: ['*'], // 转换所有属性
            selectorBlackList: [], // 不忽略任何选择器
            minPixelValue: 1 // 转换大于等于 1px 的值
        }
    }
};
