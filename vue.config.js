const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/app/'
    : '/',
  outputDir: path.resolve(__dirname, './docs'),
  transpileDependencies: [
    'vuetify'
  ]
}
