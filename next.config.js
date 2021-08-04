const path = require('path');

module.exports = {
  assetPrefix: '',
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|eot|ttf|woff|woff2)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/asset/',
            outputPath: 'asset/',
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });

    // Important: return the modified config
    return config;
  },
};
