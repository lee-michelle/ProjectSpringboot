//判断一个元素是否存在ele.exist  false/true
(function($) {
    $.fn.exist = function(){ 
        if($(this).length>=1){
            return true;
        }
        return false;
    };
})(jQuery);

//给侧边栏和主体部分设置一个最低高度
function setMinHeight(Number){
	function MinHeight(minHight){
		if ($(".Content_aside").exist()) {
			//var Height=minHight-($(".main_content h3").height());
			//$(".Content_right").css('min-height',Height);
			//$(".Content_aside").height($(".Content_right").height());
		}else{
			/*var footerh=$("#footer").height();
			minHight=minHight-footerh;
			$(".MainBox").css('min-height',minHight);
			$(".MainContent").css('min-height',minHight);
			$(".ContentBox").css('min-height',minHight);
			$(".AsideMenu").css('height',$(".MainContent").height());*/
			
			var footerh=$(".footer").height();
			minHight=minHight-footerh;
			$(".MainContent").css('min-height',minHight);
			$(".AsideMenu").css('min-height',minHight);
			$(".MainBox").css('min-height',minHight);
			$(".ContentBox").css('min-height',$(".AsideMenu").height());
		}
	}
	//换成有学创教育的最新底部就把34改成47.6
    var minHight=$(document.body).height()-$(".header").height()-41.6-Number;
	MinHeight(minHight);
}

//页面引入公共模块
var CommonModelImport=function(){
	//引入头部
	/*$("#header").load('header/header.html');*/
	
	//引入侧边导航栏
	/*if ($("#AsideMenu").exist()) {
		$("#AsideMenu").load('aside/AsideNav.html');
	}*/
	
	//引入底部
	/*$("#footer").load('footer/footer.html');*/
	
	setMinHeight(0);
}

//页面需要预加载部分
$(document).ready(function(){
	//给侧边栏和主体部分设置一个最低高度
	CommonModelImport();
})

//设置随着屏幕大小变化而变化的部分
window.addEventListener("resize",function(){
	setMinHeight(0);
});



//单选框的单选js
function radioSelect(){
	$(".select_radio").find('.classBtn').each(function(){
		$(this).click(function(){
			if ($(this).hasClass('Checked')) {
				$(this).parents('.classlist').siblings().find('.classBtn').removeClass('Checked').addClass('un_Checked');
			} else{
				$(this).removeClass('un_Checked').addClass('Checked');
				$(this).parents('.classlist').siblings('.classlist').find('.classBtn').removeClass('Checked').addClass('un_Checked');
			}
		})
	});
}
radioSelect();
