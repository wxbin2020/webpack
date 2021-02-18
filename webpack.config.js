const path = require('path')

// 兼容旧版的 css 不需要 可以选择关闭
const StylelintPlugin = require('stylelint-webpack-plugin')
const STYLELINT_SWITCH = false
const ESLINT_SWITCH = true
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // es6 jsx
      { 
        test: /\.jsx?/i,
        use: [
          {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          },
        },
        ...ESLINT_SWITCH ? [{
          loader: 'eslint-loader',
          // options: {
          //   outputReport: {
          //     filePath: 'eslint_report.html',
          //     formatter: require('eslint/lib/formatters/html')
          //   }
          // }
        }] : []
      ]
      },
      // css
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            // options: {
            //   plugins: [
            //     require('autoprefixer')
            //   ]
            // }
          }
        ]
      },
      // 图片
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'imgs/',
            publicPath: 'build/imgs',
            limit: 10 * 1024            // 10kb
          }
        }
      },
      // 处理字体
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'fonts',
            publicPath: 'build/fonts',
            limit: 10 * 1024   
          }
        }
      },
      // less 样式处理
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
    ]
  },
  // devtool: 'source-map'
  plugins: [
    ...STYLELINT_SWITCH ? [new StylelintPlugin({
      files: ['**/*.css', '**/*.less', '**/*.html', '**/*.scss']
    })
  ]: [] ] 
}