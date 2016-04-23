/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

//柱形图的颜色
var colors = ['#4C4FCE', '#1BD56E', '#D8FF00', '#413232', '#F90000', '#BCBEC2'];

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: "北京",
  nowGraTime: "day"
}

//英文to汉字
var eTc = {
  'day': '日',
  'week': '周',
  'month': '月'
}

/**
 * 计算柱形的宽度和位置
 */
function getWidth(width, len) {
  var position = {};
  position.width = Math.floor(width / (len * 2));
  position.left = Math.floor(width / len);
  position.offsetLeft = 10;
  return position;
}

/**
 * 渲染图表
 */
function renderChart() {
  var html = "", i = 0;
  var wrap = document.getElementById('aqi-chart-wrap');
  var width = wrap.clientWidth;
  var selectedData = chartData[pageState.nowGraTime][pageState.nowSelectCity];
  var len = Object.keys(selectedData).length;
  var position = getWidth(width, len);
  html = "<h2>" + pageState.nowSelectCity + "1-3月 " + eTc[pageState.nowGraTime] + "平均空气质量：</h2>";
  for (var key in selectedData) {
    html += "<div class='aqi-bar " + pageState.nowGraTime + "' style='height:" + selectedData[key] + "px;width:" + position.width + "px;left:" + (position.left * i + position.offsetLeft) + "px;background-color:" + colors[i % 6] + ";'></div>";
    html += "<div class='aqi-hint' style='bottom:" + (selectedData[key] + 10) + "px; left:" + (position.left * i + position.offsetLeft + position.width / 2 - 50) + "px;'>" + key + "<br>" + selectedData[key] + "</div>";
    ++i;
  }
  wrap.innerHTML = html;
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  if (this.value !== pageState.nowGraTime) {
    pageState.nowGraTime = this.value;
    renderChart();
  }
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 因为只有value改变，才会进入函数，因此不需要判断值的变化
  pageState.nowSelectCity = this.value;
  // 调用图表渲染函数
  renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
  var graTime = document.getElementsByName('gra-time');
  for (var i = 0; i < graTime.length; ++i) {
    (function(m) {
      graTime[m].addEventListener('click', graTimeChange);
    })(i);
  }

  var chart = document.getElementById('aqi-chart-wrap');
  chart.addEventListener('mouseover', function(event) {
    event.target.className += " show";
  });
  chart.addEventListener('mouseout', function(event) {
    event.target.className = event.target.className.replace(' show', '');
  });
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var citySelect = document.getElementById('city-select');
  for (var city in aqiSourceData) {
    var newCity = document.createElement('option');
    newCity.innerHTML = city;
    citySelect.appendChild(newCity);
  }
  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  citySelect.addEventListener('change', citySelectChange);
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  var week = {}, weekValueCount = 0, singleWeek = {},
        month = {}, monthValueCount = 0, singleMonth = {};

  for (var key in aqiSourceData) {
    var tempValue = aqiSourceData[key]; //城市污染数据
    var dayArr = Object.getOwnPropertyNames(tempValue); //日期
    var tempMonth = dayArr[0].slice(5, 7); //当前日期的月份
    var weekInit = 4, weekDaysCount = 0; //2016 - 01 - 01是星期五,因此weekInit初始化为4; weekDaysCount记录一周的天数

    for (var i = 0; i < dayArr.length; ++i) {
      weekValueCount += tempValue[dayArr[i]]; //周空气污染累计
      monthValueCount += tempValue[dayArr[i]]; //月份空气污染累计
      ++weekDaysCount;
      if ((weekInit + 1) % 7 == 0 || i == dayArr.length - 1 || dayArr[i + 1] !== tempMonth) {
        var tempWeekKey = dayArr[i].slice(0, 7) + '月第' + (Math.floor(weekInit / 7) + 1) + '周';
        ++weekInit;
        singleWeek[tempWeekKey] = Math.floor(weekValueCount / weekDaysCount);

        if (i != dayArr.length - 1 && dayArr[i + 1].slice(5, 7) !== tempMonth) { //进入到下一个月份，统计本周天数
          weekInit = weekDaysCount % 7;
        }

        weekValueCount = 0;
        weekDaysCount = 0;

        if (i == dayArr.length - 1 || dayArr[i + 1].slice(5, 7) !== tempMonth) { //进入到下一个月份，统计本月数据
          tempMonth = (i == dayArr.length - 1) ? dayArr[i].slice(5, 7) : dayArr[i + 1].slice(5, 7);
          var tempMonthKey = dayArr[i].slice(0, 7) + '月';
          singleMonth[tempMonthKey] = Math.floor(monthValueCount / dayArr[i].slice(-2));
          monthValueCount = 0;
        }
      }
    }
    week[key] = singleWeek;
    month[key] = singleMonth;
    singleWeek = {};
    singleMonth = {};
  }
  chartData.day = aqiSourceData;
  chartData.week = week;
  chartData.month = month;
  renderChart();
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();