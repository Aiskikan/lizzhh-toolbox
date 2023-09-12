//定义常用工具/常量
var $ = (window["lizzhh"] = {});
(!function () {
    function toast(msg, doAction, msgType = "success", timeout = 1000, position = "top-right", closeButton = true, showIcon = true) {
        doAction({
            "ignoreError": false,
            "actionType": "toast",
            "args": {
                "msgType": msgType,
                "position": position,
                "closeButton": closeButton,
                "showIcon": showIcon,
                "msg": "Success: " + msg,
                "timeout": timeout,
                "className": "theme-toast-action-scope"
            }
        });
    }
    function toast_error(msg, doAction) {
        toast("Error: " + msg, doAction, "error", 2000);
    }
    function toast_success(msg, doAction) {
        toast("Success: " + msg, doAction, "success", 1000);
    }
    function load_js(url, callback) {
        if ($['_JSLOADER_LIST'] == undefined) $['_JSLOADER_LIST'] = [];
        if ($['_JSLOADER_LIST'].indexOf(url) != -1) return;
        $['_JSLOADER_LIST'].push(url);
        var script = document.createElement("script");
        var fun = callback || function () { };
        script.type = "text/javascript";
        script.onload = function () {
            fun();
        };
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    function set_value(id, value, doAction) {
        doAction({
            "actionType": "setValue",
            "componentId": id,
            "args": {
                "value": value
            }
        })
    }
    //export
    $['utils'] = {}
    $['func'] = {}
    var export_list = [toast, toast_error, toast_success, load_js, set_value];
    for (var i = 0; i < export_list.length; i++) {
        $['utils'][export_list[i].name] = export_list[i];
    }
}())