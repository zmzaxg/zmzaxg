$(function () {
    /* 使用ajax异步提交请求数据，响应数据（回调函数） */
    $.get("../tb/1.html",function (data) {
        $("#tb1h").html(data);
    });
    $.get("../nr/1.html",function (data) {
        $("#nr1h").html(data);
    });
});
