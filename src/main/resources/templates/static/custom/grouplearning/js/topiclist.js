var edit = {
		createResourceUrl:'',
        addUrl:'',
        editUrl:'',
        //contentManagerUrl
        contentMagnagerUrl: '',
        goGroupSettingUrl: '',
        listUrl:'',
        goGroupUrl:'',
        parent:$("#addInfo"),
		//弹窗操作,增加信息
        addFileInfo : function(data) {
			layer.closeAll();
			data = data[0];
			console.log(data);
			var html = "<li class='list_ files' style='margin-bottom:5px;'>";
			html += "<input type='hidden' name='fileId' value='"+data.fileId+"'/>";
			html += "<input type='hidden' name='fileName' value='"+data.fileName+"'/>";
			html += "<input type='hidden' name='ext' value='"+data.fileExt+"'/>";
			html += "<input type='hidden' name='md5' value='"+data.md5+"'/>";
			html += "<input type='hidden' name='providerContentId' value='"+data.providerContentId+"'/>";
			html += "<input type='hidden' name='sizeDisplay' value='"+data.sizeDisplay+"'/>";
			html += "<input type='hidden' name='typeCode' value='"+data.typeCode+"'/>";
			html += "<input type='hidden' name='typeName' value='"+data.typeName+"'/>";
			html += "<input type='hidden' name='url' value='"+data.url+"'/>";
			html += "<label class='list_lt'></label>";
			html += "<div class='list_rt btn-list'>";
			html += "<span>"+data.fileName+"</span>";
			html += "<span style='color:red;' onclick='edit.remove(this)'>x</span>";
			html += "</div></li>";
			edit.parent.after(html);
		},
		//展示选择分组页面
		goGroup: function (obj) {
			var url = edit.goGroupUrl;
			var groupIds = $(obj).parent().find("input[name='groupId']").val();
			url += "?selectGroupIds=" + groupIds;
			layer.open({
                type: 2,
                title: ui_32_01_049,
                shadeClose: true,
                shade: [0.5 , '#000000' , true],
                maxmin: false, //开启最大化最小化按钮
                area: ['560px', '615px'],
                content: url
            });
        },
        goGroupSetting: function () {
        	var url = edit.goGroupSettingUrl;
        	window.open(url, '_blank');
        },
        remove:function (obj) {
        	$(obj).parent().parent().remove();
        },
        // 点击资源库
        showResourcePoolFn:function(obj){
        	edit.parent = $(obj).parent().parent();
            var url = edit.contentMagnagerUrl+"/search/index?type=1";
            layer.open({
                type: 2,
                title: ui_32_01_030,
                shadeClose: true,
                shade: [0.5 , '#000000' , true],
                maxmin: false, //开启最大化最小化按钮
                area: ['960px', '615px'],
                content: url
            });
        },
        //上传
        upload : function(obj) {
            fileInput = $(obj).parent().find("input[type='file']");
            var parent = $(obj).parent().parent();
            fileInput.off("change").on("change", function() {
                var fileOperation = createFileOperation({
                    fileObject : fileInput,
                    onBefore : function() {
                        //$layuiElement.attr("style","");
                    },
                    onGoing:function(fileInfo, progress){

                        //var id =$layuiElement.attr("lay-filter");
                        //layuiElement.progress(id,progress);
                        console.log(progress);
                    },
                    onAfter : function(fileInfo, resultJson) {
                        //$layuiElement.hide();
                    	var html = "<li class='list_ files' style='margin-bottom:5px;'>";
            			html += "<input type='hidden' name='fileId' value='"+resultJson.fileId+"'/>";
            			html += "<input type='hidden' name='fileName' value='"+resultJson.fileName+"'/>";
            			html += "<input type='hidden' name='ext' value='"+resultJson.fileSuffix+"'/>";
            			html += "<input type='hidden' name='md5' value='"+resultJson.md5+"'/>";
            			html += "<input type='hidden' name='sizeDisplay' value='"+resultJson.size+"'/>";
            			html += "<input type='hidden' name='typeCode' value='C01'/>";
            			html += "<input type='hidden' name='typeName' value='教材'/>";
            			html += "<input type='hidden' name='url' value='"+resultJson.downloadUrl+"'/>";
            			html += "<input type='hidden' name='providerContentId' value=''/>"
            			html += "<label class='list_lt'></label>";
            			html += "<div class='list_rt btn-list'>";
            			html += "<span>"+resultJson.fileName+"</span>";
            			html += "<span style='color:red;' onclick='edit.remove(this)'>x</span>";
            			html += "</div></li>";
            			parent.after(html);

                        fileInput.val("");
                    }
                });
                fileOperation.uploadFile();
            })
            fileInput.click();
        },
        //创建网络资源
        createResUrl : function (){
        	var url = edit.createResourceUrl;
			dialog = jDialog.iframe(url,{
				title : ui_32_01_080,
				width : '600px',
				height : '300px'
			});
        }
	}

