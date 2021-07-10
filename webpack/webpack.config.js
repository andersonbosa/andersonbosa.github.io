
/* Requires & Plugins & Addons */

const webpack = require('webpack')
const HtmlsWebpackPlugin = require('htmls-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

/* Configurations */
const isProduction = process.env.NODE_ENV === 'production'
const stylesHandler = 'style-loader'

/**
 * Returns the requested directory from the root directory. *
 *
 * @param {string} pathname
 * @return {string} path
 */
function getPathFromRoot (pathname) {
  return path.resolve(__dirname, '..', pathname)
}

/**
 * @typedef ModuleRule
 * @property {Regex} test
 * @property {string} loader
 * @property {string} [exclude]
 * @property {string[]} [use]
 * @property {?} type
 */

/**
 * @type {ModuleRule[]}
 */
const commonRules = [
  {
    test: /\.(js|jsx)$/i,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.css$/i,
    use: [stylesHandler, 'css-loader']
  },
  {
    test: /\.s[ac]ss$/i,
    use: [stylesHandler, 'css-loader', 'sass-loader']
  },
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource'
  }
]

const vueRules = [
  {
    test: /\.vue$/,
    use: ['vue-loader']
  }
]

const webpackBundleConfig = {
  mode: isProduction ? 'production' : 'development',

  devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',

  entry: getPathFromRoot('src/main.js'),

  output: {
    path: getPathFromRoot('docs/'),
    filename: 'bundle.js'
    // filename: '[name].[hash:6].bundle.js',
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlsWebpackPlugin({
      htmls: [
        {
          src: getPathFromRoot('public/template.ejs'), /* template path */
          filename: 'index.html' /* output filename, */
        }
      ]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true
    })
  ],

  resolve: {
    alias: {
      '@': getPathFromRoot('src')
    }
  },

  module: {
    rules: [
      ...commonRules,
      ...vueRules
    ]
  }
}

module.exports = () => {
  if (isProduction) {
    /* setup to prd */
  } else {
    webpackBundleConfig.devServer = {
      /* https://webpack.js.org/configuration/dev-server/ */
      contentBase: getPathFromRoot('docs'),
      host: 'localhost',
      port: 8080,
      open: true,
      compress: false,
      hot: true
    }
  }
  return webpackBundleConfig
}
