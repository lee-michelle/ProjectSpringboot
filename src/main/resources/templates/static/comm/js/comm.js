/**
$("body").exist() //判断一个元素是否存在
IsPC()  //是否是PC端
isWeiXin() //当前环境是否是微信
cloneObj(obj) //复制对象
getScrollWidth() //获取当前浏览器滚动条宽度
//禁止浏览器返回或前进  NoReturnOrAdvanceFn()
*/

//判断一个元素是否存在ele.exist  false/true
(function($) {
    $.fn.exist = function(){ 
        if($(this).length>=1){
            return true;
        }
        return false;
    };
})(jQuery);

//判断一个元素是否存在原生写法
function judgeEle(Ele) {
    var isf = document.querySelectorAll(Ele);
    if(isf) {
        return true;
    }else{
    	return false;
    }
}

//判断设备为移动端还pc端
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod", "iPad"];
    var flag = true;
    if(window.screen.width>=769){
         flag = true;
    }
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

//判断是否是微信
function isWeiXin(){
  	//window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  	var ua = window.navigator.userAgent.toLowerCase();
  	//通过正则表达式匹配ua中是否含有MicroMessenger字符串
 	if(ua.match(/MicroMessenger/i) == 'micromessenger'){
  		return true;
  	}else{
  		return false;
  	}
}

//复制对象
var cloneObj = function (obj) {
    var newObj = {};  
    if (obj instanceof Array) {  
        newObj = [];  
    }  
    for (var key in obj) {  
        var val = obj[key];  
        //newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; //arguments.callee 在哪一个函数中运行，它就代表哪个函数, 一般用在匿名函数中。  
        newObj[key] = typeof val === 'object' ? cloneObj(val): val;  
    }  
    return newObj;  
};

var TOUCHSTART, TOUCHEND, TOUCHMOVE, CLICK='click';
if (typeof(window.ontouchstart) != 'undefined') {
    TOUCHSTART = 'touchstart';
    TOUCHEND = 'touchend';
    TOUCHMOVE='touchmove';
 
    } else if (typeof(window.onmspointerdown) != 'undefined') {
    TOUCHSTART = 'MSPointerDown';
    TOUCHEND = 'MSPointerUp';
    TOUCHMOVE='MSPointerMove';
} else {
    TOUCHSTART = 'mousedown';
    TOUCHEND = 'mouseup';
    TOUCHMOVE = 'mousemove';
}
    
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady(){
	WeixinJSBridge.call('hideToolbar');
});



