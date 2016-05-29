var tagData = [];
var favoData = [];

/*
 * 插入tag
 */
function insertTag(e) {
	if (e.keyCode != 188 && e.keyCode != 32 && e.keyCode != 13) { //逗号，空格，回车
		return;
	}
	var textarea = document.getElementById('tag-input');
	var text = textarea.value;
	var arrData = text.split(/[,\s]+/).filter(function(item) {
		return item.length > 0;
	});
	for (var i = 0; i < arrData.length; ++i) {
		if (tagData.indexOf(arrData[i]) < 0) {
			tagData.push(arrData[i]);
			if (tagData.length > 10) {
				tagData.shift();
			}
		}
	}
	if (e.keyCode == 13) {
		textarea.value = '';
	}
	renderTag(tagData);
}

/*
 * 插入favo
 */
function insertFavo() {
	var textarea = document.getElementById('favo-input');
	var text = textarea.value;
	var arrData = text.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(item) {
		return item.length > 0;
	});
	for (var i = 0; i < arrData.length; ++i) {
		if (favoData.indexOf(arrData[i]) < 0) {
			favoData.push(arrData[i]);
			if (favoData.length > 10) {
				favoData.shift();
			}
		}
	}

	renderFavo(favoData);
}

/*
 * 绘制tag
 */
function renderTag(arrData) {
	var wrap = document.getElementById('tag-wrap');
	var html = arrData.map(function(item) {
		return "<div class='tag-item'>" + item + "</div>";
	}).join(" ");
	wrap.innerHTML = html;
}

/*
 * 绘制favo
 */
function renderFavo(arrData) {
	var wrap = document.getElementById('favo-wrap');
	var html = arrData.map(function(item) {
		return "<div class='favo-item'>" + item + "</div>";
	}).join(" ");
	wrap.innerHTML = html;
}

/*
 * 删除Tag
 */
function deleteTag(e) {
	var node = e.target;
	if (node.className == 'tag-item') {
		var index = tagData.indexOf(node.innerHTML);
		tagData.splice(index, 1);
	}
	renderTag(tagData);
}

(function() {
	document.getElementById('add-favo').addEventListener('click', insertFavo);
	document.getElementById('tag-input').addEventListener('keyup', insertTag);
	document.getElementById('tag-wrap').addEventListener('click', deleteTag);
})();