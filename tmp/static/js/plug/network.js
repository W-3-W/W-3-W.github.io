
function GetRequestLoading(successfn, errorfn) {
    LoadingBox.Show(0);
    $.ajax("http://sibohui.top:8881/wjOrderRecord1",{
        type:"GET",
        dataType:"json",
        timeout: 2000,
        success:function (data) {
            //alert(JSON.stringify(data));
            if(successfn!='') successfn();
        },
        error:function (textStatus) {
            //alert("fail");
            if(errorfn!='') errorfn();
        },
        complete:function(XMLHttpRequest,textStatus){
            LoadingBox.Hide();
        }
    });
}

function GetRequest(successfn, errorfn) {
    $.ajax("http://sibohui.top:8881/wjOrderRecord1",{
        type:"GET",
        dataType:"json",
        success:function (data) {
            //alert(JSON.stringify(data));
            if(successfn!='') successfn();
        },
        error:function (textStatus) {
            //alert("fail");
        },
        complete:function(XMLHttpRequest,textStatus){

        }
    });
}