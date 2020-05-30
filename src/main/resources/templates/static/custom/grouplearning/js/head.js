var headerFn=function(){
	$("#navigate dd").each(function(){
		//横向导航栏
		$(this).bind('click',function(){
			if (!$(this).hasClass('active_dd')) {
				$(this).addClass('active_dd').siblings().removeClass('active_dd');
			}
		});
	});
	
	//竖向导航栏展开
	$("#navigate dt").bind('click',function(){
		if ($(this).find('i').hasClass('Rotate_180')) {
			$(this).find('i').removeClass('Rotate_180');
			$("#asideNav").slideUp();
			$(this).css({"background":"#173b58"});
		}else{
			$(this).find('i').addClass('Rotate_180');
			$("#asideNav").slideDown();
			$(this).css({"background":"#1274c9"});
		}
	});
	//竖向导航栏展开子栏目操作
	$("#asideNav li a").each(function(){
		$(this).bind('click',function(){
			var $Index=$(this).parent('li').index();
			var $imgUrl=$(this).find('img').attr('src');
			var $imgUrl_on=$imgUrl.split('.png')[0]+'_on.png';
			var otherImgLength=$(this).parent('li').siblings().find('a').find('img');
			//console.log($Index);
			if (!$(this).hasClass('active_a')) {
				$(this).addClass('active_a');
				$(this).find('img').attr({src:$imgUrl_on});
				$(this).parent('li').siblings().find('a').removeClass('active_a');
				$("#asideNav li").not($("#asideNav li").eq($Index)).each(function(){
					var imgurl=$(this).find("a>img").attr('src');
					if (imgurl.indexOf('_on.png')!=-1) {
						imgurl=imgurl.split('_on.png')[0]+'.png';
						$(this).find("a>img").attr({src:imgurl});
						//console.log(imgurl);
					}
				})
			}
		})
	});
}
$(document).ready(function(){
	headerFn();
});

(function($,window){
	var head = window.head = {
		menuJson : JSON.parse(menuJson),
		menuMap : {
			left : {
				
			},
			top : {
				
			}
		},
		init : function() {
			var _this = this;
			_this.initMenu();
			_this.initNavigation();
		},
		initMenu : function() {
			var _this = this;
//			console.log(_this.menuJson);
			var left_menu = _this.menuJson._left_menu_key_;
			var top_menu = _this.menuJson._top_menu_key_;
			var leftHtml = "";
			var topHtml = "";
			left_menu.forEach(function(elt, i, array) {
				var menuId = elt.menuId;
				_this.menuMap.left[menuId] = elt;
				var html = '<li><a href="javascript:head.leftClick(\''+menuId+'\');"><img src="'+elt.icon1Url+'" alt="导航图片" />'+elt.name+'</a></li>';
				leftHtml += html;
			});
			$("#asideNav").append(leftHtml);
			top_menu.forEach(function(elt, i, array) {
				var menuId = elt.menuId;
				_this.menuMap.top[menuId] = elt;
				var html = '<dd><a href="'+elt.url+'"><img src="'+elt.icon1Url+'"/><span>'+elt.name+'</span></a></dd>';
				topHtml += html;
			});
			$("#navigate").append(topHtml);
		},
		initNavigation : function() {
			var _this = this;
			var menuTopKey = $.cookie('_menu_top_key_');
			var menuIndexLeftKey = $.cookie('_menu_index_left_key_');
//			console.log("menuTopKey:" + menuTopKey);
//			console.log("menuIndexLeftKey:" + menuIndexLeftKey);
			
			if(!$.isEmptyObject(menuTopKey) && menuTopKey != 'default') {
				var childrenMenu = _this.menuMap.top.menuTopKey;
				var navigationHtml = "";
				childrenMenu.forEach(function(elt, i, array) {
					elt.children.forEach(function(element){
						navigationHtml += _this.appendNavigationHtml(element);    
					});
				});
				$("#navigation").html(navigationHtml);
			} else if(!$.isEmptyObject(menuIndexLeftKey)) {
				_this.leftClick(_this.menuJson._left_menu_key_[menuIndexLeftKey-1].menuId);
			}           
		},
		leftClick : function(menuId) {
			var _this = this;
			var menu = _this.menuMap.left[menuId];
			var childrenMenu = menu.children;
//			console.log(childrenMenu);
			var navigationHtml = '<li style="font-size:18px;margin-right:50px;margin-left:25px;color:black; display: inline-block;vertical-align: middle;text-align: center;"><img style="margin:8px 5px 0px 0px;float:left;" src="'+menu.icon2Url+'"/>'+
			menu.name + '</li>';
			childrenMenu.forEach(function(elt, i, array) {
				navigationHtml += _this.appendNavigationHtml(elt);    
			});
			$("#navigation").html(navigationHtml);
//			console.log("设置_menu_index_left_key_ cookie");
			_this.menuJson._left_menu_key_.forEach(function(elt, i, array) {
				if(elt.menuId == menuId) {
					$.cookie("_menu_index_left_key_", i+1, { path: '/'});
				}
			})
		},
		appendNavigationHtml : function(elt) {
			var html = '<li style="display: inline-block;vertical-align: middle;text-align: center;margin: 0px 10px;">' +
			'<a href="'+elt.url+'">'+elt.name+'</a>' +
			'</li>';
			return html; 
		}
	};
	head.init();
})(jQuery,window);