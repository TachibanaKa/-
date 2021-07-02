// PC端rem自适应布局
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