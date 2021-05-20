/* 防抖和节流的区别
  场景：滚动页面的滚动条就会触发某事件，现在假设页面滚动10s，防抖和节流我们都以1s为触发点。
  防抖：在页面滚动10s完毕后，延迟1s再触发事件，只触发了`1`次事件。
  节流：在页面滚动10s的期间，每隔1s触发一次事件，一共触发了`10`次事件。
*/
/* 防抖思路
  目的：一段时间内，某事件的多次触发只会执行一次触发（最后一次的触发）。
  1、延迟触发事件，需要计时器setTimeout。
  2、只触发一次事件，只需要一个有效的计时器。
  3、初始化一次存放计时器的变量timeout（只执行一次）。
  4、每执行一次事件都把计时器无效化。
  5、最后一次事件的计时器有效化。
    先执行计时器无效化的代码，再执行计时器绑定的代码，触发的最后一次事件时绑定的计时器没有被无效化，那么就会执行最后一次绑定的事件。
*/
/* 防抖(1) 
  借助全局变量
  timeout = null执行一次
  debounce多次执行
  timeout具体是什么值不重要，重要的是它的值是否为null
*/

let timeout = null;
function debounce(fn, wait) {
  if (timeout !== null) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(fn, wait);
}
for (let i = 0; i < 100; i++) {
  debounce(() => {
    console.log(11);
  }, 2000);
}

/* 防抖（2） 
  借助闭包
  test = debounce会让timeout = null执行一次
  for循环里的test()会多次执行debounce里return的闭包函数
*/

function debounce(fn, wait) {
  let timeout = null;
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, wait);
  };
}
let test = debounce(() => {
  console.log(11);
}, 1000);
for (let i = 0; i < 100; i++) {
  test();
}
/* 节流思路
  目的：一段时间内，某事件的多次触发，有规律地执行触发，一段时间内不止执行一次。
  1、有规律地控制事件发生的频率，可以用时间戳。
  2、事件多次触发时，这一次触发时的时间戳要比上一次触发时的时间戳大于设置的时间毫秒，否则不触发。
  3、初始化一个存放时间戳的变量timeStamp，timeStamp的第一次赋值为第一次触发事件的时间戳。
  4、每一次触发事件时，都获取当前时间的时间戳，用当前时间戳减去timeStamp。
  5、如果差值大于500，则执行事件，并把这次执行事件的时间戳重新赋值给timeStamp；如果差值小于500，则退出函数。（500为事件发生的频率）
*/
/* 节流 */
function throttle(fn, wait) {
  let timeStamp = new Date().getTime();
  return function () {
    let time = new Date().getTime();
    if (time - timeStamp > wait) {
      fn();
      timeStamp = time;
      return;
    }
    return;
  };
}
let test = throttle(() => {
  console.log("test");
}, 1);
for (let i = 0; i < 10000; i++) {
  test();
}
