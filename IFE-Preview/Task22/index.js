var i = 1; //计时器延时参数
/*
 * 先序遍历
 */
function preRoot(node) {
	if (node == null) { //出口
		return;
	}
	setTimeout(function(){render(node, null);}, i * 500); ++i;
	setTimeout(function() {render(null, node);}, i * 500);
	preRoot(node.firstElementChild);
	preRoot(node.lastElementChild);
}

/*
 * 中序遍历
 */
function midRoot(node) {
	if (node == null) { //出口
		return;
	}
	midRoot(node.firstElementChild);
	setTimeout(function(){render(node, null);}, i * 500); ++i;
	setTimeout(function(){render(null, node);}, i * 500);
	midRoot(node.lastElementChild);
}

/*
 * 后序遍历
 */
function lastRoot(node) {
	if (node == null) { //出口
		return;
	}
	lastRoot(node.firstElementChild);
	lastRoot(node.lastElementChild);
	setTimeout(function(){render(node, null);}, i * 500); ++i;
	setTimeout(function() {render(null, node);}, i * 500);
}

/*
 * 绘制/清除 效果
 */
function render(node, clearNode) {
	if (clearNode != null) {
		var name = clearNode.className.split(' ');
		clearNode.className = '';
		for (var i in name) {
			if (name[i] !== 'active') {
				clearNode.className += name[i] + ' ';
			}
		}
	}
	if (node != null) {
		node.className += ' active';
	}
}

/*
 * init
 */
(function() {
	var root = document.getElementById('binary-tree-root');
	var control = document.getElementById('control');
	control.addEventListener('click', function(e){
		control.className = 'lock';
		i = 1;
		switch(e.target.value) {
			case 'pre':
				preRoot(root);
				setTimeout(function(){control.className = 'control';}, i * 500);
				break;
			case 'mid':
				midRoot(root);
				setTimeout(function(){control.className = 'control';}, i * 500);
				break;
			case 'last':
				lastRoot(root);
				setTimeout(function(){control.className = 'control';}, i * 500);
				break;
		}
	});
})();