/*讨论区、成果 tab切换功能*/
/*$("#cont-nav .tab-list").each(function(){
	$(this).bind('click',function(){
		if (!$(this).hasClass('active')) {
			$(this).addClass('active').siblings().removeClass('active');
			$("#cont-main .list_model").eq($(this).index()).addClass('active').siblings().removeClass('active');
		}
	})
})*/

/*讨论区、成果 tab切换功能*/
$("#cont-nav .tab-list").each(function(){
	$(this).bind('click',function(){
		if (!$(this).hasClass('active')) {
			$(this).addClass('active').siblings().removeClass('active');
			$("#cont-main .list_model").eq($(this).index()).addClass('active').siblings().removeClass('active');
			setfooterFn(); //重新设置底部样式
		}
	})
})

//设置收集的成果信息； 如果不是组卷收集意见按钮不显示gatherSuggestion
var gatherSuggestionList = [];
//点击收集意见
$("#gatherSuggestion").bind('click',function(){
	if (gatherSuggestionList.length>0) {
		$("#cont-nav .tab-list").eq(1).addClass('active').siblings().removeClass('active');
		$("#cont-main .list_model").eq(1).addClass('active').siblings().removeClass('active');
		var vals = '';
		for (var k in gatherSuggestionList) {
			vals = vals + ' ' + gatherSuggestionList[k].lidesc;
		}
		$("#resultLists #result_2").val(vals);
	}else{
		layer.tips('请选择讨论的意见！',$(this), {
		  tips: [2, 'red'],
		  time: 2000
		});
	}
})

//点赞吐槽
function zanfn($Ele,$fn){
	$($Ele).each(function(){
		$(this).bind('click',function(){
			if(!$(this).hasClass('active')){
				//后台提交成功以后执行以下
				$fn('a');
				var t = ($(this).siblings('em').html())*1+1;
				$(this).siblings('em').html(t);
				$(this).addClass('active');
			}
		})
	})
}
/*以下为讨论区*/
	zanfn('#suggestionLists .list .dianzan-btn',function($d){
		console.log($d)
	});//赞
	zanfn('#suggestionLists .list .tucao-btn',function($d){
		console.log($d)
	});//吐槽
	
	/*发表意见*/
	$("#publishSuggestion").bind('click',function(){
		var tx = $('#suggestionCont').val();
		if (tx.length!=0) {
			var username = '段大鹏'; //假设生成信息 用户名
			var userphotoUrl = 'http://og42u3hva.bkt.clouddn.com/user_photo.png'; //假设生成信息  头像
			var nowdate = getymdhms().replace('/','-').replace('/','-'); //假设生成信息  生成时间
			var items = {'name':username,'userphoto':userphotoUrl,'desc':tx,'times':nowdate};
			oneDiscussFn(items); //生成一级评论列表
		}else{
			layer.tips('该项必填,不能为空！','#suggestionCont', {
			  tips: [2, 'red'],
			  time: 2000
			});
		}
	});
	
	//生成一级评论列表
	function oneDiscussFn($arr){
		var arr2 = {'praise':'0','stepOn':'0','praiseIsFalse':false,'stepOnIsFalse':false,'twoDiscutionList':[]}; //点赞吐槽已经是否点赞或踩初始化数据  新建评论0,渲染传入该值 ，twoDiscutionList为二级评论信息
		var objects = $.extend({},arr2, $arr);
		console.log(objects);
		
		//提交后台成功以后执行以下  评论内容渲染
		
		$('#suggestionCont').val(''); //清空评论内容
		var $dlId = 'list_'+ nowDateFn(7); //设置独立id
		var $dl = "<dl class='list' id='"+$dlId+"'>"
					+"<dt>"
						+"<img src='"+objects.userphoto+"' alt='用户头像' /><span>"+objects.name+"</span>"
						+"<b><i class='iconfont icon-tucao tucao-btn'></i><em>"+objects.praise+"</em></b>"
						+"<b><i class='iconfont icon-dianzan dianzan-btn'></i><em>"+objects.stepOn+"</em></b>"
						+"<b>参与时间："+objects.times+"</b>"
					+"</dt>"
					+"<dd class='maindesc'><input class='collect-btn' type='checkbox' name='' value='选择' /><p>"+objects.desc+"</p></dd>"
					+"<dd class='text-list'>"
						//+"<p class='l_p'><span>郭大海</span>：<span>收到防守打法是地方暗示法撒旦法师打发斯蒂芬！</span></p>"
					+"</dd>"
					+"<dd class='hand'><input type='text' class='small_discustion' /></span><b class='discuss-btn'>评论</b></dd>"
				+"</dl>"; 
		$("#suggestionLists").append($dl);
		//选软二级评论内容
		if(objects.twoDiscutionList.length>0){
			twoDiscussFn(objects.twoDiscutionList,'#'+$dlId);
		}
		
		
		//组长权限选中讨论的内容生成成果，所以每条一级评论的内容是否展示由用户名决定
		$("#"+$dlId+" .maindesc input[type='checkbox'].collect-btn").change(function(){
			var l = {'listid':$dlId,'lidesc':$(this).siblings('p').html()};
			if ($(this).is(':checked')) {
				gatherSuggestionList.push(l); //选中添加信息
			} else{
				for (var j in gatherSuggestionList) {
					if (gatherSuggestionList[j].listid==l.listid) {
						gatherSuggestionList.splice(j,1); //未选中删除
					}
				}
			}
			console.log(gatherSuggestionList);
		});
		
		
		//是否点赞或吐槽设置
		if(objects.praiseIsFalse){
			$('#'+$dlId).find('.dianzan-btn').addClass('active');
		}
		if(objects.stepOnIsFalse){
			$('#'+$dlId).find('.tucao-btn').addClass('active');
		}
		
		//点赞 吐槽
		zanfn('#suggestionLists #'+$dlId+' .dianzan-btn',function($d){
		console.log($d)
		});//赞
		zanfn('#suggestionLists #'+$dlId+' .tucao-btn',function($d){
			console.log($d)
		});//吐槽
		
		//点击评论
		$("#"+$dlId+" .discuss-btn").bind('click',function(){
			var tex = $(this).parent('dd.hand').find('.small_discustion').val();
			if (tex.length>0) {
				var nowdate = getymdhms().replace('/','-').replace('/','-'); //假设生成信息  生成时间
				var list = [{'Name':'张大海','Desc':tex,'times':nowdate}]; //设置示例信息
				//评论信息提交后台执行以下
				
				twoDiscussFn(list,'#'+$dlId);
				$(this).parent('dd.hand').find('.small_discustion').val('');
			}else{
				layer.tips('该项必填,不能为空！',$(this).parent('dd.hand').find('.small_discustion'), {
				  tips: [1, 'red'],
				  time: 2000
				});
			}
		})
	}
	//生成二级评论列表
	function twoDiscussFn($arr,$warpid){
		for (var i in $arr) {
			var p = "<p id='p_'"+$arr[i].times+" class='l_p'><span>"+$arr[i].Name+"</span>：<span>"+$arr[i].Desc+"！</span></p>";
			$($warpid).find('.text-list').append(p);
		}
	}

