/**
 * 
 * @param {string} toast显示内容。
 * @param {int} toast显示时间，毫秒。
 * @param {string} toast显示的方式。可选（center、flex-end）center:屏幕正中显示。flex-end：屏幕底部显示默认。
 */
function showToast(text,time,position) {
	/*
	 <div id="toast">
	   <label id="show"></label>
     </div>
	 */
	//if no find toast,then add a new div.   add by sxq 2018-05-16
	var toast = document.getElementById("toast");
	if(toast==null) {
		var div = document.createElement("div");
		div.id = 'toast';
		var label = document.createElement("label");
		label.id = 'show';
		div.appendChild(label);
		
		document.body.appendChild(div);
	}
	
	
	if('center' == position) {
		document.getElementById("toast").style.alignItems = "center";
		document.getElementById("show").style.marginBottom = "0";
	}
	document.getElementById("show").innerHTML = text;
	var display = document.getElementById("toast").style.display;
	if("" == display || "none" == display) {
		document.getElementById("toast").style.display = "inline-flex";
			setTimeout(function() {
			document.getElementById("toast").style.display = "none";
		},time);
	}
}