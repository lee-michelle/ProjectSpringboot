

//判断一个元素是否存在ele.exist  false/true
(function($) {
    $.fn.exist = function(){ 
        if($(this).length>=1){
            return true;
        }
        return false;
    };
})(jQuery);

//分页功能
var pagingFn=function($listNum,$startPage,callback){//1、所有数据条数（自动每页十条）2、初次加载显示的页数 3、所执行函数 
	var paging = {
	    "pageData":function(pageNum){
	        //console.log(pageNum)
	        //选中页数所执行的函数
	        callback(pageNum);
	        $(".page_box .page_box_tips").find('.pageNum').html(pageNum);
	    }
	}
	$(".page_box .page_box_tips").find('b').html($listNum);
	$("#pageOne").initPage($listNum,$startPage,paging.pageData);//1、所有数据条数（自动每页十条）2、初次加载显示的页数 3、所执行函数 
}

//页面引入公共部分
var importCommonModule=function(){
	if ($("#header").exist()) {
		$("#header").load('../commModel/header/header5.html');
	}
	
	if ($("#contentTop").exist()) {
		$("#contentTop").load("../commModel/contentTop/banner_infoshow.html")
	}
	
	//引入底部
	$("#footer").load('../commModel/footer/footer2.html');
}


//主体部分设置一个最低高度
function setMinHeight(Number){
	function MinHeight(minHight){
		if ($("#footer").exist()) {
			var footerh=$("#footer").height();
			console.log(footerh)
			minHight=minHight-footerh;
			$(".mainContent").css('min-height',minHight);
		} else if($("#footer2").exist()) {
			var footerh=$("#footer2").outerHeight();
			minHight=minHight-footerh;
			$(".mainContent").css('min-height',minHight);
		}
	}
	
    if ($(".header").exist()) {
    	var minHight=$(window).height()-$(".header").outerHeight()-Number;
    	console.log($(".header").outerHeight()+'--aaa')
		MinHeight(minHight);
    }else if ($(".header3").exist()) {
    	var minHight=$(window).height()-$(".header3").outerHeight()-Number;
		MinHeight(minHight);
    } else{
    	var minHight=$(window).height()-Number;
		MinHeight(minHight);
    }
}

$(document).ready(function(){
	//页面引入公共部分
	importCommonModule();
	//主体部分设置一个最低高度
	setMinHeight(1);
	
	scrolltopFn($(window).scrollTop());
});

//设置随着屏幕大小变化
window.addEventListener("resize",function(){
	setMinHeight(1);
});

//layer调用iframe弹窗方法
var layeriframeFn=function(objects2){
	var objects1={$clickId:'',$dialogTitle:'我是弹窗',closeNumber:1,$width:'500px',$height:'300px',$urls:'https://www.baidu.com/'}
	var objects=$.extend(objects1, objects2);
	if (objects.$clickId!='') {
		$(objects.$clickId).bind('click',function(){
			layer.open({
		      type: 2,
		      title: objects.$dialogTitle,
		      shadeClose: true,
		      scrollbar: false, //设置父页面是否滚动
		      shade: [0.5 , '#000000' , true],
		      closeBtn: objects.closeNumber,
		      maxmin: false, //开启最大化最小化按钮
		      area: [objects.$width, objects.$height],
		      content: objects.$urls
		    });
		})
	}else{
		layer.open({
	      type: 2,
	      title: objects.$dialogTitle,
	      shadeClose: true,
	      shade: [0.5 , '#000000' , true],
	      maxmin: false, //开启最大化最小化按钮
	      area: [objects.$width, objects.$height],
	      content: objects.$urls
	    });
	}
}


//复选框点击
function checkedFn(callback){
	$(".checkedBtn").bind('click',function(){
		var isfalse=false;
		if ($(this).hasClass('icon_check')) {
			isfalse=true;
			$(this).addClass('icon_checked').removeClass('icon_check');
		} else{
			isfalse=false;
			$(this).addClass('icon_check').removeClass('icon_checked');
		}
		callback(isfalse);
	})
}


//点击返回顶部

//滚动条高度判断返回顶部按钮是否出现
function scrolltopFn($scrollTops){
	//加入点击返回按钮
	var $backBtn=$("<div id='backtop-btn' class='backtop-btn'><i></i></div>");
	if ($("#backtop-btn").exist()==false) {
		$("body").append($backBtn);
	}
	scrollFn($scrollTops);
	$("#backtop-btn").on('click',function(){
		$('body,html').animate({scrollTop:0},500);
	})
}
$(window).scroll(function(){
	var $scrollTop=$(window).scrollTop();
	scrollFn($scrollTop)
})

function scrollFn($scrollTops){
	if ($scrollTops>($(window).height()/1.5)) {
		$("#backtop-btn").show();
	}else{
		$("#backtop-btn").hide();
	}
}

//获取年月日时分秒毫秒
function nowDateFn(num){ //num位置1到7的正整数
	var $number=7;
	if(num!=null){
		$number=num;
	}
	var dates = new Date();
	var year = dates.getFullYear().toString();
	var month = (dates.getMonth()+1).toString();
	var day = dates.getDate().toString();
	var hour = dates.getHours().toString();
	var minute = dates.getMinutes().toString();
	var second = dates.getSeconds().toString();
	var Millisecond = dates.getMilliseconds().toString();
	
	if($number==7){ //获取年月日时分秒毫秒
		return (year+month+day+hour+minute+second+Millisecond);
	}else if ($number==6) {//获取年月日时分秒
		return (year+month+day+hour+minute+second);
	}else if ($number==5) {//获取年月日时分
		return (year+month+day+hour+minute);
	}else if ($number==4) {//获取年月日时
		return (year+month+day+hour);
	}else if ($number==3) {//获取年月日
		return (year+month+day);
	}else if ($number==2) {//获取年月
		return (year+month);
	}else if ($number==1) {//获取年
		return (year);
	}
}






