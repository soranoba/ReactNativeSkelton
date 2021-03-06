// web/webpack.config.js

const path = require('path');
const webpack = require('webpack');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

const appDirectory = path.resolve(__dirname, './');

// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// 'node_module'.
const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-navigation'),
    path.resolve(appDirectory, 'node_modules/react-native-tab-view'),
    path.resolve(appDirectory, 'node_modules/react-native-paper'),
    path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
    path.resolve(appDirectory, 'node_modules/react-native-safe-area-view'),
    path.resolve(appDirectory, 'node_modules/react-native-platform-touchable'),
    path.resolve(appDirectory, 'node_modules/native-base-shoutem-theme'),
    path.resolve(appDirectory, 'node_modules/react-native-keyboard-aware-scroll-view'),
    path.resolve(appDirectory, 'node_modules/react-native-easy-grid'),
    path.resolve(appDirectory, 'node_modules/react-native-drawer'),
    path.resolve(appDirectory, 'node_modules/native-base/node_modules/react-native-vector-icons'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      babelrc: true,
      presets: ["module:metro-react-native-babel-preset"],
    },
  },
};

// This is needed for loading css
const cssLoaderConfiguration = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

const ttfLoaderConfiguration = {
  test: /\.ttf$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: './fonts/[hash].[ext]',
      },
    },
  ],
  include: [
    path.resolve(appDirectory, './src/assets/fonts'),
    path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
  ],
};

module.exports = {
  // your web-specific entry file
  entry: path.resolve(appDirectory, 'src/index.js'),
  devtool: 'source-map',
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',

  // configures where the build ends up
  output: {
    filename: 'bundle.js',
    publicPath: '/assets/',
    path: path.resolve(appDirectory, './public/assets'),
  },
  serve: {
    content: path.resolve(appDirectory, './public'),
    devMiddleware: {
      publicPath: '/assets/'
    },
    add: (app, middleware, options) => {
      const historyOptions = {
        // ... see: https://github.com/bripkens/connect-history-api-fallback#options
      };
      app.use(convert(history(historyOptions)));
    },
  },

  module: {
    rules: [
      babelLoaderConfiguration,
      cssLoaderConfiguration,
      imageLoaderConfiguration,
      ttfLoaderConfiguration,
    ],
  },

  plugins: [
    // process.env.NODE_ENV === 'production' must be true for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: process.env.NODE_ENV === 'production' || true,
    }),
  ],

  resolve: {
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // '.web.js'.
    symlinks: false,
    extensions: ['.web.js', '.js'],
    alias: {
      'react-native': 'react-native-web',
      'react-router-native': 'react-router-dom',
    },
    modules: [
      'node_modules',
      path.resolve(appDirectory, 'src'),
    ],
  },
};
