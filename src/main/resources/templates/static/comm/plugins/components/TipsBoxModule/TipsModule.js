//判断一个元素是否存在ele.exist  false/true
(function($) {
    $.fn.exist = function(){ 
        if($(this).length>=1){
            return true;
        }
        return false;
    };
})(jQuery);
//基于jquery的提示框组件
var tipsBox=function(Arrays){
	var parameter={
		showType:'succeed',
		Linkhref:'',//tips文件所在的文件夹路径
		position:'fixed', //页面定位方式absolute、relative
		Time:2000,//设置自动关闭时间
		top:'50%',
		left:'50%',
		width:'400px',
		warpBox:'body',//放入的地方
		clickBtn:'', //点击调用弹窗
		tipsText:'请求超时，请稍后重试！',
		callback: function(){}
	};
	
	var objects = $.extend({}, parameter, Arrays);
	
	//如果设置点击调用按钮
	if (objects.clickBtn) {
		$(objects.clickBtn).click(function(){
			if ($(".pop_error_tips").exist()==false) {
				appendTipBox();
			}
		});
	}else{
		if ($(".pop_error_tips").exist()==false) {
			appendTipBox();
		}
	}
	
	function appendTipBox(){
		var marginLeft,Width=objects.width;
		if (Width.indexOf('px')!=-1) {
			marginLeft=-(Width.replace('px','')/2)+'px';
		}else if (Width.indexOf('%')!=-1) {
			marginLeft=-(Width.replace('%','')/2)+'%';
			console.log(marginLeft)
		}
		console.log(marginLeft);
		var tipsEle=$("<div class='pop_error_tips'><p><i class='tipsIcon'></i><span class='tipstext'>"+objects.tipsText+"</span><i class='closeIcon error_tips_hide'></i></p></div>");
		
		$(objects.warpBox).append(tipsEle);
		$(".pop_error_tips").css({
			'position':objects.position,
			'top':objects.top,
			'left':objects.left,
			'width':objects.width,
			'margin-left':marginLeft
			
		});
		var tipsType=objects.showType;
		console.log(tipsType)
		switch(tipsType)
		{
		  case 'succeed':
		    $(".pop_error_tips").css({'background':'#67b168'});
		    $(".pop_error_tips").hover(function(){
		    	$(this).css({'background':'#239023'});
		    },function(){
		    	$(this).css({'background':'#67b168'});
		    });
		    break;
		  case 'warn':
		    $(".pop_error_tips").css({'background':'#ec971f'});
		    $(".pop_error_tips").hover(function(){
		    	$(this).css({'background':'#EE9F2E'});
		    },function(){
		    	$(this).css({'background':'#ec971f'});
		    });
			break;
		  case 'error':
			$(".pop_error_tips").css({'background':'#a94442'});
		    $(".pop_error_tips").hover(function(){
		    	$(this).css({'background':'#DC322D'});
		    },function(){
		    	$(this).css({'background':'#a94442'});
		    });
			break;  
		}
		
		function tipsShowHide(callback){
			//自动关闭弹窗
			var timeout=setTimeout(function(){
				$(".pop_error_tips").remove();
				clearTimeout(timeout);
				callback && callback();
			},objects.Time);
			
			//鼠标移上去不消失
			$(".pop_error_tips").mouseover(function(){
				clearTimeout(timeout);
			}).mouseout(function(){
				tipsShowHide(callback);
			});
			
			//'x'点击关闭
			$(".error_tips_hide").click(function(){
				clearTimeout(timeout);
				$(".pop_error_tips").remove();
				callback && callback();
				return false;
			})
			
		}
		tipsShowHide(objects.callback);
	}
};
//	// 调用实例
//	tipsBox({
//		showType : showType,
//		Linkhref : 'components/TipsBoxModule/',// tips文件所在的文件夹路径
//		Time : 3000,// 设置自动关闭时间
//		top : '5%', // 距离顶部的高度
//		width : '400px', // 宽度,单位px、%都可以
//		clickBtn : '.tipsBtn', // 点击触发的按钮的class、id,未设置时直接显示
//		warpBox : '.pop_up_main',// 要放入的包裹层的类名、id
//		tipsText : '请求超时，请稍后重试！' //提示信息
//	});
/**
 * 显示提示栏
 * @param tipsText 提示语
 * @param width 宽度,单位px、%
 * @param waitTime 自动关闭时间
 * @param top 距离顶部的高度
 */
function showSuccessTip(tipsText, width, waitTime, top){
	$(".pop_error_tips").remove();
	var param = {
		showType : "succeed",
		Linkhref : '/js/components/TipsBoxModule/',//tips文件所在的文件夹路径
		Time : !!waitTime ? waitTime : 2000,//设置自动关闭时间
		top : !!top ? top : '50%', //距离顶部的高度
		width : !!width ? width : '400px', //宽度,单位px、%都可以
		warpBox : 'body',//要放入的包裹层的类名、id
		tipsText : !!tipsText ? tipsText : '请求超时，请稍后重试！请求超时，请稍后重试！请求超时，请稍后重试！' //提示信息
	};
	tipsBox(param);
}

function showWarningTip(tipsText, width, waitTime, top){
	$(".pop_error_tips").remove();
	var param = {
		showType : "warn",
		Linkhref : '/js/components/TipsBoxModule/',//tips文件所在的文件夹路径
		Time : !!waitTime ? waitTime : 2000,//设置自动关闭时间
		top : !!top ? top : '50%', //距离顶部的高度
		width : !!width ? width : '400px', //宽度,单位px、%都可以
		warpBox : 'body',//要放入的包裹层的类名、id
		tipsText : !!tipsText ? tipsText : '请求超时，请稍后重试！请求超时，请稍后重试！请求超时，请稍后重试！' //提示信息
	};
	tipsBox(param);
}

function showTip(tipsText, width, waitTime, top) {
	showWarningTip(tipsText, width, waitTime, top);
}

function showErrorTip(tipsText, width, waitTime, top){
	$(".pop_error_tips").remove();
	var param = {
		showType : "error",
		Linkhref : '/js/components/TipsBoxModule/',//tips文件所在的文件夹路径
		Time : !!waitTime ? waitTime : 2000,//设置自动关闭时间
		top : !!top ? top : '50%', //距离顶部的高度
		width : !!width ? width : '400px', //宽度,单位px、%都可以
		warpBox : 'body',//要放入的包裹层的类名、id
		tipsText : !!tipsText ? tipsText : '请求超时，请稍后重试！请求超时，请稍后重试！请求超时，请稍后重试！' //提示信息
	};
	tipsBox(param);
}

/**
 * 隐藏错误栏
 */
function removeTip(){
	$(".pop_error_tips").remove();
}
