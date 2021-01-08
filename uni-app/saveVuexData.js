
  //  在uni-app的App.vue文件添加onLaunch里的内容

	export default {
		onLaunch: function() {
			//在页面加载时读取sessionStorage里的状态信息
			if (localStorage.getItem("store")) {
				this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
			}

			//在页面刷新时将vuex里的信息保存到sessionStorage里
			window.addEventListener("beforeunload", () => {
				localStorage.setItem("store", JSON.stringify(this.$store.state))
			})
		},
		// onShow: function() {
		// 	console.log('App Show')
		// },
		// onHide: function() {
		// 	console.log('App Hide')
		// }

	}
