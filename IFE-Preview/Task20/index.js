var arrData = [];
/*
 * 插入
 */
function insert() {
	var textarea = document.getElementById('textarea');
	var text = textarea.value;
	arrData = text.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(item) {
		return item.length > 0;
	});
	render(arrData);
}

/*
 * 绘制
 */
function render(arrData) {
	var wrap = document.getElementById('wrap');
	var html = arrData.map(function(item) {
		return "<div class='item'>" + item + "</div>";
	}).join(" ");
	wrap.innerHTML = html;
}

/*
 * 查找匹配
 */
 function find() {
 	var findText = document.getElementById('find-text');
 	var str = findText.value;
 	var arrMatches = arrData.map(function(item) {
 		return item.replace(str,"<span class='match'>" + str + "</span>");
 	});
 	render(arrMatches);
 }

(function() {
	document.getElementById('insert').addEventListener('click', insert);
	document.getElementById('find').addEventListener('click', find);
})();