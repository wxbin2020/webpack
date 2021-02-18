## 1 webpack 4.0 + 配置
 1. npm init -y  生成package.json 配置文件
 2. 新建 src 目录  ，新建 index.js 文件
 3. 在文件夹 下新建 index.html 文件
 
 ## npm install webpack webapck-cli -g  安装全局webpack命令
 ## npm i react react-dom -S 安装 react 库 
 ## explorer . 是打开 项目下的文件夹
 ## 根目录 新建 webpack.config.js 配置文件
  1. 首先 src index.js 里面写代码 
``
 import React from 'react'
import { render } from 'react-dom'

render((
  <div> hello world </div>
), document.getElementById('app')) 

``
2. 使用webpack 命令打包文件 发现抱错，是没有解析 es6 文件转化 es5
3. npm install babel-loader @babel/core @babel/preset-env @babel/preset-react -D
4. 配置 webpack.config.js 文件下的 
 ```
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  }
}
```
## 文件夹的创建
 1. config目录 webpack 打包环境配置文件
 2. plubic目录 不打包的静态资源
 3. src 下的 assets 是打包的 静态资源

## npm install style-loader css-loader -D 本地安装 css-loader 处理器
``
 // css
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
  ``
## npm install url-loader file-loader -D    处理图片
 1. 处理 字体文件
 2. npm install bootstrap@4.0.0 -D

 ## less 处理器
  1. npm install less less-loader -D
  2. 兼容旧版的css 安装 sytlelint
  3. npm install stylelint stylelint-config-standard stylelint-webpack-plugin -D
  4. ``
      stylelint: [
        new StylelintPlugin({
          files: ['**/*.css', '**/*.less', '**/*.html', '**/*.scss']
        })
      ]
     ``
  5.   `` 在package.json 中可以不配置，如果配置 可以选择关闭 swith 开关
        "stylelint": {
            "extends": "stylelint-config-standard"
          }
  `` 
  6. 安装 npm install postcss-loader autoperfixer -D    兼容 ie 低版本 浏览器的css
  7. package.json文件配置 
   "browserslist": [
    "> 0.5%",
    "last 2 version",
    "not dead"
  ] 
  8. npm install eslint eslint-loader eslint-plugin-react -D  配置代码规范
  9. 配置 eslint 选项
    node node_modules/eslint/bin/eslint --init
    
