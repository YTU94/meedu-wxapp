var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API: '"https://58hualong.com"',
  client_id: '"4"',
  client_secret: '"ySVIM8phjzVO5XdEZWNXyMHwjo5n23MmpVfi2Xs9"'
})
