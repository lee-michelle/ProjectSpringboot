//基于jquery的提示框组件
var loadingBox=function(param){
	var parameter={
		Linkhref:'',//tips文件所在的文件夹路径
		marginTop:'',
		marginLeft:'',
		borderRadius: '5px',
		width:'35%',
		warpBox:'',//放入的地方
		clickBtn:'', //点击调用弹窗
		loadingText:'正在加载中. . .'
	};
	
	var objects = $.extend({}, parameter, param);
	
	function appendLoadingBox(){
		//动态引入css文件
		//$("<link>").attr({ 
			//rel: "stylesheet",
		    //type: "text/css",
		    //href: objects.Linkhref+"LoadingAnimation.css"
		//}).appendTo("head");
		
		var mgLeft,Width=objects.width;
	    if (Width.indexOf('%')!=-1&&objects.marginLeft=='') {
			mgLeft=(100-Width.replace('%',''))/2+'%';
			console.log(mgLeft)
		}
		var loadingEle=$("<div class='loading_wait'><div class='loading_wait_content'><p><i class='loading_icon'></i></p><p>"+objects.loadingText+"</p></div></div>");
		
		$(objects.warpBox).append(loadingEle);
		$(".loading_wait_content").css({
			'margin-top':objects.marginTop,
			'width':objects.width,
			'margin-left':mgLeft,
			'border-radius':objects.borderRadius
		});
		
	}
	appendLoadingBox();
};
//调用实例
//loadingBox({
//	marginTop:'20%', //中间加载部分距离顶部高度
//	marginLeft:'', //中间加载部分距离左侧宽度、不设置，则横向居中
//	width:'30%', //中间加载部分的宽度，单位必须%
//	clickBtn:'.loadBtn', //点击触发的按钮的class、id,未设置时直接显示
//	warpBox:'.pop_up_main',//要放入的包裹层的类名、id
//	loadingText:'正在加载中. . .' //提示信息
//});

/**
 * 加载过渡动画
 */
function showWaiting(loadingText, width, marginTop){
	var param = {
		marginTop : !!marginTop ? marginTop : '20%', //中间加载部分距离顶部高度
		warpBox : "body",
		width : !!width ? width : '30%', //中间加载部分的宽度，单位必须%
		warpBox : 'body',//要放入的包裹层的类名、id
		loadingText : !!loadingText ? loadingText : '正在加载中. . .' //提示信息
	};
	loadingBox(param);
}

/**
 * 关闭加载过渡动画
 */
function hideWaiting(){
	$(".loading_wait").remove();
}