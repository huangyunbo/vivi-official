// 2018-02-06 zh_cn wuyunduoduopiao

$(function(){
	var browser = {
	    versions: function(){
	        var u = navigator.userAgent, app = navigator.appVersion;
	        return {
	            trident: u.indexOf('Trident') > -1, //IE内核
	            presto: u.indexOf('Presto') > -1, //opera内核
	            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
	            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
	            iOS: !!u.match(/\((iPhone|iPad|Macintosh); (CPU|Intel).+Mac OS X/), //ios终端
	            Android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
	            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
	            iPad: u.indexOf('iPad') > -1, //是否iPad
	            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
	            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
	            qq: u.match(/\sQQ/i) == " qq" //是否QQ
	        };
	    }(),
	    language:(navigator.browserLanguage || navigator.language).toLowerCase()
	};

	var android_url = 'http://dl.vivichat.cn/android/apks/vivi-vivichat-release.apk',
		ios_url = 'https://itunes.apple.com/cn/app/vivi-chat/id1321240205?mt=8',
		yingyongbao_url = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.vivichatapp.vivi';

	$("#g_download_app").on("click", function(){
		var $this = $(this);

		if (browser.versions.iOS) {
			$this.attr("href", ios_url);
		} else {
			if (browser.versions.weixin) {
				$this.attr("href", yingyongbao_url);
			} else {
				$this.attr("href", android_url);
			}
		}
	});
})