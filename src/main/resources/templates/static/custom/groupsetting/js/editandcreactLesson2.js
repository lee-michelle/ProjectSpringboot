	//资源添加排序功能
    var SortableFn=function(id){
    	var byId = function ($id) { return document.getElementById(id); }
	   	Sortable.create(byId(id), {
			handle: '.drag-handle',
			animation: 150
		});
    }
	SortableFn('resourceList1');
	removelistFn();
	
	//资源包点击删除功能
	function removelistFn(){
		$("#resourceList li .list-hand .remove-btn").each(function(){
			$(this).on('click',function(){
				$(this).parent('.list-hand').parent('li').remove();
				return false;
			})
		})
	}
	//点击资源库
	showResourcePoolFn();
	
	function showResourcePoolFn(){
		//点击新建列表或编辑列表中的移动按钮
		$(".repository-btn").each(function(){
			$(this).off('click').on('click',function(){
				layer.open({
			      type: 2,
			      title: '资源库',
			      shadeClose: true,
			      shade: [0.5 , '#000000' , true],
			      maxmin: false, //开启最大化最小化按钮
			      area: ['960px', '615px'],
			      content: './pagecont/resourcePool.html'
			    });
			})
		})
	}
	
	//选择课时功能
	$("#startTime").on('change',function(){
		var thisIndex=$(this).children('option:selected').index();
		$("#endTime>option").eq(thisIndex).attr("selected",true);
	})
	$("#endTime").on('change',function(){
		var $startTime=parseInt($("#startTime").find("option:selected").val());
		var $endTime=parseInt($("#endTime").find("option:selected").val());
		var $total=$endTime-$startTime;
		if ($total>=0) {
			$total=$total+1;
			$("#totalTime").html("所需学时："+$total+"课时");
			$("#totalTime").css({'color':'#666'});
		}else{
			$("#totalTime").html("选择的课时有误！");
			$("#totalTime").css({'color':'red'});
		}
	})
	
	
	function addResourceFn($number){
		var $list="<li><p class='list_ drag-handle'><i class='icon_list'></i></p>"
					+"<p class='list_ list-input'>"
//						+"<span class='list-select'>"
//							+"<select>" 
//								+"<option selected value=''>选择资源类型</option>"
//								+"<option value=''>课件</option>"
//								+"<option value=''>教案</option>"
//								+"<option value=''>试卷试题</option>"
//								+"<option value=''>学案/导学案</option>"
//								+"<option value=''>素材</option>"
//								+"<option value=''>视频</option>"
//								+"<option value=''>教学包</option>"
//								+"<option value=''>APP</option>"
//							+"</select>"
//						+"</span>"
						+"<input list='listTags' placeholder='请填写资源标签' value='' />"
						+"<datalist id='listTags'>"
							+"<option value='课件'>课件</option>"
							+"<option value='教案'>教案</option>"
							+"<option value='试卷'>试卷</option>"
							+"<option selected value='学案/导学案'>学案/导学案</option>"
							+"<option value='视频'>视频</option>"
							+"<option value='素材'>素材</option>"
						+"</datalist>"
					+"</p>"
					+"<p class='list_'><input placeholder='选择课表' readonly /><i class='icon_kebiao'></i></p>"
					+"<p class='list_ list-input'><input placeholder='请填写资源名称' /></p>"
					+"<p class='list_ list-hand'>"
						+"<span class='LocalUpload-btn'>本地上传</span>"
						+"<span class='repository-btn'>资源库</span>"
						+"<span class='remove-btn'>删除</span>"
					+"</p>"
				+"</li>";
		var $resourceList='#resourceList'+$number;
		$($resourceList).append($list);
		//点击资源库
		showResourcePoolFn();
		//删除本列
		removelistFn();
		
		$(".icon_kebiao").each(function(){
			$(this).on('click',function(){
				layer.open({
			      type: 2,
			      title: '派送',
			      shadeClose: true,
			      shade: [0.5 , '#000000' , true],
			      maxmin: false, //开启最大化最小化按钮
			      area: ['900px', '587px'],
			      content: './pagecont/deliveryResource.html'
			    });
			})
		})
	}
	
	//点击添加资源
	$("#add-resource").on('click',function(){
		//添加资源包
		var that=$(this);
		addResourceFn(1);
		//添加资源的提示
		layer.tips('资源之间的顺序可以移动鼠标在每个资源前面序号上按下拖动调整哦！', "#resourceList1 li:last",{
		  tips: [3, '#3595CC'], //1上2右3下4左
		  time: 4000  
		});
	})
