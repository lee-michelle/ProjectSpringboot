/**
 * 自定义对话框
 */
(function ( /*importstart*/ ) {
    var scripts = document.getElementsByTagName('script'),
        length = scripts.length,
        src = scripts[length - 1].src,
        pos = src.indexOf('/static/'),
        //scriptPath = src.substr(0, pos)+'component_module/'; //引用文件路径
        scriptPath = src.substr(0, pos); //引用文件路径
    if (!window.importScriptList) window.importScriptList = {};
    window.importScript = function (filename) {
        if (!filename) return;
        if (filename.indexOf("http://") == -1 && filename.indexOf("https://") == -1) {
            if (filename.substr(0, 1) == '/') filename = filename.substr(1);
            filename = scriptPath + filename;
        }
        if (filename in importScriptList) return;
        importScriptList[filename] = true;
        document.write('<script src="' + filename + '" type="text/javascript"><\/' + 'script>');
    }
})( /*importend*/ );

importScript('component_module/jDialog/jquery.drag.js');
importScript('component_module/jDialog/jquery.mask.js');
importScript('component_module/jDialog/jquery.dialog.js');