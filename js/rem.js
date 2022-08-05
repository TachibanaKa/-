// PC端rem自适应布局（第一种）
;(function(win) {
  var tid;
  function refreshRem() {
    let designSize = 1366; // 设计图尺寸
    let html = document.documentElement;
    let wW = html.clientWidth;// 窗口宽度
          let rem = wW * 100 / designSize;
          rem = rem < 80 ? 80 : rem   //控制适配的最小px
          rem = rem > 120 ? 120 : rem //控制适配的最大px
          document.documentElement.style.fontSize = rem + 'px';
          console.log('当前的fontSize：',document.documentElement.style.fontSize)
    }

win.addEventListener('resize', function() {
  clearTimeout(tid);
  tid = setTimeout(refreshRem, 300);
}, false);
win.addEventListener('pageshow', function(e) {
  if (e.persisted) {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }
}, false);

refreshRem();

})(window);

// PC端rem自适应布局（第二种）

// rem等比适配配置文件
// 基准大小
const baseSize = 16
// 设置 rem 函数
function setRem() {
  // 当前页面屏幕分辨率相对于 1280宽的缩放比例，可根据自己需要修改
  let scale = document.documentElement.clientWidth / 1920
  scale = scale < 0.625 ? 0.625 : scale
  // 设置页面根节点字体大小（“Math.min(scale, 3)” 指最高放大比例为3，可根据实际业务需求调整）
  document.documentElement.style.fontSize = `${baseSize * Math.min(scale, 1)}px`
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = () => {
  setRem()
}
