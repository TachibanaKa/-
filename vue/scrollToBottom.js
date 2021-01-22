//每次页面渲染完之后滚动条在最底部
//1、在updated生命周期调用，每次div发生改变时都会再次回到底部
//2、再created生命周期调用，只会在一开始会到底部，数据发生改变不会有变动
//3、使用this.$nextTick是为了在元素渲染完之后再回到底部。
function scrollToBottom(){
  this.$nextTick(function(){
  let div = document.getElementById('dialogue_box');  //  回到底部的元素
  div.scrollTop = div.scrollHeight;
  })
 }
