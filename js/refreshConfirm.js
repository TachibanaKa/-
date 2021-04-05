//  点击浏览器的刷新按钮会多一个confirm弹框
window.addEventListener("beforeunload", (e) => {
  e.returnValue = '';
  return false;
});