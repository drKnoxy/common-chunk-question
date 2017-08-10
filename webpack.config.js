const webpack = require('webpack');

module.exports = () => ({
  entry: {
    index: './index.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: `${__dirname}/build`
  },
  devtool: 'source-map',
  plugins: [
    // Common modules
    new webpack.optimize.CommonsChunkPlugin({
      name: 'index',
      async: 'common',
      minChunks: 2
    }),
    
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity, // Don't allow any additions to this bundle
    }),

    // Minification
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     screw_ie8: true,
    //     warnings: false
    //   },
    //   sourceMap: false
    // }),
  ]
});
