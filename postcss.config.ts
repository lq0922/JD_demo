module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 根据设计稿的基准字号调整
      propList: ['*'], // 允许转换的属性列表，'*' 表示所有属性
      minPixelValue: 2, // 设置要替换的最小像素值
    },
    autoprefixer: {}, // 自动添加浏览器前缀
  },
};