# 学习/工作记录

记录一下工作或者学习中遇到的问题

### 1、刷新页面vuex丢失
在使用vue和uni-app的时候都有这个问题。
解决方法：监听页面刷新，在页面刷新的时候把数据存进本地存储里，在创建vue实例的时候再把本地存储的数据放进vuex里。

例子：
[uni-app写法例子](https://github.com/TachibanaKa/day-day-up/blob/main/uni-app/saveVuexData.js)
[vue写法例子](https://github.com/TachibanaKa/day-day-up/blob/main/vue/saveVuexData.js)

参考文章：https://blog.csdn.net/guzhao593/article/details/81435342


### 2、滚动条一直保持在底部
在js、vue中都用scrollTop保持在底部，uni-app用pageScrollTo。
如果有图片需要加载，需要在img里加@load="scrollToBottom"
例子：
[uni-app写法例子](https://github.com/TachibanaKa/day-day-up/blob/main/uni-app/scrollToBottom.js)
[vue写法例子](https://github.com/TachibanaKa/day-day-up/blob/main/vue/scrollToBottom.js)

### 3、监听浏览器的按钮
监听浏览器刷新按钮，并在刷新时弹出confirm弹框。
例子：
[js写法例子](https://github.com/TachibanaKa/day-day-up/blob/main/js/refreshConfirm.js)

监听浏览器前进和后退按钮，并禁止多次后退前进。
例子：
[js写法例子](https://github.com/TachibanaKa/day-day-up/blob/main/js/noBack.js)

### 4、原生js格式化时间

把时间戳转换成可读格式
[js写法例子](https://github.com/TachibanaKa/day-day-up/blob/main/js/formatDate.js)

### 5、js的单例模式
用es6中的class写的一个简单的单例模式
[js写法例子](https://github.com/TachibanaKa/day-day-up/blob/main/js/singleton.js)

### 6、js的防抖节流
防抖和节流的实现
[js写法例子](https://github.com/TachibanaKa/day-day-up/blob/main/js/throttle&&debounce.js)

### 7、vue封装的组件中prop的默认值
如果props里有默认值为数组的，就要使用函数把数组包裹起来，否则会报错。
[vue写法例子](https://github.com/TachibanaKa/day-day-up/blob/main/vue/propsDefaultVal.js)

### 8、PC端的rem自适应布局
根据电脑的分辨率自适应布局
[js写法例子](https://github.com/TachibanaKa/day-day-up/blob/main/js/rem.js)

### 9、数组去重（包括对象）
数组元素是基本类型和引用类型的去重
[js写法例子](https://github.com/TachibanaKa/day-day-up/blob/main/js/arrUniq.js)

### 10、获取当天的0点和24点
格式为new Date()的默认格式
[js写法例子](https://github.com/TachibanaKa/day-day-up/blob/main/js/dateUtils.js)

### 11、uniapp的H5端点击复制
复制内容
[uniapp方法](https://github.com/TachibanaKa/day-day-up/blob/main/uni-app/copy.js)