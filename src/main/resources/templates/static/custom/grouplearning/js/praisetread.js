$(".fa-thumbs-o-down").click(function(){
	$(this).removeClass("fa-thumbs-o-down");
	$(this).addClass("fa-thumbs-down");
});
$(".fa-thumbs-o-up").click(function(){
	$(this).removeClass("fa-thumbs-o-up");
	$(this).addClass("fa-thumbs-up");
});

var dianzanUrl = '/manager/pbl/pblInfo/discussion/praise/add';
var tucaoUrl = '/manager/pbl/pblInfo/discussion/tread/add';
//点赞吐槽
function zanfn($Ele,$Url,$fn){
	$($Ele).each(function(){
		$(this).bind('click',function(){
			if(!$(this).hasClass('active')){
				//后台提交成功以后执行以下
				var discussionId = $(this).attr("data-id");
				$.ajax({
		            url:$Url,
		            type:'POST',
		            data:{discussionId:discussionId},
		            success: function(ret) {  //成功
		               
		            },
		            error: function(ret) {
		                
		            },
		        })
		        var t = ($(this).siblings('em').html())*1+1;
		        $(this).siblings('em').html(t);
		        $(this).addClass('active');
			} else {
				layer.msg(ui_32_01_102, {
                    icon: 1,
                    time: 1000 //1秒关闭（如果不配置，默认是3秒）
                }, function(){
                });
			}
		})
	})
}
/*以下为讨论区*/
	zanfn('#suggestionLists .list .dianzan-btn',dianzanUrl,function($d){
		console.log($d)
	});//赞
	zanfn('#suggestionLists .list .tucao-btn',tucaoUrl,function($d){
		console.log($d)
	});//吐槽
	

/*以下为成果区域*/
	