function writeGroups(groupIds, groupNames) {
	$(".newQueueList .modifiedArea>li[name='tblgroups']").find("div").find("div").find("input[name='groupId']").val(groupIds);
	$(".newQueueList .modifiedArea>li[name='tblgroups']").find("div").find("div").find("input[name='groupName']").val(groupNames);
}

////
function add() {
        var pblInfo = new Object();
        pblInfo['topic'] = $("#topic").val();
        pblInfo['description'] = $("#description").val();
        pblInfo['startTime'] = $("#startTime").val();
        pblInfo['endTime'] = $("#endTime").val();
        if ($("#subject").val()) {
        	pblInfo['subjectCode'] = $("#subject").val();
        	pblInfo['subjectName'] = $("#subject option:selected").text();
        }else{
        	pblInfo['subjectCode'] = "";
        	pblInfo['subjectName'] = "";
        }
        var files = [];
        pblInfo['pblFiles'] =files;
        $(".modifiedArea .files").each(function(){
        	var fileId = $(this).find("input[name='fileId']").val();
        	var fileName = $(this).find("input[name='fileName']").val();
        	var ext = $(this).find("input[name='ext']").val();
        	var md5 = $(this).find("input[name='md5']").val();
        	var providerContentId = $(this).find("input[name='providerContentId']").val();
        	var size = $(this).find("input[name='sizeDisplay']").val();
        	var contentTypeCode = $(this).find("input[name='typeCode']").val();
        	var contentTypeName = $(this).find("input[name='typeName']").val();
        	var url = $(this).find("input[name='url']").val();
        	var fileObject = new Object();
        	fileObject['fileId'] = fileId;
        	fileObject['fileName'] = fileName;
        	fileObject['ext'] = ext;
        	fileObject['md5'] = md5;
        	fileObject['providerContentId'] = providerContentId;
        	fileObject['size'] = size;
        	fileObject['contentTypeCode'] = contentTypeCode;
        	fileObject['contentTypeName'] = contentTypeName;
        	fileObject['url'] = url;
        	files.push(fileObject);
        });
        //为空验证
        if ($("#topic").val() == '') {
        	layer.tips(msg_32_01_007,'#topic', {
				  tips: [2, 'red'],
				  time: 2000
				});
        	return false;
        }
        //为空验证
        if ($("#description").val() == '') {
        	layer.tips(msg_32_01_007,'#description', {
				  tips: [2, 'red'],
				  time: 2000
				});
        	return false;
        }
        //为空验证
        if ($("#startTime").val() == '') {
        	layer.tips(msg_32_01_007,'#startTime', {
				  tips: [2, 'red'],
				  time: 2000
				});
        	return false;
        }
      //为空验证
        if ($("#endTime").val() == '') {
        	layer.tips(msg_32_01_007,'#endTime', {
				  tips: [2, 'red'],
				  time: 2000
				});
        	return false;
        }
        var startTime=new Date($("#startTime").val());
        var endTime=new Date($("#endTime").val());
        if(startTime > endTime){
        	layer.tips(msg_32_01_008,'#endTime', {
				  tips: [2, 'red'],
				  time: 3000
				});
        	return false;
        }
        //tbl列表
        var tblInfos = [];
        pblInfo['tblList'] = tblInfos;
        for (var n = 1,tbl_length = $("#queueListTable").find('tr').length; n < tbl_length ; n++) {
        	var $tr = $("#queueListTable").find('tr').eq(n);
        	var datainfo = $tr.find('td').eq(3).find('.edit-btn').attr('data-info');
        	if (datainfo) {
	        	var info = JSON.parse(datainfo);
	        	var tblInfo = new Object();
	        	tblInfo['topic'] = info[0];
	        	tblInfo['description'] = info[1];
	        	tblInfo['groupId'] = info[2].groupId;
	        	tblInfo['groupName'] = info[2].groupName;
	        	//附件信息
	        	var tblfs = [];
	        	tblInfo['files'] = tblfs;
	        	var tblfiles = info[3];
	        	if (tblfiles != null && tblfiles.length > 0) {
	        		for (var u = 0;u < tblfiles.length; u ++) {
	        			var fileObject = new Object();
	        			fileObject['fileId'] = tblfiles[u].fileId;
	                	fileObject['fileName'] = tblfiles[u].fileName;
	                	var ext=tblfiles[u].ext;
	                	if(!ext){
	                		ext="";
	                	}
	                	fileObject['ext'] = ext;
	                	fileObject['md5'] = tblfiles[u].md5;
	                	fileObject['providerContentId'] = tblfiles[u].providerContentId;
	                	fileObject['size'] = tblfiles[u].size;
	                	fileObject['contentTypeCode'] = tblfiles[u].contentTypeCode;
	                	fileObject['contentTypeName'] = tblfiles[u].contentTypeName;
	                	fileObject['url'] = tblfiles[u].url;
	                	tblfs.push(fileObject);
	        		}
	        	}
	        	tblInfos.push(tblInfo);
        	} else {
	        	var tblInfo = new Object();
	        	tblInfo['topic'] = $tr.find('td').eq(3).find('input[name="topic"]').val();
		        tblInfo['description'] = $tr.find('td').eq(3).find('input[name="description"]').val();
		        tblInfo['groupId'] = $tr.find('td').eq(3).find('input[name="groupId"]').val();
		        if (!tblInfo['groupId']) {
		        	layer.tips(msg_32_01_009,$tr, {
						  tips: [2, 'red'],
						  time: 2000
						});
		        	return false;
		        }
		        tblInfo['groupName'] = $tr.find('td').eq(3).find('input[name="groupName"]').val();
		        var files = $(obj).parent().find("input[name='files']").val();
				if (files) {
					tblInfo['files'] = JSON.parse($(obj).parent().find("input[name='files']").val());
				}
				tblInfos.push(tblInfo);
        	}
        }
        console.log(JSON.stringify(pblInfo));
        layer.load(1);
        $.ajax({
            url:edit.addUrl,
            type:'POST',
            contentType: "application/json; charset=utf-8",
            data:JSON.stringify(pblInfo),
            success: function(ret) {  //成功
                layer.closeAll("loading");
                debugger
                if (ret.status =="1")
                {
                    layer.msg(msg_32_01_005, {
                        icon: 1,
                        time: 1000 //1秒关闭（如果不配置，默认是3秒）
                    }, function(){
                        goList();
                    });
                }
            },
            error: function(ret) {
                layer.closeAll("loading");
                layer.alert(msg_32_01_006);
            },
        })
    }

