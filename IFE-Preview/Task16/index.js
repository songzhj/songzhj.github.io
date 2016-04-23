/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = document.getElementById('aqi-city-input').value;
	var value = document.getElementById('aqi-value-input').value;
	if (!city.match(/^[a-zA-z\u4e00-\u9fa5]+$/)) {
		alert('城市名称只能由字母和汉字组成');
		return false;
	}
	var isInteger = function(x) {
		return (typeof x == 'number') && (x % 1 === 0);
	};
	if (isInteger(value)) {
		alert('空气指数只能是整数');
		return false;
	}
	aqiData[city] = value;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table = document.getElementById('aqi-table');
	table.innerHTML = '<td>城市</td><td>空气质量</td><td>操作</td>';
	for (var city in aqiData) {
		var newElement = document.createElement('tr');
		newElement.innerHTML = '<td>' + city + '</td><td>' + aqiData[city] + '</td><td><button data-city="'+ city +'">删除</button></td>';
		table.appendChild(newElement);
	}
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  var city = this.getAttribute('data-city');
  delete aqiData[city];

  renderAqiList();
}

function init() {

  document.getElementById('add-btn').addEventListener('click', addBtnHandle);

  document.getElementById('aqi-table').addEventListener('click', function(event) {
  	if (event.target.nodeName.toLowerCase() === 'button') {
  		delBtnHandle.call(event.target);
  	}
  });

}

init();