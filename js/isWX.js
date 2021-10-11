/*
  判断当前运行环境 
  navigator为Window对象的一个属性，指向了一个包含浏览器相关信息的对象。navigatot中包含了一些常用到的属性，如   
  navigator.appVersion 浏览器的版本号 
  navigator.appName 浏览器的名称 
  navigator.language 浏览器使用的语言 
  navigator.platform 浏览器使用的平台 
  navigator.userAgent 浏览器的user-agent信息
*/
//参考地址:https://blog.csdn.net/zhangchen124/article/details/104871170
function isWX() {
  //  判断运行的环境
  //  MicroMessenger（微信内置浏览器）、iPhone、iPad、iPod、iOS；msie（IE）、firefox（火狐）、chrome（谷歌）
  let isWX = navigator.userAgent.includes('MicroMessenger')
  return isWX
}