// 生成echart option 工具类，外部调用init*Option（如：initLineOption）方法， init*Data为内部使用类
// 折线图: initRadarData; 柱状图: initBarOption; 折线图+时间线: initLineWithTimeLineOption;
// 柱状图+饼图+时间线: initBarPieWithTimeLineOption; 雷达图: initRadarOption;
// 调用方法eg: 
// CommChartUtils.init();
// CommChartUtils.title = '折线图';
// CommChartUtils.legend = ['发作业','合作学习'];
// CommChartUtils.category = ['1987/06/05','1997/06/05', '1999/06/06','2000/06/05', '2000/06/06', '2000/06/07', '2000/06/08', '2000/06/09', '2000/06/10', '2000/06/11', '2000/06/14', '2000/06/15', '2000/06/18', '2000/06/20',  '2000/06/21'];;			
// CommChartUtils.series = [[{name: '发作业', type: 'line', data: ['55','44', '45', '116','110','80','56','0','0','56', '35', '96', '67', '56', '47']},{name: '合作学习', type: 'line', data: ['63','67', '55', '98','90','55','47','66','32','28', '66', '15', '44', '55', '43']}]];
// CommChartUtils.initLineOption();
var CommChartUtils = window.CommChartUtils = {
	scale: true,
	legend: '',
	category: '',
	series: '',  // 二维数组
	title:'',   // 标题
	subtext: '', // 副标题
	timelineData: '', 
	unit: '',   // 坐标轴对应的单位
	pieName: '', //多图表中，饼图名称
	legendBottom: false,
	maxIndicator: 100, // 雷达图最大指示值(为百分比时，最大值可设置为1或100，其他根据不同情况设置)
	rotate: 0,  // category显示斜率
	yCategory: false, // 类别显示在y轴
	markPoint: false, // 是否标记最大最小值（柱状图使用）
	markLine: false, // 是否标记平均值（柱状图使用）
	autoPlay: true,  // timeLines格式下，是否自动轮播
	showPie: true,  // 是否显示饼图
	percentFormatter: false,
	ragarRadius: '60%',
	grid: [{top: '10%', bottom: '10%', left: '10%', right:'10%'}], // 图表布局
	pieCenter: ['78%', '29%'],  // 多图中， 饼图显示的位置
	// 分裂线
	splitLine: false,
	showColorful: false, // 是否为多彩单柱状图
	// 默认颜色
	colors: ['#FD6820','#2EEA07','#cc3399', '#EEEC06','#0C8AEB','#07F3DA','#F79321', '#6F69F1', '#D74D0A','#0300FD'],
	//标题样式
	titleFontStyle: {fontSize: 14,color: '#fff',fontWeight:'normal'},
	fontStyle: {fontSize: 12,color: '#fff',fontWeight:'normal'},
	showDataZoom: false,
	indicators: [], // 雷达图中的指示器（多边形的名称定义）
	// 以下为内部类调用时使用的参数，外部赋值无效
	baseSeries: [], // timeline图表中使用
	options: [], // timeline图表中使用
	dataZoom: [], // 
	// 还原默认值
	init: function() {
		this.scale = true;
		this.legend = [];
		this.category = [];
		this.series = [];
		this.title = '';
		this.subtext = '';
		this.timelineData = ''; 
		this.unit = '';
		this.pieName = '';
		this.showDataZoom=false;
		this.splitLine=false;
		this.indicators = [];
		this.showColorful = false;
		this.rotate=null;
		this.markPoint=false;
		this.markLine=false;
		this.yCategory = false;
		this.grid = [{top: '10%', bottom: '10%', left: '10%', right:'10%'}];
		this.percentFormatter = false;
		this.legendBottom = false;
	},
	// 折线图
	initLineOption:function(){
		this.initLineData();
		var option = {
			title: [{
				text: this.title,
				subtext: this.subtext,
				textStyle: this.titleFontStyle 
			}],
			color: this.colors,
			toolbox: {
				show: true,
				feature: {
					magicType: {type: ['line', 'bar']},
					restore: {},
					saveAsImage: {}
				},
				iconStyle: {
					normal: {
						borderColor : this.fontStyle.color
					}
				}
			},
			tooltip: {
				trigger: 'axis',
				textStyle: this.fontStyle
			},
			legend: {
				data: this.legend,
				name: this.unit,
				textStyle: this.fontStyle 
			},
			xAxis: [{
				data: this.category,
				axisLine: {
					lineStyle: {
						color: this.fontStyle.color
					}
				},
				scale: this.scale,
				axisLabel: {        
					show: true,
					textStyle: this.fontStyle
				}
			}],
			yAxis: [{
				splitLine: {show: this.splitLine},
				name: this.unit,
				nameTextStyle: this.fontStyle,
				axisLine: {
					lineStyle: {
						color: this.fontStyle.color
					}
				},
				scale: this.scale,
				axisLabel: {        
					show: true,
					textStyle: this.fontStyle
				}
			}],
			dataZoom: this.dataZoom,
			grid: this.grid,
			series: this.series[0]
		};
		// 有设置倾斜度
		if (this.rotate) {
			var axisLabel = {
				interval: 0,
				rotate: this.rotate
			}
			option.xAxis[0].axisLabel = axisLabel;
		}
		if (this.legendBottom) {
			option.legend.bottom = 0;
		}
		return option;
	},
	initLineData: function() {
		for (var i in this.series) {
			var ob = new Object();
			for (var j in this.series[i]) {
				// 默认设置为true
				if (!this.series[i][j].smooth) {
					this.series[i][j].smooth = true;
				}
				if (!this.series[i][j].barWidth) {
					this.series[i][j].barWidth = 10;
				}
				if (!this.series[i][j].type) {
					this.series[i][j].type = 'line';
				}
				// 是否需要标记最大最小值
				if (this.markPoint) {
					var markPoint = {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					}
					this.series[i][j].markPoint = markPoint;
				}
				if (this.markLine) {
					var markLine = {
						data : [
							{type : 'average', name: '平均值'}
						]
					}
					this.series[i][j].markLine = markLine;
				}
			}
		}
		if (this.showDataZoom) {
			this.dataZoom = [{
				type: 'inside',
				start: 0,
				end: 100
			}, {
				start: 0,
				end: 100,
				handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z'
			}];
		}
		this.initLengend();
	},
	initLengend: function() {
		if (this.legend && this.legend.length > 0) {
			var legendNew = new Array();
			for (var i in this.legend) {
				var ob = new Object();
				ob.name = this.legend[i];
				ob.icon = "circle";
				legendNew.push(ob);
			}
			this.legend = legendNew;
		}
	},
	// 柱状图
	initBarOption:function(){
		this.initBarData();
		var option = {
			title: [{
				text: this.title,
				subtext: this.subtext,
				textStyle: this.titleFontStyle 
			}],
			color: this.colors,
			toolbox: {
				show: true,
				feature: {
					magicType: {type: ['line', 'bar']},
					restore: {},
					saveAsImage: {}
				},
				iconStyle: {
					normal: {
						borderColor : this.fontStyle.color
					}
				}
			},
			tooltip: {
				trigger: 'axis',
				textStyle: this.fontStyle
			},
			legend: {
				data: this.legend,
				name: this.unit,
				textStyle: this.fontStyle 
			},
			xAxis: [{
				type: 'category',
				splitLine: {show: this.splitLine},
				data: this.category,
				scale: this.scale,
				axisLine: {
					lineStyle: {
						color: this.fontStyle.color
					}
				},
				 axisLabel: {        
					show: true,
					textStyle: this.fontStyle
				}
			}],
			yAxis: [{
				type: 'value',
				splitLine: {show: this.splitLine},
				name: this.unit,
				scale: this.scale,
				axisLine: {
					lineStyle: {
						color: this.fontStyle.color
					}
				},
				axisLabel: {
				   textStyle: this.fontStyle,
				   formatter: "{value}"
				}
			}],
			dataZoom: this.dataZoom,
			grid: this.grid,
			series: this.series[0]
		};
		
		if (this.yCategory) {
			option.xAxis[0].type='value';
			option.xAxis[0].data=[];
			option.xAxis[0].name=this.unit;
			option.yAxis[0].type='category';
			option.yAxis[0].data= this.category;
			option.yAxis[0].name='';
			// 是否有设置倾斜度
			if (this.rotate) {
				var axisLabel = {
					textStyle: this.fontStyle,
					interval: 0,
					rotate: this.rotate
				}
				option.yAxis[0].axisLabel = axisLabel;
			}
		} else {
			// 是否有设置倾斜度
			if (this.rotate) {
				var axisLabel = {
					textStyle: this.fontStyle,
					interval: 0,
					rotate: this.rotate
				}
				option.xAxis[0].axisLabel = axisLabel;
			}
		}
		
		if (this.percentFormatter) {
			 option.yAxis[0].axisLabel.formatter='{value} %';
		}
		if (this.legendBottom) {
			option.legend.bottom = 0;
		}
		return option;
	},
	initBarData: function() {
		var _that = this;
		var itemStyle = { 
			normal: {
				 color: function(params) {
					 // build a color map as your need.
					 var colorList = _that.colors;
					 return colorList[params.dataIndex];
				 }
			}
		}
		for (var i in this.series) {
			var ob = new Object();
			// 多彩单柱状图
			if (this.series[i].length == 1 && this.showColorful) {
				this.series[i][0].itemStyle = itemStyle;
			}
			for (var j in this.series[i]) {			
				// 默认设置为true
				if (!this.series[i][j].smooth) {
					this.series[i][j].smooth = true;
				}
				if (!this.series[i][j].barWidth) {
					this.series[i][j].barWidth = 10;
				}
				if (!this.series[i][j].barGap) {
					this.series[i][j].barGap = '80%';
				}
				if (!this.series[i][j].barCategoryGap) {
					this.series[i][j].barCategoryGap = '50%';
				}
				if (!this.series[i][j].type) {
					this.series[i][j].type = 'bar';
				}
				if (!this.series[i][j].label) {
					var label = {normal: {
							textStyle: this.fontStyle,
							show: true,
							position: 'outside'
					}};
					if (this.yCategory) {
						label = {normal: {
							textStyle: this.fontStyle,
							show: true,
							position: 'right'
						}};
					}
					this.series[i][j].label = label;
				}
				
				// 是否需要标记最大最小值
				if (this.markPoint) {
					var markPoint = {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					}
					this.series[i][j].markPoint = markPoint;
				}
				if (this.markLine) {
					var markLine = {
						data : [
							{type : 'average', name: '平均值'}
						]
					}
					this.series[i][j].markLine = markLine;
				}
				
				if (this.percentFormatter) {
					var itemStyle = {normal: {label: {formatter:'{c}%'}}};
					this.series[i][j].itemStyle = itemStyle;
				}
		
			}
		}
	},
	initLineWithTimeLineData: function() {
		this.baseSeries = new Array();
		// 此时serises是二维数组
		for (var i in this.series[0]) {
			var base = new Object();
			base.name = this.series[0][i].name;
			base.type = 'line';
			this.baseSeries.push(base);
		}
		this.options = new Array();
		for (var i in this.series) {
			var ob = new Object();
			for (var j in this.series[i]) {
				// 默认设置为true
				if (!this.series[i][j].smooth) {
					this.series[i][j].smooth = true;
				}
				if (!this.series[i][j].barWidth) {
					this.series[i][j].barWidth = 10;
				}
				if (!this.series[i][j].type) {
					this.series[i][j].type = 'line';
				}
				if (!this.series[i][j].barGap) {
					this.series[i][j].barGap = '80%';
				}
				if (!this.series[i][j].barCategoryGap) {
					this.series[i][j].barCategoryGap = '50%';
				}
				// 是否需要标记最大最小值
				if (this.markPoint) {
					var markPoint = {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					}
					this.series[i][j].markPoint = markPoint;
				}
				if (this.markLine) {
					var markLine = {
						data : [
							{type : 'average', name: '平均值'}
						]
					}
					this.series[i][j].markLine = markLine;
				}
			}
			ob.series = this.series[i];
			var title = new Object;
			title.text = this.timelineData[i] + this.title;
			ob.title = title;
			this.options.push(ob);
		}
		this.initLengend();
	},
	// 折线图+时间线选择
	initLineWithTimeLineOption:function(){
		this.initLineWithTimeLineData();
		var option = {
			baseOption: {
				timeline: {
					axisType: 'category',
					autoPlay: this.autoPlay,
					playInterval: 1000,
					data: this.timelineData,
					lineStyle: this.fontStyle,
					label: this.fontStyle,
					controlStyle: { 
						normal: {
							borderColor: '#fff',
							color: '#fff'
						}
						
					}
				},
				color: this.colors,
				title: {
					subtext: this.subtext,
					textStyle: this.titleFontStyle 
				},
				toolbox: {
					show: true,
					feature: {
						magicType: {type: ['line', 'bar']},
						restore: {},
						saveAsImage: {}
					},
					iconStyle: {
						normal: {
							borderColor : this.fontStyle.color
						}
					}
				},
				legend: {
					x: 'center',
					data: this.legend,
					textStyle: this.fontStyle 
				},
				calculable : true,
				// 鼠标移动时显示的网格样式
				tooltip: {
					trigger: 'axis',
					textStyle: this.fontStyle
				},
				grid: this.grid,
				xAxis: [
					{
						type:'category',
						data: this.category,
						scale: this.scale,
						splitLine: {show: this.splitLine},
						axisLine: {
							lineStyle: {
								color: this.fontStyle.color
							}
						},
						 axisLabel: {        
							show: true,
							textStyle: this.fontStyle
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						scale: this.scale,
						splitLine: {show: this.splitLine},
						name: this.unit,
						axisLine: {
							lineStyle: {
								color: this.fontStyle.color
							}
						},
						 axisLabel: {        
							show: true,
							textStyle: this.fontStyle
						}
					}
				],
				series: this.baseSeries
			},
			options: this.options
		};
		// 有设置倾斜度
		if (this.rotate) {
			var axisLabel = {
				interval: 0,
				rotate: this.rotate
			}
			option.baseOption.xAxis[0].axisLabel = axisLabel;
		}
		if (this.legendBottom) {
			option.legend.bottom = 0;
		}
		return option;
	},
	// 柱状图+饼图+时间线
	initBarPieWithTimeLineOption: function() {
		// 值为空
		if (!this.series || this.series.length == 0) {
			return null;
		}
		// 多柱状图
		if (this.series[0].length > 1) {
			this.initMultiBarPieWithTimeLineData();
		} else {
			// 单柱状图
			this.initSimpleBarPieWithTimeLineData();
		}	
		var option = {
			baseOption: {
				timeline: {
					axisType: 'category',
					autoPlay: this.autoPlay,
					playInterval: 1000,
					data: this.timelineData,
					lineStyle: this.fontStyle,
					label: this.fontStyle,
					controlStyle: { 
						normal: {
							borderColor: '#fff',
							color: '#fff'
						}
						
					}
				},
				color: this.colors,
				title: {
					subtext: this.subtext,
					textStyle: this.titleFontStyle 
				},
				tooltip: {
					trigger: 'axis',
					textStyle: this.fontStyle
				},
				legend: {
					x: 'right',
					data: this.legend,
					textStyle: this.fontStyle 
				},
				calculable : true,
				// 鼠标移动时显示的网格样式
				grid: {
					top: this.grid[0].top,
					bottom: this.grid[0].bottom,
					left: this.grid[0].left,
					right: this.grid[0].right,
					tooltip: {
						trigger: 'axis',
						textStyle: this.fontStyle,
						axisPointer: {
							type: 'shadow',
							label: {
								show: true,
								formatter: function (params) {
									return params.value.replace('\n', '');
								}
							}
						}
					}
				},
				xAxis: [
					{
						type:'category',
						scale: this.scale,
						data: this.category,
						splitLine: {show: this.splitLine},
						axisLine: {
							lineStyle: {
								color: this.fontStyle.color
							}
						},
						 axisLabel: {        
							show: true,
							textStyle: this.fontStyle
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						scale: this.scale,
						splitLine: {show: this.splitLine},
						name: this.unit,
						axisLine: {
							lineStyle: {
								color: this.fontStyle.color
							}
						},
						 axisLabel: {        
							show: true,
							textStyle: this.fontStyle
						}
					}
				],
				series: this.baseSeries
			},
			options: this.options
		};
		// 有设置倾斜度
		if (this.rotate) {
			var axisLabel = {
				textStyle: this.fontStyle,
				interval: 0,
				rotate: this.rotate
			}
			option.baseOption.xAxis[0].axisLabel = axisLabel;
		}
		if (this.legendBottom) {
			option.legend.bottom = 0;
		}
		return option;
		
	},
	initSimpleBarPieWithTimeLineData: function() {
		if (!this.series || this.series.length == 0) {
			return;
		}
		this.baseSeries = new Array();
		// 此时serises是二维数组
		// 饼图
		var pieSerie = {
			name: this.pieName,
			type: 'pie',
			center: this.pieCenter,
			radius: '28%',
			tooltip : {
				trigger: 'item',
				textStyle: this.fontStyle,
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			z: 100
		}
		for (var i in this.series[0]) {
			var base = new Object();
			base.name = this.series[0][i].name;
			base.type = 'bar';
			this.baseSeries.push(base);
		}
		if (this.showPie) {
			this.baseSeries.push(pieSerie); // 添加饼图
		}
		
		var _that = this;
		var itemStyle = { 
			normal: {
				 color: function(params) {
					 // build a color map as your need.
					 var colorList = _that.colors;
					 return colorList[params.dataIndex];
				 }
			}
		}
		this.options = new Array();
		for (var i in this.series) {
			var sumSeries = new Array();
			if (!this.series[i][0].barWidth) {
				this.series[i][0].barWidth = 10;
			}
			if (!this.series[i][0].barGap) {
				this.series[i][0].barGap = '80%';
			}
			if (!this.series[i][0].barCategoryGap) {
				this.series[i][0].barCategoryGap = '50%';
			}
				
			// 是否需要标记最大最小值
			if (this.markPoint) {
				var markPoint = {
					data : [
						{type : 'max', name: '最大值'},
						{type : 'min', name: '最小值'}
					]
				}
				this.series[i][0].markPoint = markPoint;
			}
			if (this.markLine) {
				var markLine = {
					data : [
						{type : 'average', name: '平均值'}
					]
				}
				this.series[i][0].markLine = markLine;
			}
			
			if (this.showColorful) {
				this.series[i][0].itemStyle = itemStyle;
			}
			if (this.showPie) {
				for (var k in this.series[i][0].data) {
					var sumObject = new Object();
					sumObject.name = this.category[k];
					sumObject.value = this.series[i][0].data[k];
					sumSeries.push(sumObject);
				}
				var sumData = new Object();
				sumData.data = sumSeries;
				this.series[i].push(sumData);
			}
			if (!this.series[i][0].label) {
				var label = {normal: {
						show: true,
						position: 'outside'
				}};
				this.series[i][0].label = label;
			}
			var ob = new Object();
			ob.series = this.series[i];
			var title = new Object;
			title.text = this.timelineData[i] + this.title;
			ob.title = title;
			this.options.push(ob);
		}		
	},
	// 多柱状图+饼图+时间线, 饼图显示baseSeries中各类型总和占比
	initMultiBarPieWithTimeLineData: function() {
		if (!this.series || this.series.length == 0) {
			return;
		}
		this.baseSeries = new Array();
		// 此时serises是二维数组
		// 饼图
		var pieSerie = {
			name: this.pieName,
			type: 'pie',
			center: this.pieCenter,
			radius: '28%',
			tooltip : {
				trigger: 'item',
				textStyle: this.fontStyle,
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			z: 100
		}
		for (var i in this.series[0]) {
			var base = new Object();
			base.name = this.series[0][i].name;
			base.type = 'bar';
			this.baseSeries.push(base);
		}
		if (this.showPie) {
			this.baseSeries.push(pieSerie); // 添加饼图
		}
		
		this.options = new Array();
		for (var i in this.series) {
			if (this.showPie) {
				var sumSeries = new Array();
				// 计算和
				for (var j in this.series[i]) {
					var sumObject = new Object();
					sumObject.name = this.series[i][j].name;
					var total = 0;
					for (var k in this.series[i][j].data) {
						total += parseFloat(this.series[i][j].data[k]);
					}
					sumObject.value = total;
					sumSeries.push(sumObject);
					
					
					if (!this.series[i][j].barWidth) {
						this.series[i][j].barWidth = 10;
					}
					if (!this.series[i][j].barGap) {
						this.series[i][j].barGap = '80%';
					}
					if (!this.series[i][j].barCategoryGap) {
						this.series[i][j].barCategoryGap = '50%';
					}
				
					// 是否需要标记最大最小值
					if (this.markPoint) {
						var markPoint = {
							data : [
								{type : 'max', name: '最大值'},
								{type : 'min', name: '最小值'}
							]
						}
						this.series[i][j].markPoint = markPoint;
					}
					if (this.markLine) {
						var markLine = {
							data : [
								{type : 'average', name: '平均值'}
							]
						}
						this.series[i][j].markLine = markLine;
					}
					if (!this.series[i][j].label) {
						var label = {normal: {
								show: true,
								position: 'outside'
						}};
						this.series[i][j].label = label;
					}
				}
				var sumData = new Object();
				sumData.data = sumSeries;
				this.series[i].push(sumData);
			}
			var ob = new Object();
			ob.series = this.series[i];
			var title = new Object;
			title.text = this.timelineData[i] + this.title;
			ob.title = title;
			this.options.push(ob);
		}		
	},
	// 雷达图
	initRadarOption: function() {
		this.initRadarData();
		var option = {
			title: {
				text: this.title,
				textStyle: this.titleFontStyle
			},
			tooltip: {
				trigger: 'axis',
				textStyle: this.fontStyle
			},
			toolbox: {
				show: true,
				feature: {
					restore: {},
					saveAsImage: {}
				},
				iconStyle: {
					normal: {
						borderColor : this.fontStyle.color
					}
				}
			},
			legend: {
				x: 'center',
				data:this.legend,
				textStyle: this.fontStyle 
			},
			color: this.colors,
			radar: [
				{
					indicator: this.indicators,
					radius: this.ragarRadius
				}
			],
			series: this.series[0]
		};
		if (this.legendBottom) {
			option.legend.bottom = 0;
		}
		return option;
	},
	initRadarData: function() {
		if (!this.series || this.series.length == 0) {
			return;
		}
		// 定义雷达图指示器
		if (!this.indicators || this.indicators.length == 0) {
			if (this.category && this.category.length > 0) {
				for (var i in this.category) {
					var ob = new Object();
					ob.text = this.category[i];
					ob.max = this.maxIndicator;
					this.indicators.push(ob);
				}
			}
		}
		var data = new Array();
		for (var i in this.series[0]) {
			var ob = new Object();
			ob.value = this.series[0][i].data;
			ob.name = this.series[0][i].name;
			data.push(ob);
		}
		var seriessNew = new Array();
		var seriesNew = new Object();
		seriesNew.itemStyle = {normal: {areaStyle: {type: 'default'}}};
		seriesNew.type = 'radar';
		seriesNew.data = data;
		seriessNew.push(seriesNew);
		this.series = new Array();
		this.series.push(seriessNew);
	}
	
	
} 