function goList() {
	document.location.href = edit.listUrl;
}

if (window.addEventListener){
    window.addEventListener('message',function(event){
        var data = event.data;
        edit.addFileInfo(data);
    }, false);
}else if(window.attachEvent){
    window.attachEvent("onmessage", function(event){
        var data = event.data;
        edit.addFileInfo(data);
    });
}

function createFileOperation(props) {
    return new FileOperation(props || {})
}

function FileOperation(props) {
    this.fileObject = props.fileObject || new Object(); //页面中type为file的input元素
    this.onBefore = props.onBefore || function(fileInfo){
        console.log(fileInfo);
    };
    this.onGoing = props.onGoing || function(fileInfo, progress){
        console.log(fileInfo);
        console.log(progress);
    };
    this.onAfter = props.onAfter || function(fileInfo, resultJson){
        console.log(fileInfo);
        console.log(resultJson);
    };
    this.onError = props.onError || function(fileInfo){
        console.log(fileInfo);
    };
    this.fileInfo = {
        fileName : "",//文件名
        fileType : "",//文件类型
        fileSuffix : ""//文件后缀
    };
    this.progress = "";//文件上传进度
    this.resultJson = "";//文件上传完成返回的json

    this.uploadFile = function () {
        var _this = this;
        var fileObj = $(_this.fileObject).prop('files')[0];
        var fileName = fileObj.name;
        var fileTitle = fileName.substring(0, fileName.lastIndexOf("."));
        var fileSuffix = fileName.substring(fileName.lastIndexOf(".") + 1);
        _this.fileInfo.fileName = fileName;
        _this.fileInfo.fileType = fileObj.fileType;
        _this.fileInfo.fileSuffix = fileSuffix;
        if (_this.onBefore(_this.fileInfo) == false) {
            return;
        }
        //用ajax上传文件
        var xhr = new XMLHttpRequest();
        xhr.open('post', "/manager/pbl/upload", true);
        var formData = new FormData();
        formData.append(fileName, fileObj);
        xhr.onreadystatechange = function(){
            if (xhr.readyState==4 && xhr.status==200) {
                _this.onAfter(_this.fileInfo, JSON.parse(xhr.response));
            }
            if (xhr.status==500) {
                console.log(xhr.readyState);
                console.log("失败");
                _this.onError(_this.fileInfo);
            }
        };
        xhr.upload.onprogress = function(evt) {
            var loaded = evt.loaded;                         //已经上传大小情况
            var tot = evt.total;                             //附件总大小
            var per = Math.floor(100*loaded/tot);            //已经上传的百分比
            console.log(per);
            _this.progress = per +"%";
            _this.onGoing(_this.fileInfo, _this.progress);
        }
        xhr.send(formData);
    };
}


