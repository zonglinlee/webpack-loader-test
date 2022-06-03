# loader-test

```shell
cd ./comment-loader
# 链接当前包(comment-loader)至全局 node_modules
npm link
cd ../
# 在项目目录下引用 comment-loader
npm link comment-loader
node --inspect-brk=9229  ./node_modules/webpack/bin/webpack.js
```

打开 Chrome，输入 `chrome://inspect`,进行调试。
或者直接在 webstorm 中 配置 `javascript files: node_modules\webpack\bin\webpack.js`进行调试

- [node debug](http://www.ruanyifeng.com/blog/2018/03/node-debugger.html)
