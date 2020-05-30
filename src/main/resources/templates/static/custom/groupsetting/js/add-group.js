var AddGroup = window.AddGroup = {
	strategyResultV2VO : '',
	groupMembers : '',
	extentionInfos : '',
	init : function() {
		this.initEvent();
	},
	initEvent : function() { // 初始化事件
		var _this = this;
		if(_this.strategyResultV2VO.groupAmount != null && _this.strategyResultV2VO.groupingModelInt == 0){
			_this.initGroupManual();
		}
		if(_this.strategyResultV2VO.groupAmount != null && _this.strategyResultV2VO.groupingModelInt == 1){
			_this.initGroupRandom();
		}
	},
	//手动
	initGroupManual : function(){
		var _this = this;
		var roles = _this.strategyResultV2VO.roles;
		var groupNumbers = 0;//群组数量
		if(_this.extentionInfos !=null && _this.extentionInfos.length > 0){
			groupNumbers = _this.extentionInfos.length;
		}
		var ManualHtml = '<div class="slot border-green empty-slot"></div>';
			for(var i = 1; i <= groupNumbers; i++){
				var groupInfo = _this.extentionInfos[i-1].groups;
				var appendHtml = '<div class="col-lg-2 r" style="width: 258px; float: left;height: 344px">'
					+ '<div class="slot-title bg-green" id="' + groupInfo.groupId + '">'
					+ i+ '组</div>';
//				var groupHtml='<div class="slot-title bg-green">'+i+'组</div>';
				var pHtml = '<div class="col-lg-5 pd0 select-role style="height:344px">';
				var groupRoleHtml= '';
				for (var m = 0; m < roles.length; m++) {
					var n =i +""+roles[m].code;
					pHtml += '<p id="' + roles[m].code + '">' + roles[m].name+'</p>';
				}
				appendHtml += pHtml+'</div>'+groupRoleHtml+ManualHtml+ '</div>';
				if($(".col-lg-2.r").length > 1){
					$(".col-lg-2.r").eq(i-2).after(appendHtml);
				}
				else{
					$(".col-lg-2.l").after(appendHtml);
				}
		}
	},
	//手动
//	initGroupManual : function(){
//		var _this = this;
//		var roles = _this.strategyResultV2VO.roles;
//		var ManualHtml = '<div class="slot border-green empty-slot"></div>';
//			for(var i = 1; i <= _this.strategyResultV2VO.groupAmount; i++){
//				var appendHtml = '<div class="col-lg-2 r" style="width: 258px; float: left;height: 344px">'
//					+ '<div class="slot-title bg-green">'
//					+ i+ '组</div>';
//				var groupHtml='<div class="slot-title bg-green">'+i+'组</div>';
//				var pHtml = '<div class="col-lg-5 pd0 select-role style="height:344px">';
//				var groupRoleHtml= '';
//				for (var m = 0; m < roles.length; m++) {
//					var n =i +""+roles[m].code;
//					pHtml += '<p id="' + roles[m].code + '">' + roles[m].name+'</p>';
//				}
//				appendHtml += pHtml+'</div>'+groupRoleHtml+ManualHtml+ '</div>';
//				if($(".col-lg-2.r").length > 1){
//					$(".col-lg-2.r").eq(i-2).after(appendHtml);
//				}
//				else{
//					$(".col-lg-2.l").after(appendHtml);
//				}
//		}
//	},
	//随机
	initGroupRandom : function(){
		var _this = this;
		var roles = _this.strategyResultV2VO.roles;
		var roles = _this.strategyResultV2VO.roles;
		var groupNumbers = 0;//群组数量
		if(_this.extentionInfos !=null && _this.extentionInfos.length > 0){
			groupNumbers = _this.extentionInfos.length;
		}
		var ManualHtml = '<div class="slot border-green empty-slot"></div>';
			for(var i = 1; i <= groupNumbers; i++){
				var groupInfo = _this.extentionInfos[i-1].groups;
				var appendHtml = '<div class="col-lg-2 r" style="width: 258px; float: left;height: 344px">'
					+ '<div class="slot-title bg-green" id="' + groupInfo.groupId + '">'
					+ i+ '组</div>';
//				var groupHtml='<div class="slot-title bg-green" id="' + groupInfo.groupId + '">'+i+'组</div>';
				var pHtml = '<div class="col-lg-5 pd0 select-role style="height: 344px"">';
				var groupRoleHtml= '';
				for (var m = 0; m < roles.length; m++) {
					var n = i +""+roles[m].code;
					pHtml += '<p id="' + roles[m].code + '">' + roles[m].name+'</p>';
				}
				appendHtml += pHtml+'</div>'+groupRoleHtml+ManualHtml+ '</div>';
				if($(".col-lg-2.r").length > 1){
					$(".col-lg-2.r").eq(i-2).after(appendHtml);
				}
				else{
					$(".col-lg-2.l").after(appendHtml);
				}
				var groupMembers = _this.groupMembers;
				//加载人员
				//1.策略组成员为空(初始状态不处理)
				//2.策略组成员小于等于角色数量
				if(groupMembers[i] != null && groupMembers[i].length <= roles.length ){
					var memberHtml = '<ul class="slot-list">';
					for(var k = 0;k < roles.length; k++){
						var members = groupMembers[i];
						if(members[k] != null && members[k]!=undefined){
						memberHtml+='<li class="slot-item""><div class="slot-handler">'
						+ '<div class="slot-handler clearfix"><div class="content"><div class="item-title"'
						+ 'id="' + members[k].userId + '" groupId="'
						+ members[k].groupId + '" groupName="'
						+ members[k].groupId + '" groupRole="' +members[k].groupRole+'">'
						+ members[k].fullName
						+ '</div></div></div></li>'; 
						}
					}
					$(".slot.border-green.empty-slot").append(memberHtml);
					memberHtml+='</ul>';
					$(".slot.border-green.empty-slot").removeClass("empty-slot");
				}
				//3.策略组成员大于角色数量
				if(groupMembers[i] != null && groupMembers[i].length > roles.length ){
					var memberHtml = '';
					//初始化角色成员信息
					var memberHtml ='<ul class="slot-list">';
					for(var k = 0;k < roles.length; k++){
						var members = groupMembers[i];
						memberHtml +='<li class="slot-item""><div class="slot-handler">'
						+ '<div class="slot-handler clearfix"><div class="content"><div class="item-title"'
						+ 'id="' + members[k].userId + '" groupId="'
						+ members[k].groupId + '" groupName="'
						+ members[k].groupId + '" groupRole="' +members[k].groupRole+'">'
						+ members[k].fullName
						+ '</div></div></div></li>';
					}
					for(var j = roles.length;j < groupMembers[i].length; j++){
						var generalMembers = groupMembers[i];
						memberHtml +='<li class="slot-item""><div class="slot-handler">'
						+ '<div class="slot-handler clearfix"><div class="content"><div class="item-title"'
						+ 'id="' + generalMembers[j].userId + '" groupId="'
						+ generalMembers[j].groupId + '" groupName="'
						+ generalMembers[j].groupId + '" groupRole="' +generalMembers[j].groupRole+'">'
						+ generalMembers[j].fullName
						+ '</div></div></div></li>'; 
					}
					$(".slot.border-green.empty-slot").append(memberHtml+"</ul>");
					$(".slot.border-green.empty-slot").removeClass("empty-slot");
				}
			}
		}	
};
