/**
 * 判断图片地址是否404
 * @param {string} imgurl 图片地址
 * @returns {object} 返回一个promise
 */
function isImgUrl(imgurl) {
  //  使用时使用isImgUrl(url).then
  return new Promise(function (resolve, reject) {
    var ImgObj = new Image(); //判断图片是否存在
    ImgObj.src = imgurl;
    ImgObj.onload = function (res) {
      resolve(res);
    }
    ImgObj.onerror = function (err) {
      reject(err);
    }
  });
}