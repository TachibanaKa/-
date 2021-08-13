/* 获取当天时间 */
function getToday(hour) {
  let today = new Date()
  //当天时间的0点
  let start = new Date(new Date(new Date().toLocaleDateString()).getTime()).getTime(); // 当天0点
  //当天时间的24点
  let end = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1).getTime();
  if(hour==0){
    return start
  }
  if(hour==24){
    return end
  }
  return today
}