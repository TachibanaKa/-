//  在封装的vue组件中使用props接收父组件传来的值
//  在接收的值为数组时，默认值必须要用函数把空数组包裹起来

//// 正解1   箭头函数
//props: {
//  cartList: {
//    type: Array,
//    default:()=>[]
//  }
//}
//  // 正解2
//  props: {
//  cartList: {
//    type: Array,
//    default:function(){
//      return [];
//    }
//  }
//}