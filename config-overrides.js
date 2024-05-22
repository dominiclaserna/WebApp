const { override, overrideDevServer } = require('customize-cra');

const devServerConfig = () => config => {
  config.allowedHosts = ['your-desired-hostname'];
  return config;
};

module.exports = {
  webpack: override(),
  devServer: overrideDevServer(devServerConfig())
};
