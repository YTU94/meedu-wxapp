var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API: '"https://1o1.cc"',
  client_id: '"2"',
  client_secret: '"G8hmzjkkJBl9lPwF45pBgO1AJSM5XolpbPNFR9k7"'
})
