const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

// 改变antd 默认配置
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(
    ['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}, 'styled-jsx/babel'],
    config,
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {"@primary-color": "#1DA57A"},
    javascriptEnabled: true,
  })(config, env);
  return config;
};