/**
 * 打开iframe窗口
 * @param url 地址
 * @param title 标题
 * @param width 宽度
 * @param hight 高度
 * @returns 对话框
 */
function openDialog(url, title, width, hight) {
	var dialog = jDialog.iframe(url,{
		title : title,
		width : width,
		height : hight
	});
	return dialog;
}

/**
 * 打开iframe窗口
 * @param url 地址
 * @param title 标题
 * @param width 宽度
 * @param hight 高度
 * @returns 对话框
 */
function showConfirm(title, content, okFunc, cancelFunc) {
	var dialog = jDialog.confirm(content, {
		handler : okFunc ? okFunc : function(button, dialog) {
			dialog.close();
		}
	}, {
		handler : cancelFunc ? cancelFunc : function(button, dialog) {
			dialog.close();
		}
	}, {
		title : title
	});
	return dialog;
}