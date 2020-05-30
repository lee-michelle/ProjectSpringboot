var EditGroup = window.EditGroup = {
	extentionInfos : '',
	strategyResultV2VO : '',
	groups : '',
	groupMembers : '',
	init : function() {
		this.initEvent();
	},
	initEvent : function() { // 初始化事件
		var _this = this;
		var extentionInfos = _this.extentionInfos;
		// //分组策略的群组信息不为空
		if (extentionInfos != null && extentionInfos.length > 0) {
			_this.initGroupNotNull();
		}
////		if (extentionInfos == null
////				&& _this.strategyResultV2VO.groupAmount != null
////				&& _this.strategyResultV2VO.groupingModelInt == 0) {
////			_this.initGroupManual();
////		}
////		if (extentionInfos == null
////				&& _this.strategyResultV2VO.groupAmount != null
////				&& _this.strategyResultV2VO.groupingModelInt == 1) {
////			_this.initGroupRandom();
////		}
//		if (extentionInfos != null
//				&& _this.strategyResultV2VO.groupAmount != null
//				&& _this.strategyResultV2VO.groupingModelInt == 0) {
//			_this.initGroupManual();
//		}
//		if (extentionInfos != null
//				&& _this.strategyResultV2VO.groupAmount != null
//				&& _this.strategyResultV2VO.groupingModelInt == 1) {
//			_this.initGroupRandom();
//		}
		$("#index").contents().find(".col-lg-2.r:not(:last)").each(function(i) {
    		var memberHeigth = $(this).find(".col-lg-5.pd0.select-role").find("p").length;
    		$(this).find(".slot.border-green.empty-slot").style.heigth = memberHeigth*35+"px";
    	});
	},
	// 分组策略的群组信息不为空
	initGroupNotNull : function() {
		var _this = this;
		var extentionInfos = _this.extentionInfos;
		for (var i = 0; i < extentionInfos.length; i++) {
			var groupInfo = _this.extentionInfos[i].groups;
			var j = i + 1;
			var appendHtml = '<div class="col-lg-2 r" style="width: 258px; float: left;height: 344px">'
				+ '<div class="slot-title bg-green"  id="' + groupInfo.groupId + '">'
				+ j+ '组</div>';
			var pHtml = '<div class="col-lg-5 pd0 select-role style="height: 344px"">';
			var groupRoleHtml ='<div class="slot border-green empty-slot"></div>';
			// 角色信息
			var roles = new Array;
			if (_this.strategyResultV2VO != null
					&& _this.strategyResultV2VO.roles != null
					&& _this.strategyResultV2VO.roles.length > 0) {
				roles = _this.strategyResultV2VO.roles;
				
				for (var m = 0; m < roles.length; m++) {
					var n = j +""+roles[m].code;
					pHtml += '<p id="' + roles[m].code + '">' + roles[m].name+'</p>';
					
				}
				pHtml += '</div>'+groupRoleHtml;
				appendHtml += pHtml+ '</div>';
				if($(".col-lg-2.r").length > 1){
					$(".col-lg-2.r").eq(i-1).after(appendHtml);
				}
				else{
					$(".col-lg-2.l").after(appendHtml);
				}
			}else{//无群组信息
				var pHtml = '<div class="col-lg-5 pd0 select-role style="height: 344px""></div>';
				appendHtml += pHtml+groupRoleHtml;
				if($(".col-lg-2.r").length > 1){
					$(".col-lg-2.r").eq(i-1).after(appendHtml);
				}
				else{
					$(".col-lg-2.l").after(appendHtml);
				}
			}
			// 群组信息
			if (extentionInfos[i].groups != null) {
				// 群组成员
				var groupMemberHtml = '';
				if (extentionInfos[i].groups.members != null
						&& extentionInfos[i].groups.members.length > 0) {
					var members = extentionInfos[i].groups.members;
					
					//角色成员
					var groupHtml = '';
					var number = 0;
					for (var m = 0; m < roles.length; m++) {
						for (var n = 0; n <members.length ; n++) {
							if(members[n].groupRole !=null && members[n].groupRole != '0' 
								&&  members[n].userId !=null && members[n].userId !='' 
								&&	roles[m].code == members[n].groupRole){
								if(groupHtml == ''){
									groupHtml += '<ul class="slot-list">';
								}
								var j=i+1;
							    groupHtml +='<li class="slot-item""><div class="slot-handler">'
								+ '<div class="slot-handler clearfix"><div class="content"><div class="item-title"'
								+ 'id="' + members[n].userId + '" groupId="'
								+ members[n].groupId + '" groupName="'
								+ members[n].groupId + '" groupRole="' +members[n].groupRole+'">'
								+ members[n].fullName
								+ '</div></div></li>';
							    number++ ;
							}
						}
					}
					//普通成员
					var groupMormalHtml = '';
					for (var n = 0; n <members.length ; n++) {
						if(members[n].groupRole == '0'){
							if(groupHtml == ''){
								groupHtml = '<ul class="slot-list">';
								groupMormalHtml += '<ul class="slot-list">';
							}
							groupMormalHtml +='<li class="slot-item""><div class="slot-handler">'
								+ '<div class="slot-handler clearfix"><div class="content"><div class="item-title"'
								+ 'id="' + members[n].userId + '" groupId="'
								+ members[n].groupId + '" groupName="'
								+ members[n].groupId + '" groupRole="' +members[n].groupRole+'">'
								+ members[n].fullName
								+ '</div></div></div></li>';
						}
					}
					if(groupHtml != ''){
						groupHtml+=groupMormalHtml+'</ul>';
					}
					$(".col-lg-2.r").eq(i).find(".slot.border-green.empty-slot").append(groupHtml);
					if(number > 0){
						$(".col-lg-2.r").eq(i).find(".slot.border-green.empty-slot").removeClass("empty-slot");
					}
				}
			}
		}
	},
	// 分组策略群组为空--手动
	initGroupManual : function() {
		var _this = this;
		var groupAmount = _this.strategyResultV2VO.groupAmount;
		var appendHtml = '';
		var groupHtml = '';
		var pHtml = '<div class="col-lg-5 pd0 select-role style="height: 344px">';
		for (var i = 0; i < groupAmount; i++) {
			if (_this.strategyResultV2VO != null
					&& _this.strategyResultV2VO.roles != null
					&& _this.strategyResultV2VO.roles.length > 0) {
				var roles = _this.strategyResultV2VO.roles;
				for (var m = 0; m < roles.length; m++) {
					pHtml += '<p id="' + roles[m].code + '">"' + roles[m].name
							+ '"</p>';
				}
				pHtml += '</div>';
			}
			// 角色
			appendHtml += '<div class="col-lg-2 r" style="width: 258px; float: left">'
					+ '<div class="slot-title bg-green" >"'
					+ i
					+ '"组</div>'
					+ pHtml
					+ '<div class="slot border-green empty-slot"></div></div>';
		}
		$(".col-lg-2.l").after(appendHtml);
	},
	// 分组策略群组为空--随机
	initGroupRandom : function() {
		var _this = this;
		var groupMembers = _this.groupMembers;
		var groupAmount = _this.strategyResultV2VO.groupAmount;
		for (var i = 0; i < groupAmount; i++) {
			var j = i + 1;
			var appendHtml = '';
			var pHtml = '<div class="col-lg-5 pd0 select-role style="height: 344px"">';
			var groupHtml = '<div class="slot border-green" ><ul class="slot-list">';
			if (_this.strategyResultV2VO != null
					&& _this.strategyResultV2VO.roles != null
					&& _this.strategyResultV2VO.roles.length > 0) {
				var roles = _this.strategyResultV2VO.roles;
				for (var m = 0; m < roles.length; m++) {
					pHtml += '<p id="' + roles[m].code + '">' + roles[m].name
							+ '</p>';
				}
				pHtml += '</div>';
			}
			var groupMember = groupMembers[j];
			
			for (var n = 0; n < groupMember.length; n++) {
				groupHtml += '<li class="slot-item""><div class="slot-handler">'
						+ '<div class="slot-handler clearfix"><div class="content"><div class="item-title"'
						+ 'id="'
						+ groupMember[n].userId
						+ '" groupId="'
						+ groupMember[n].groupId
						+ '" groupName="'
						+ groupMember[n].groupId 
						+'" groupRole="' 
						+groupMember[n].groupRole+
						+ '">'
						+ groupMember[n].fullName
						+ '</div></div></div></li>';
			}
			groupHtml += '</ul></div>'
			//角色
			appendHtml += '<div class="col-lg-2 r" style="width: 258px; float: left">'
					+ '<div class="slot-title bg-green">'
					+ j
					+ '组</div>'
					+ pHtml + groupHtml + '</div>';
			$(".col-lg-2.l").after(appendHtml);
		}
	}
};