/*部分通用的代码*/
//layer调用iframe弹窗方法
var layeriframeFn=function(objects2){
	var objects1={$clickId:'',$dialogTitle:'我是弹窗',$maxmin: false,closeNumber:1,$width:'500px',$height:'300px',$urls:'https://www.baidu.com/'}
	var objects=$.extend(objects1, objects2);
	if (objects.$clickId!='') {
		$(objects.$clickId).bind('click',function(){
			layer.open({
		      type: 2,
		      title: objects.$dialogTitle,
		      shadeClose: true,
		      shade: [0.5 , '#000000' , true],
		      closeBtn: objects.closeNumber,
		      maxmin: objects.$maxmin, //开启最大化最小化按钮
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
	      maxmin: objects.$maxmin, //开启最大化最小化按钮
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
//分页功能使用示例
//pagingFn(100,1,function(num){
	//console.log("当前点击页数"+num);
	//根据当前点击页数加载相应数据
	
//}); 

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
//页面加入返回顶部按钮
$(document).ready(function(){
	scrolltopFn($(window).scrollTop());
})

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

//设置底部的定位样式
function setfooterFn () {
	var mainContent_H = $(window).height()-$("header#header").outerHeight()-$("footer#footer").outerHeight();
	if ($("#mainContent").outerHeight()>mainContent_H) {
		$("footer#footer").css({"position":"static"});
	}else{
		$("footer#footer").css({"position":"fixed"});
	}
}
$(document).ready(function(){
	setfooterFn();
});

//显示区域变化时
window.addEventListener('resize',setfooterFn);

function scrollFn($scrollTops){
	if ($scrollTops>($(window).height()/1.5)) {
		$("#backtop-btn").show();
	}else{
		$("#backtop-btn").hide();
	}
	setfooterFn();
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

//获取年月日时分秒
function getymdhms(){ //获取年月日时分秒  时间格式2018/05/14 16:00:33
	var dates = new Date();
	var year = dates.getFullYear().toString();
	var month = (dates.getMonth()+1).toString();
	if (month<10) {
		month = "0"+month;
	}
	var day = dates.getDate().toString();
	if (day<10) {
		day = "0"+day;
	}
	var hour = dates.getHours().toString();
	if (hour<10) {
		hour = "0"+hour;
	}
	var minute = dates.getMinutes().toString();
	if (minute<10) {
		minute = "0"+minute;
	}
	var second = dates.getSeconds().toString();
	if (second<10) {
		second = "0"+second;
	}
	
	return (year+"/"+month+"/"+day+" "+hour+":"+minute+":"+second);
}

//获取某个日期的第几周
function getWeekNum(ymd) { //获取某个日期的第几周,ymd格式为"2018/05/08" 使用getWeekNum("2018/05/08")
    var totalDays = 0;
    var now = new Date(ymd)
    years = now.getYear()
    if (years < 1000)
        years += 1900
    var days = new Array(12);
    days[0] = 31;
    days[2] = 31;
    days[3] = 30;
    days[4] = 31;
    days[5] = 30;
    days[6] = 31;
    days[7] = 31;
    days[8] = 30;
    days[9] = 31;
    days[10] = 30;
    days[11] = 31;
     
    //判断是否为闰年，针对2月的天数进行计算
    if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
        days[1] = 29
    } else {
        days[1] = 28
    }
 
    if (now.getMonth() == 0) {
        totalDays = totalDays + now.getDate();
    } else {
        var curMonth = now.getMonth();
        for (var count = 1; count <= curMonth; count++) {
            totalDays = totalDays + days[count - 1];
        }
        totalDays = totalDays + now.getDate();
    }
    //得到第几周
    var week = Math.round(totalDays / 7);
    return week;
}

function getScrollWidth() { //获取当前浏览器滚动条宽度
    var noScroll, scroll, oDiv = document.createElement("DIV");
    oDiv.style.cssText = "position:absolute;top:-1000px;width:100px;height:100px; overflow:hidden;";
    noScroll = document.body.appendChild(oDiv).clientWidth;
    oDiv.style.overflowY = "scroll";
    scroll = oDiv.clientWidth;
    document.body.removeChild(oDiv);
    return noScroll-scroll;
}


//自动生成球动画
var ballFn = function(Array){
	
}

//根据数据里面内容排序
var objectArraySort = function (keyName) {
 	return function (objectN, objectM) {
		var valueN = objectN[keyName];
		var valueM = objectM[keyName];
		if (valueN < valueM){
			return 1 //从大到小排序
		}else if (valueN > valueM){
			return -1
		}else{
			return 0
		}
 	}
}
//var arr = [{'name': '张三', age: 26},{'name': '李四', age: 12},{'name': '王五', age: 37},{'name': '赵六', age: 4}];
//arr.sort(objectArraySort('age'))
//console.log(arr)


//cookie的添加获取删除
var CookieUtil={
    addCookie:function(key,value,options){
        var str=key+"="+escape(value);
        if(options.expires){
           var curr=new Date();   //options.expires的单位是小时
           curr.setTime(curr.getTime()+options.expires*3600*1000);
           options.expires=curr.toGMTString();
        }
        for(var k in options){   //有可能指定了cookie的path，cookie的domain
           str+=";"+k+"="+options[k];
        }
        document.cookie=str;
    },
    queryCookie:function(key){
      var cookies=document.cookie;
     //获得浏览器端存储的cookie,格式是key=value;key=value;key=value
      cookies+=";";
      var start=cookies.indexOf(key);
      if(start<=-1){ return null; }  //说明不存在该cookie
      var end=cookies.indexOf(";",start);
      var value=cookies.slice(start+key.length+1,end);
      return unescape(value);
    },
    deleteCookie:function(key){
      var value=CookieUtil.queryCookie(key);
      if(value===null){return false;}
      CookieUtil.addCookie(key,value,{expires:-1});//把过期时间设置为-1，浏览器会马上自动帮我们删除cookie
    }
}

//数组去重
function rep(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != i) {
            arr.splice(i,1);//删除数组元素后数组长度减1后面的元素前移
            i--;//数组下标回退
        }
    }
    return arr;
}

//禁止浏览器返回或前进  NoReturnOrAdvanceFn()
function NoReturnOrAdvanceFn (){
	jQuery(document).ready(function () {
		if (window.history && window.history.pushState) {
  			$(window).on('popstate', function () {
　　　　　　　　 // 当点击浏览器的 后退和前进按钮 时才会被触发， 
                window.history.pushState('forward', null, ''); 
                window.history.forward(1);
            });
         }
　　　　　　　　　　	//
  		window.history.pushState('forward', null, '');  //在IE中必须得有这两行
  		window.history.forward(1);
  	});
}
			