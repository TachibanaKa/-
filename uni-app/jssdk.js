/* 使用jssdk步骤，以修改‘微信公众号分享’中的内容为例
  1、引入jssdk（可以npm或下载js文件）
  2、通过config接口验证权限配置
  3、通过ready接口处理成功验证
  4、通过error接口处理失败验证
*/

/* 注意点：
  IOS在分享时修改的内容会失效
    解决：刷新一下页面就可以。判断当前环境是否为IOS，如果是就刷新一次页面。
 */

function useJSSDK() {
  //  1、从后台获取config接口需要的数据
  let url = window.location.href //history路由
  //let url = window.location.href.split("#")[0]  //hash路由
  //  传入的url必须是动态的，根据后端接口需要的url类型决定是否需要用encodeURIComponent()处理url
  let res = await getWxConfigs({
    url
  })

  //  2、调用config
  let _data = res.data
  wx.config({ //  wx为引入的jssdk
    debug: false, //如果是true会在真机上有alert的调试信息提示
    appId: _data.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
    timestamp: _data.timestamp, // 必填，生成签名的时间戳
    nonceStr: _data.nonce_str, // 必填，生成签名的随机串
    signature: _data.signature, // 必填，签名
    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表，需要什么api写什么api
  });

  //  3、调用jsApiList列表中的接口
  let wxParam = {
    title: '', // 分享标题(自行修改)
    desc: '', // 分享描述(自行修改)
    link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致(自行修改)
    imgUrl: '', // 分享图标，图片不能引入只能填写str，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致(自行修改)
    type: "link", //分享类型,music、video或link，不填默认为link,(自行修改)
  }
  //  如果不需要页面加载时就调用api可以不写在wx.ready里
  wx.ready(function () {
    wx.onMenuShareAppMessage({
      title: wxParam.title, // 分享标题
      desc: wxParam.desc, // 分享描述
      link: wxParam.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: wxParam.imgUrl, // 分享图标
      type: wxParam.link, //分享类型,music、video或link，不填默认为link,\
      success: function () {},
      cancel: function () {}
    });

    wx.error(function (res) {
      //alert(res);
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

    })
  })
}

