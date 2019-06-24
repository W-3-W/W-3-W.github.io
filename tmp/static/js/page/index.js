app.onload = function () {
    var para = {
        'key1': 'key',
    };
    AppUtil.GetVar(para, function (res) {
        wxApp.key = res.key
    })
}