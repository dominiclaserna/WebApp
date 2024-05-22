const { override, overrideDevServer } = require('customize-cra');

const devServerConfig = () => config => {
  config.allowedHosts = ['https://webapp-1-ndgn.onrender.com'];
  return config;
};

module.exports = {
  webpack: override(),
  devServer: overrideDevServer(devServerConfig())
};
