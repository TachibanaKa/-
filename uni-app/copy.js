
//uniapp的h5端点击复制
//data为复制的内容
copy(data) {
  let url = data;
  let oInput = document.createElement('input');
  oInput.value = url;
  document.body.appendChild(oInput);
  oInput.select(); // 选择对象;
  document.execCommand("Copy"); // 执行浏览器复制命令
  // 复制成功提示;
  uni.showToast({
    title: '复制成功',
    icon: 'none',
    duration: 2000
  });
  oInput.remove()
},