var addTopicsFn = function(){
	$("#addquestionlist-btn").bind('click',function(){
		creactQuestionList({
    		'modelTitle':'新建问题：'
    	});
	})
	//创建问题列表
	function creactQuestiontd($list,$warp,id){
		var id_ ; //创建不同时间id
		if (id) {
			id_ = id;
		} else {
			id_ = nowDateFn(7);
		}
		var info = JSON.stringify($list);
		var tr = "<tr id='"+id_+"'>"
					+"<td>"+$list[0]+"</td><td>"+$list[1]+"</td><td>"+$list[2].groupName+"</td>"
					+"<td class='hand'><span class='edit-btn' id='edit-btn"+id_+"' data-info='"+info+"'>编辑</span><span class='remove-btn' id='remove-btn"+id_+"'>删除</span></td>"
				+"</tr>";
		$($warp).append(tr);
		//点击编辑按钮
		$($warp).find("tr td.hand #edit-btn"+id_).bind('click',function(){
			var $info = JSON.parse($(this).attr('data-info'));
			creactQuestionList({'modelTitle':'编辑问题：','values':$info},id_);
			//$(this).parents('tr').empty().remove();
			if (id_) {
				//$("#edit-btn"+id).parent().parent().css("background-color","#e2e2e2");
				$("#"+id_).hide();
			}
		})
		//点击删除按钮
		$($warp).find("tr td.hand #remove-btn"+id_).bind('click',function(){
			$(this).parents('tr').empty().remove();
		})
	}
	//创建问题
	function creactQuestionList($arr, id){
		var arr1 = {'warp':'#creactQueueListbox','modelTitle':'新建问题：','values':['','',{"groupId":"","groupName":""},[]]}; //values本应为['','','',''],测试避免未填写而造成的无法提交
		var obj = $.extend({}, arr1, $arr);
		if ($(obj.warp+" .newQueueList").length==0) {
			var questionList = "<div class='newQueueList'>"
									+"<p class='model-title'>"+obj.modelTitle+"</p>"
									+"<i class='iconfont icon-guanbi closebox' id='closebox'></i>"
									+"<ul class='modifiedArea'>"
										+"<li class='list_' name='tbltopic'>"
											+"<label class='list_lt'><em>*</em>问题</label>"
											+"<div class='list_rt'><input id='questioninfo-1' value='"+obj.values[0]+"' class='input3' type='text' placeholder='请填写问题'></div>"
										+"</li>"
										+"<li class='list_' name='tbldescription'>"
											+"<label class='list_lt'><em>*</em>描述</label>"
											+"<div class='list_rt'><div class='textarea_cont textarea_cont3'><textarea id='questioninfo-2' type='text' placeholder='请填写主题描述'>"+obj.values[1]+"</textarea></div></div>"
										+"</li>"
										+"<li class='list_' name='tblgroups'>"
											+"<label class='list_lt'><em>*</em>分组</label>"
											+"<div class='list_rt'>"
												+"<div class='list_rt_tp'>"
												+"<input type='hidden' name='groupId' value='"+obj.values[2].groupId+"'/>"
													+"<input name='groupName' id='questioninfo-3' readonly value='"+obj.values[2].groupName+"' class='input3' type='text' placeholder='请选择分组'>"
													+"<span class='ButtonBtn' onclick='edit.goGroup(this)' id='selectDirectory'>分组</span>"
												+"</div>"
											+"</div>"
										+"</li>"
										+"<li class='list_' name='tblAddGroup' style='margin-bottom: 0px;'>"
										+"<label class='list_lt'></label>"
										+"<div class='list_rt'>"
											+"<div onclick='edit.goGroupSetting()' class='list_rt_tp addGroupIcon' >"
												+"新建分组"
											+"</div>"
										+"</div>"
										+"</li>"
										+"<li class='list_' name='tblfiles'>"
											+"<label class='list_lt'>附件</label>"
											+"<div class='list_rt btn-list'>"
											    +"<input type='file' style='display:none'/>"
												+"<span onclick='edit.upload(this)'><i class='iconfont icon-upload'></i><em>上传</em></span> <span class='open-line'>|</span>"
												+"<span onclick='edit.showResourcePoolFn(this)'><i class='iconfont icon-ziyuan'></i><em>资源库</em></span>"
											+"</div>"
										+"</li>";
										if (obj.values[3] != null && obj.values[3].length > 0) {
											for (var m = 0; m < obj.values[3].length; m ++) {
												var file = obj.values[3][m];
												questionList += "<li class='list_ files' style='margin-bottom:5px;'>"
						            			+"<input type='hidden' name='fileId' value='"+file.fileId+"'/>"
						            			+ "<input type='hidden' name='fileName' value='"+file.fileName+"'/>"
						            			+ "<input type='hidden' name='ext' value='"+file.ext+"'/>"
						            			+"<input type='hidden' name='md5' value='"+file.md5+"'/>"
						            			+ "<input type='hidden' name='sizeDisplay' value='"+file.sizeDisplay+"'/>"
						            			+"<input type='hidden' name='typeCode' value='"+file.contentTypeCode+"'/>"
						            			+ "<input type='hidden' name='typeName' value='"+file.contentTypeName+"'/>"
						            			+ "<input type='hidden' name='url' value='"+file.url+"'/>"
						            			+ "<input type='hidden' name='providerContentId' value='"+file.providerContentId+"'/>"
						            			+ "<label class='list_lt'></label>"
						            			+ "<div class='list_rt btn-list'>"
						            			+ "<span>"+file.fileName+"</span>"
						            			+ "<span style='color:red;' onclick='edit.remove(this)'>x</span>"
						            			+ "</div></li>"
											}
										}
										questionList += "</ul>"
									+"<article class='button-box question-btn-box'>"
										+"<span class='button-btn question-sure-btn'>提交</span>" +
												"<span class='button-btn enpty-btn'>清空</span>"
									+"</article>"
								+"</div>";
			$(obj.warp).append(questionList);
			$(obj.warp).find('.newQueueList').slideDown();
			//点击x按钮关闭问题创建
			$(obj.warp).find('.closebox').bind('click',function(){
				$(obj.warp).find('.newQueueList').slideUp(function(){
					$(obj.warp).find('.newQueueList').remove();
					$(obj.warp).empty();
					if (id) {
						//$("#edit-btn"+id).parent().parent().css("background-color","");
						$("#"+id).show();
					}
				});
			})
			//清空数据
			$(obj.warp).find('.enpty-btn').bind('click',function(){
				var li_length = $(".newQueueList .modifiedArea>li.list_").length;
				for (var i = 0;i<li_length;i++) {
					var thatli = $(".newQueueList .modifiedArea>li.list_").eq(i);
					thatli.find('#questioninfo-'+(i*1+1)).val('');//清空该选择
				}
			})
			
			
			//提交问题 
			$(".question-sure-btn").bind('click',function(){
				var valuelists = [];
				var li_length = $(".newQueueList .modifiedArea>li.list_").length;
				for (var i = 0;i<li_length;i++) {
					var thatli = $(".newQueueList .modifiedArea>li.list_").eq(i);
					var labelName = thatli.attr('name');
					if (labelName == 'tblfiles') {
						files = [];
						thatli.parent().find(".files").each(function(){
							var fileId = $(this).find("input[name='fileId']").val();
				        	var fileName = $(this).find("input[name='fileName']").val();
				        	var ext = $(this).find("input[name='ext']").val();
				        	var md5 = $(this).find("input[name='md5']").val();
				        	var providerContentId = $(this).find("input[name='providerContentId']").val();
				        	var size = $(this).find("input[name='sizeDisplay']").val();
				        	var contentTypeCode = $(this).find("input[name='typeCode']").val();
				        	var contentTypeName = $(this).find("input[name='typeName']").val();
				        	var url = $(this).find("input[name='url']").val();
				        	var fileObject = new Object();
				        	fileObject['fileId'] = fileId;
				        	fileObject['fileName'] = fileName;
				        	fileObject['ext'] = ext;
				        	fileObject['md5'] = md5;
				        	fileObject['providerContentId'] = providerContentId;
				        	fileObject['size'] = size;
				        	fileObject['contentTypeCode'] = contentTypeCode;
				        	fileObject['contentTypeName'] = contentTypeName;
				        	fileObject['url'] = url;
				        	files.push(fileObject);
						});
						valuelists.push(files);
					} else if (labelName == 'tbltopic' || labelName == 'tbldescription') {
						var val = thatli.find('#questioninfo-'+(i*1+1)).val(); //该选项的值
						var labelText = thatli.find('.list_lt').html().split('</em>')[1]; //该项的标题
						if(val.length==0){
							layer.tips('该'+labelText+'项必填,不能为空！','#questioninfo-'+(i*1+1), {
							  tips: [2, 'red'],
							  time: 2000
							});
							return false;
						}else{
							valuelists.push(val);
						}
					} else if (labelName == 'tblgroups'){
						var groupName = thatli.find('#questioninfo-'+(i*1+1)).val(); //该选项的值
						var labelText = thatli.find('.list_lt').html().split('</em>')[1]; //该项的标题
						if(groupName.length==0){
							layer.tips('该'+labelText+'项必填,不能为空！','#questioninfo-'+(i*1+1), {
							  tips: [2, 'red'],
							  time: 2000
							});
							return false;
						}else{
							var groupInfo = new Object();
							groupInfo['groupId'] = thatli.find("div").find("div").find("input[name='groupId']").val();
							groupInfo['groupName'] = groupName;
							valuelists.push(groupInfo);
						}
					}
				}
				$("#" + id).remove();
				creactQuestiontd(valuelists,'#queueListTable',id); //创建问题列表
				setTimeout(function(){ //延时删除创建问题模块
					$(obj.warp).find('.newQueueList').slideUp(function(){
						$(obj.warp).find('.newQueueList').remove();
						$(obj.warp).empty();
					});
				},500);
			})
		}
	}
}
addTopicsFn();