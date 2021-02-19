const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})

// 使用等比适配插件
module.exports = {
	publicPath: './',
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
	devServer: {
		"port": 8080,
		"disableHostCheck": true,
		proxy: {
			"/api": {
				target: "http://132.232.74.143:5612",
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					"^/api": ''
				}
			},
		}
	}
}