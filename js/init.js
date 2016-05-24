(function newWindowByRightClick() {
	document.addEventListener('contextmenu', function (e) {
		e.preventDefault();
		e.returnValue = false;
		history.back();
	});
	var body = document.getElementsByTagName('body')[0];
	var tip = document.createElement('div');
	tip.className = 'tip';
	tip.innerHTML = '单击鼠标右键返回';
	body.appendChild(tip);
	function deleteTip() {
		body.removeChild(tip);
	}
	setTimeout(deleteTip, 800);
})();