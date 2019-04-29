const webpack = require('webpack') // eslint-disable-line

module.exports = {

  runtimeCompiler: true,

  configureWebpack: {

    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/questionnaire/'
    : '/',
}