/*以下为成果区域*/
	//清空成果生成框
	function emptyResult(){
		$('#resultLists .list_').find('#result_1').val('');
		$('#resultLists .list_').find('#result_2').val('');
	}
	
	/*生成列表*/
	function creactResultList($arr){
		var model = {'dianzan':'0','tucao':'0','listVal':''};
		var obj = $.extend({}, model, $arr);
		console.log(obj)
		var $list = "<li class='list'>"
						+"<i class='iconfont icon-guanbi removeresultList'></i>"
						+"<h6>"+obj.listVal[0]+"</h6><p>"+obj.listVal[1]+"</p>"
						+"<article class='handEare'><b>创建人："+obj.listVal[2]+"</b><b><i class='iconfont icon-dianzan dianzan-btn'></i><em>"+obj.dianzan+"</em></b><b><i class='iconfont icon-tucao tucao-btn'></i><em>"+obj.tucao+"</em></b></article>"
					+"</li>";
		$("#result-lists").prepend($list); //输入容器的前面
		zanfn('#result-lists .list .handEare .dianzan-btn');//赞
		zanfn('#result-lists .list .handEare .tucao-btn');//吐槽
		removparentFn('.removeresultList'); //成果列表删除
	}
	/*成果提交*/
	$("#result-sure-btn").bind('click',function(){
		var l = $('#resultLists .list_').length;
		var v = [];
		for (var i = 0;i<l;i++) {
			var result = $("#result_"+(i*1+1)).val();
			var labelText = $('#resultLists .list_').eq(i).find('.list_lt').html().split('</em>')[1]; //该项的标题
			if (result.length==0) {
				layer.tips('该'+labelText+'项必填,不能为空！','#result_'+(i*1+1), {
				  tips: [2, 'red'],
				  time: 2000
				});
				return false;
			}else{
				v.push(result);
			}
		}
		var username = '王大浩'; //虚拟用户名
		v.push(username);
		//先提交后台再生成成果列表
		//提交后台
		
		//生成列表
		var arrs = {'dianzan':Math.floor(Math.random()*1000),'tucao':Math.floor(Math.random()*1000),'listVal':v}; //点赞数dianzan 吐槽数tucao
		creactResultList(arrs);
		emptyResult();//生成列表后直接清空内容
	})
	
	/*清空生成成果表单*/
	$("#enpty-btn").bind('click',emptyResult);
	
	
	//提交分数
	$("#submitScore").bind('click',function(){
		var val = $(this).siblings('#scoreNumber').val();
		if(val.length>0){
			alert('此次打分为：'+val+'分');
			//提交打分
		}
	})
	
	
	//成果内容
	zanfn('#result-lists .list .handEare .dianzan-btn',function($d){
		console.log($d)
	});//赞
	zanfn('#result-lists .list .handEare .tucao-btn',function($d){
		console.log($d)
	});//吐槽
	
	//删除父元素
	function removparentFn($Ele){
		$("#result-lists .list "+$Ele).each(function(){
			$(this).bind('click',function(){
				//后台数据也删除
				
				$(this).parent().remove();
			})
		})
	}
	removparentFn('.removeresultList'); //成果列表删除

