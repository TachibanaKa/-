/* 数组去重（包括对象） */
function arrUniq(arrList){
  let arr = []
  //数组元素转换成str
  arrList.map(item=>{
    arr.push(JSON.stringify(item))
  })
  //数组里str去重
  let set = new Set()
  arr.forEach(item=> set.add(item))
  let resultStrArr = Array.from(set)
  //数组元素转换成obj
  let result = []
  resultStrArr.map(item=>{
    result.push(JSON.parse(item))
  })
  return result
}