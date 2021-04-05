//  禁止浏览器的前进后退按钮
//1、
window.onpopstate = function(e) {
  history.pushState(null, null, document.URL)
};
//2、
window.addEventListener("popstate", (e) => {
  history.pushState(null, null, document.URL)
});