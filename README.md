# vue3-family

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
### 移动端适配

- 在 main.js 文件中引入：

```js
import 'amfe-flexible/index.js'
```
- 修改配置文件 `vue.config.js` ，新增配置

```js
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: {
            "autoprefixer": {
              "overrideBrowserslist": [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8"
              ]
            },
            "postcss-pxtorem": {
              "rootValue": 37.5,
              "propList": [
                "*"
              ]
            }
          },
        }
      }
    }
  }

```

参考资料：

- [vant实现移动端的适配](https://blog.csdn.net/qq_39376013/article/details/103567306)