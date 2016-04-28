//柱形图宽度
var position = {width: 0, i: 0};
//循环颜色的数组
var colors = ['#F70808', '#6B04F6', '#504C4C', '#2BF60A','#000000', '#FFFC00'];
//排序演示时的锁
var lock = 0;

/**
 * 获取并判断输入数据
 */
function getInputValue() {
 	var input = document.getElementById('input');
 	var value = input.value;
 	if (value >= 10 && value <= 100 && document.getElementById('wrap').childElementCount < 60) {
 		return value;
 	} else {
 		alert("输入的数据不符合范围");
 		return;
 	}
 }

/**
  * 左侧入
 */
function addElementLeft() {
	if (lock) {
		alert('正在排序演示');
		return;
	}
	var wrap = document.getElementById('wrap');
	var value = getInputValue();
	if (value === undefined) {
		return;
	}
	var html = "<div class='item' data-num='"+ value +"' style='height:"+ value * 2 + "px;width:" + position.width + "px;background-color:" + colors[position.i++ % colors.length] + ";'></div>";
	wrap.innerHTML = html + wrap.innerHTML;
}

/**
  * 右侧入
 */
function addElementRight() {
	if (lock) {
		alert('正在排序演示');
		return;
	}
	var wrap = document.getElementById('wrap');
	var value = getInputValue();
	if (value == undefined) {
		return;
	}
	var html = "<div class='item' data-num='"+ value +"' style='height:"+ value * 2 + "px;width:" + position.width + "px;background-color:" + colors[position.i++ % colors.length] + ";'></div>";
	wrap.innerHTML += html;
}

/**
 * 随机产生25组数据
*/
function numberFactory() {
	if (lock) {
		alert('正在排序演示');
		return;
	}
	var wrap = document.getElementById('wrap');
	var html = '';
	for (var i = 0; i < 25; ++i) {
		var value = Math.floor(Math.random() * 90 + 10);
		html += "<div class='item' data-num='"+ value +"' style='height:"+ value * 2 + "px;width:" + position.width + "px;background-color:" + colors[position.i++ % colors.length] + ";'></div>";
	}
	wrap.innerHTML += html;
}

/**
  * 左侧删除
 */
function removeElementLeft() {
	if (lock) {
		alert('正在排序演示');
		return;
	}
	var wrap = document.getElementById('wrap');
	wrap.removeChild(wrap.firstElementChild);
}

/**
  * 右侧删除
 */
function removeElementRight() {
	if (lock) {
		alert('正在排序演示');
		return;
	}
	var wrap = document.getElementById('wrap');
	wrap.removeChild(wrap.lastElementChild);
}

/**
  * 点击删除
 */
function removeElementByClick(event) {
	var wrap = document.getElementById('wrap');
	var p = wrap.firstElementChild;
	for (var i = 0; i < wrap.childElementCount; ++i, p = p.nextElementSibling) {
		if (p == event.target) {
			wrap.removeChild(p);
			break;
		}
	}
}

/**
 * 排序演示
 */
function sortDemo() {
	var wrap = document.getElementById('wrap');
	var p = wrap.firstElementChild;
	var q = wrap.firstElementChild.nextElementSibling;
	var i = 0, j = 0;
	var sort = function() {
		var num1 = p.getAttribute('data-num');
		var num2 = q.getAttribute('data-num');
		q.style.border = '2px solid #999';
		p.style.border = '';
		if (num1 > num2) {
			var temp = {height:p.style.height, backgroundColor:p.style.backgroundColor};
			p.style.height = q.style.height;
			p.style.backgroundColor = q.style.backgroundColor;
			p.setAttribute('data-num', num2);
			q.style.height = temp.height;
			q.style.backgroundColor = temp.backgroundColor;
			q.setAttribute('data-num', num1);
		}
		p = p.nextElementSibling;
		q = q.nextElementSibling;
		++j;
		if (j >= wrap.childElementCount - i - 1) {
			p.style.border = '';
			p = wrap.firstElementChild;
			q = wrap.firstElementChild.nextElementSibling;		
			++i;
			j = 0;	
		}
		if (i >= wrap.childElementCount) {
			lock = 0;
			clearInterval(t);
		}
	}
	lock = 1;
	var t = setInterval(sort, 50);	
}

/**
 * 初始化宽度
*/
function getPos() {
	var wrap = document.getElementById('wrap');
	position.width = Math.floor(wrap.clientWidth / 120);
}

(function() {
	getPos();
	document.getElementById('left-in').addEventListener('click', addElementLeft);
	document.getElementById('right-in').addEventListener('click', addElementRight);
	document.getElementById('left-out').addEventListener('click', removeElementLeft);
	document.getElementById('right-out').addEventListener('click', removeElementRight);
	document.getElementById('wrap').addEventListener('click', removeElementByClick);
	document.getElementById('number-factory').addEventListener('click', numberFactory);
	document.getElementById('sort').addEventListener('click', sortDemo);
})();