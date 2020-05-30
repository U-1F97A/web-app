/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/
require('dotenv').config();
const { resolve } = require('path');
const nextConfig = {
  webpack: (config) => {
    // src ディレクトリをエイリアスのルートに設定
    config.resolve.alias['~'] = resolve(__dirname, 'src');
    return config;
  },
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    PROJECT_ID: process.env.PROJECT_ID,
    AUTH_URL: process.env.AUTH_URL,
    TOKEN_URL: process.env.TOKEN_URL,
  },
};

module.exports = nextConfig;
