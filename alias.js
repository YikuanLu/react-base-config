const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@pages': path.join(__dirname, 'src/pages/'),
      '@components': path.join(__dirname, 'src/components/')
    },
  },
}
