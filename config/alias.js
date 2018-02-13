const path = require('path')

module.exports = {
  '@common': path.resolve(__dirname, '../src/common'),
  '@': path.resolve(__dirname, '../src/common/components'),
  '@features': path.resolve(__dirname, '../src/features'),
  // Support React Native Web
  // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
  'react-native': 'react-native-web'
}
