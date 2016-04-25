/**
  * 左侧入
 */
function addElementLeft() {
	var wrap = document.getElementById('wrap');
	var input = document.getElementById('input');
	var html = "<div class='item'>" + input.value + "</div>";
	wrap.innerHTML = html + wrap.innerHTML;
}

/**
  * 右侧入
 */
function addElementRight() {
	var wrap = document.getElementById('wrap');
	var input = document.getElementById('input');
	var html = "<div class='item'>" + input.value + "</div>";
	wrap.innerHTML += html;
}

/**
  * 左侧删除
 */
function removeElementLeft() {
	var wrap = document.getElementById('wrap');
	wrap.removeChild(wrap.firstElementChild);
}

/**
  * 右侧删除
 */
function removeElementRight() {
	var wrap = document.getElementById('wrap');
	wrap.removeChild(wrap.lastElementChild);
}

/**
  * 右侧删除
 */
function removeElementByClick(event) {
	var wrap = document.getElementById('wrap');
	var p = wrap.firstElementChild;
	for (var i = 0; i < wrap.childElementCount - 1; ++i, p = p.nextElementSibling) {
		if (p == event.target) {
			wrap.removeChild(p);
		}
	}
}

(function() {
	document.getElementById('left-in').addEventListener('click', addElementLeft);
	document.getElementById('right-in').addEventListener('click', addElementRight);
	document.getElementById('left-out').addEventListener('click', removeElementLeft);
	document.getElementById('right-out').addEventListener('click', removeElementRight);
	document.getElementById('wrap').addEventListener('click', removeElementByClick);
})();