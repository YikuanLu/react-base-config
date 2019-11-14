const { override, addWebpackAlias } = require('customize-cra');
const alias = require('./alias');

module.exports = override(
  addWebpackAlias(alias.resolve.alias),
);
