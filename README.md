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
在js、vue中都用scrollTop保持在底部，uni-app用pageScrollTo
例子：
[uni-app写法例子](https://github.com/TachibanaKa/day-day-up/uni-app/scrollToBottom.js)
[vue写法例子](https://github.com/TachibanaKa/day-day-up/vue/scrollToBottom.js)
