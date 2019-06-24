

var LoadingBox = {

    /**
     * 显示加载框
     * duration - 动画时间
     * message  - 消息内容
     */
    ShowWithMessage: function(duration,message) {
        /*
         <div class="overlay-container" id="loadingBox">
         <div class="ui-ios-overlay">
         <div class="skype-loader">
         <div class="dot">
         <div class="first"></div>
         </div>
         <div class="dot"></div>
         <div class="dot"></div>
         <div class="dot"></div>
         </div>
         <span class="title">Logging in...</span>
         </div>
         </div>
         */

        var box = document.getElementById("loadingBox");
        if(box==null) {
            box =  document.createElement("div");
            box.id = "loadingBox";
            box.setAttribute("class","overlay-container");
            box.innerHTML = "<div class=\"ui-ios-overlay\">" +
            "   <div class=\"skype-loader\">" +
            "      <div class=\"dot\">" +
            "         <div class=\"first\"></div>" +
            "      </div>" +
            "      <div class=\"dot\"></div>" +
            "      <div class=\"dot\"></div>" +
            "      <div class=\"dot\"></div>" +
            "   </div>" +
            "   <span class=\"title\">"+message+"</span>" +
            "</div>";
            document.body.appendChild(box);
        }

        if(duration>0) {
            setTimeout(function() {
                LoadingBox.Hide();
            },duration);
        }
    },

    /**
     * 显示加载框
     * duration - 动画时间
     */
    Show: function(duration) {
        LoadingBox.ShowWithMessage(duration,"加载中...");
    },

    /**
     * 关闭加载框
     */
    Hide: function () {
        var box = document.getElementById("loadingBox");
        if(box!=null) {
            $("div#loadingBox").remove();
        }
    }

};