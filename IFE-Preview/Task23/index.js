function TraversalAndFind() {
	var queue = [];
	/*
	 * （广度）遍历树，将遍历的节点按顺序存入queue备用。
	 */
	var traversal = function(root) {
		queue = [];
		var temp = [];
		temp.unshift(root);
		while (temp.length !== 0) {
			var node = temp.pop();
			queue.unshift(node);
			var children = node.children;
			for (var i = 0; i < children.length; ++i) {
				temp.unshift(children[i]);
			}
		}
	};
	/*
	 * 展示遍历过程
	 * 第二个参数可选，如果有，在遍历的过程中匹配关键字
	 */
	var render = function(root, keyword) {
		/*遍历*/
		traversal(root);
		/*动画过程隐藏控制面板*/
		var control = document.getElementById('control');
		control.className += ' lock';
		/*动画过程函数*/
		var i = queue.length - 1;
		/*
		 * 渲染遍历过程，第三个参数可选，如果有，则匹配关键字并高亮。
		 */
		function renderNode(node, lastNode, keyword) {
			if (lastNode !== null) {
				var className = lastNode.className;
				className = className.replace('active', '');
				lastNode.className = className;
			}
			if (node !== null) {
				node.className = node.className.replace('key', ''); //解除上一次的关键字高亮。
				node.className += ' active';
				if (keyword !== null && node.getAttribute('data-value') === keyword) { //如果有第三个参数，执行匹配
					node.className += ' key';
				}
			}

			if (i > 0) {
				var last = i;
				var next = i - 1;
				setTimeout(function(){renderNode(queue[next], queue[last], keyword)}, 500); --i;
			} else if(i === 0) {
				setTimeout(function(){renderNode(null, queue[i], keyword)}, 500);
				control.className = control.className.replace('lock', ''); //解除控制面板的隐藏状态
			}
		}
		/*开始动画*/
		renderNode(queue[i], null, keyword);
	};

	return {
		showTraversal: render
	};
}

(function() {
	var traversal = TraversalAndFind();
	var root = document.getElementById('tree-root');
	document.getElementById('traversal-tree').addEventListener('click', function() {
		traversal.showTraversal(root);
	});
	document.getElementById('traversal-and-match').addEventListener('click', function() {
		var keyword = document.getElementById('keyword').value;
		traversal.showTraversal(root, keyword);
	});
})();