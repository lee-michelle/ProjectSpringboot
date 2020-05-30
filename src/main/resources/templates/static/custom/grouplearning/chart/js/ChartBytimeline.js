// 根据多个echart option 生成时间线切换html;
// obj：timeline区块对应的父级区块; options: echarts对应的option数组; 
// timelineTypes：时间线显示的类型数组; 
// startItem: 初始显示的类型序号（默认为1, 取值为1~timelineTypes.length、first、last）
// eg: generateTimeline($("#timeline_div"), options, timelineTypes);
function generateTimeline(obj, options, timelineTypes, index, startItem) {
	var height = $(obj).height();
	$(obj).html(generateTimelineHTML(timelineTypes, height-45, index));
	// 根据option生成图表
	
	for (var i in timelineTypes) {
		var myChart = echarts.init($(obj).find(".timeline-item").eq(i)[0]);
		myChart.setOption(options[i]);
	}
	if (!startItem) {
		startItem = '1'
	}
	// 生成timeline
	$(obj).find('.timeline').Timeline({
		startItem: startItem
	});
}

// 先生成timeline html
function generateTimelineHTML(timelineTypes, height, index) {
	var html = '<div class="timeline-container timeline-theme-2"><div class="timeline timeline-small-box';
	if (index) {
		html+='timeline' + index;
	}
	html+= '">';
	for (var i in timelineTypes) {
		html += '<div class="timeline-item" data-time="'+timelineTypes[i]+'" style="height:' + height + 'px;">123</div>';
	}
	html+= '</div></div>';
	return html;
}