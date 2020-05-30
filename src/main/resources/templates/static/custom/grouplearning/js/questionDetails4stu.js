/*讨论区、成果 tab切换功能*/
$("#cont-nav .tab-list").each(function(){
	$(this).bind('click',function(){
		if (!$(this).hasClass('active')) {
			$(this).addClass('active').siblings().removeClass('active');
			$("#cont-main .list_model").eq($(this).index()).addClass('active').siblings().removeClass('active');
		}
	})
})
