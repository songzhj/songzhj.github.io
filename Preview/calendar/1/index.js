var lunarInfo = new Array(
	0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, //1901-1909
	0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, //1910-1919
	0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, //1920-1929
	0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, //1930-1939
	0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, //1940-1949
	0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, //1950-1959
	0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, //1960-1969
	0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, 0x095b0, //1970-1979
	0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x049b0, 0x04af5, //1980-1989
	0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, //1990-1999
	0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, //2000-2009
	0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, //2010-2019
	0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, //2020-2029
	0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, //2030-2039
	0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, //2040-2049
	/**Add By JJonline@JJonline.Cn**/
	0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, //2050-2059
	0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, //2060-2069
	0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, //2070-2079
	0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, //2080-2089
	0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, //2090-2099
	0x0d520);
var solarMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

var animals = new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");

var solarTerm = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至");

var sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);

var nStr1 = new Array('日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十');

var nStr2 = new Array('初', '十', '廿', '卅');

//公历节日
var sFtv = new Array(
	"0101 元旦",
	"0214 情人节",
	"0308 妇女节",
	"0312 植树节",
	"0315 消费者权益日",
	"0401 愚人节",
	"0501 劳动节",
	"0504 青年节",
	"0512 护士节",
	"0601 儿童节",
	"0701 建党节",
	"0801 建军节",
	"0910 教师节",
	"0928 孔子诞辰",
	"1001 国庆节",
	"1006 老人节",
	"1024 联合国日",
	"1224 平安夜",
	"1225 圣诞节");

//农历节日
var lFtv = new Array(
	"0101 春节",
	"0115 元宵节",
	"0505 端午节",
	"0707 七夕情人节",
	"0715 中元节",
	"0815 中秋节",
	"0909 重阳节",
	"1208 腊八节",
	"1224 小年");

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var lastMonth = today.getMonth();
var date = today.getDate();

var dateInfo = document.getElementById('dateInfo');
var ths=document.getElementsByTagName('th');
var tds=document.getElementsByTagName('td');

//头部显示当前年月
var yearInput = document.getElementById('yearInput');
yearInput.value = year + '年';

var monthInput = document.getElementById('monthInput');
monthInput.value = month + '月';

var vacaInput = document.getElementById('vacaInput');
vacaInput.value = year + '节假日安排';

displayCalendar(getFirDateDay(year, month), getLastDate(year, lastMonth), getLastDate(year, month), month, year);

//获取每月的1号是周几
function getFirDateDay(yer, moth) {
	var firDate = new Date(yer + ',' + moth + ',' + '1');
	return firDate.getDay();
}

//获取每个月的最后一天是几号
function getLastDate(yer, moth) {
	var lastDate = new Date(yer, moth, 0);
	return lastDate.getDate();
}

//输出显示某月日历
function displayCalendar(firDateDay, lastMonLasDate, lasDate, month, year) {
	var trs = document.getElementsByTagName('tr');
	for (var i = 1; i < trs.length; i++) {
		trs[i].innerHTML = '';
	}
	if (firDateDay == 0) {
		firDateDay = 7;//一号是周日等于0设成7
	}

	function monyear() {
		if (month == 1) {
			var m = 12;
			var y = year - 1;
		}
		return [y, m];
	}

	function yermonth() {
		if (month == 12) {
			var mo = 1;
			var yr = parseInt(year) + 1;
		}
		return [yr, mo];
	}
	var days = firDateDay - 1;
	var mondayDate = lastMonLasDate - days + 1;
	var n = 1; //每月1号
	var dayCount = 0;
	var firTr = document.getElementById('firstLine');
	for (var j = mondayDate; j <= lastMonLasDate; j++) {
		if (days == 6 && j == lastMonLasDate) {
			firTr.innerHTML += ('<td class="otherM weekend" date="' + monyear()[0] + '-' + monyear()[1] + '-' + j + '"><div><a><span id="solarD' + dayCount + '">' + j + '</span><span class="lunar"></span></a></div></td>');
			dayCount += 1;
		} else {
			firTr.innerHTML += ('<td class="otherM" date="' + monyear()[0] + '-' + monyear()[1] + '-' + j + '"><div><a><span id="solarD' + dayCount + '">' + j + '</span><span class="lunar" id="lunarD' + dayCount + '"></span></a></div></td>');
			dayCount += 1;
		}
		//data="'+year+'-'+month+'-'+j+'"       href="javascript:;" data-click="{fm:'beha'}" hidefocus="true" 
	}
	for (var k = firDateDay; k < 8; k++) {
		if (k > 5) {
			firTr.innerHTML += ('<td class="weekend" date="' + year + '-' + month + '-' + n + '"><div><a><span id="solarD' + dayCount + '">' + n + '</span><span class="lunar" id="lunarD' + dayCount + '"></span></a></div></td>');
			n++;
			dayCount += 1;
		} else {
			firTr.innerHTML += ('<td date="' + year + '-' + month + '-' + n + '"><div><a><span id="solarD' + dayCount + '">' + n + '</span><span class="lunar" id="lunarD' + dayCount + '"></span></a></div></td>');
			n++;
			dayCount += 1;
		}
	}
	var otherm = true;
	for (var x = 2; x < 7; x++) {
		var linex = document.getElementById('line' + x);
		for (var y = 1; y < 8; y++) {
			if (otherm) {
				if (y > 5) {
					linex.innerHTML += ('<td class="weekend" date="' + year + '-' + month + '-' + n + '"><div><a><span id="solarD' + dayCount + '">' + n + '</span><span class="lunar" id="lunarD' + dayCount + '"></span></a></div></td>');
					n++;
					dayCount += 1;
				} else {
					linex.innerHTML += ('<td date="' + year + '-' + month + '-' + n + '"><div><a><span id="solarD' + dayCount + '">' + n + '</span><span class="lunar" id="lunarD' + dayCount + '"></span></a></div></td>');
					n++;
					dayCount += 1;
				}
			} else {
				if (y > 5) {
					linex.innerHTML += ('<td class="otherM weekend" date="' + yermonth()[0] + '-' + yermonth()[1] + '-' + n + '"><div><a><span id="solarD' + dayCount + '">' + n + '</span><span class="lunar" id="lunarD' + dayCount + '"></span></a></div></td>');
					n++;
					dayCount += 1;
				} else {
					linex.innerHTML += ('<td class="otherM" date="' + yermonth()[0] + '-' + yermonth()[1] + '-' + n + '"><div><a><span id="solarD' + dayCount + '">' + n + '</span><span class="lunar" id="lunarD' + dayCount + '"></span></a></div></td>');
					n++;
					dayCount += 1;
				}
			}

			if (n > lasDate) {
				n = 1;
				otherm = false;
			}
		}
	}
	drawCld(yearInpVal(), checkMonth());
	markDate();

	for (let le=0;le<42;le++){
	tds[le].onclick=function(){
		return writeDateInfo(le);
		
	}	
}
	function writeDateInfo(i){
		/*
		for (let j=0;j<42;j++){
			if (j==i) {
				tds[j].className+='bgcolor';
			}else if (tds[j].className.indexOf('bgcolor')>0){
				console.log(tds[j].className);
				tds[j].className.pop();
			}
		}*/
        var dateInfo = document.getElementById('dateInfo');
        if (i%7==6) {
        	dateInfo.innerHTML='<p id="yerMonDay">'+tds[i].getAttribute("date")+' 星期'+ths[6].innerHTML+'</p>';
        }else{
        	dateInfo.innerHTML='<p id="yerMonDay">'+tds[i].getAttribute("date")+' 星期'+ths[(i+1)%7-1].innerHTML+'</p>';
        }
		if (getFirDateDay(yearInpVal(),checkMonth())==0) {
			dateInfo.innerHTML+='<p id="hao">'+(i-5)+'</p>'
		}else{
			dateInfo.innerHTML+='<p id="hao">'+(i-getFirDateDay(yearInpVal(),checkMonth())+2)+'</p>'
		}
		dateInfo.innerHTML +='<p id="animal">[' + animals[(yearInpVal() - 4) % 12] + '年]</p>'; //生肖
	}
}

var dateInfo=document.getElementById('dateInfo');
var ths=document.getElementsByTagName('th');
var weekd=(date-2+(getFirDateDay(year,month)))%7;
weekd=parseInt(weekd);
dateInfo.innerHTML='<p id="yerMonDay">'+year + '-' + month + '-' + date+' 星期'+ths[weekd].innerHTML+'</p>';
dateInfo.innerHTML+='<p id="hao">'+date+'</p>';
dateInfo.innerHTML +='<p id="animal">[' + animals[(yearInpVal() - 4) % 12] + '年]</p>'; //生肖

//对特殊的日记做标记
function markDate() {
	var tds = document.getElementsByTagName('td');
	for (var i = 0; i < tds.length; i++) {
		if (tds[i].getAttribute('date') == '2016-1-1') {
			tds[i].className += ' vacation';
			tds[i + 1].className += ' rest';
			tds[i + 2].className += ' rest';
		} else if (tds[i].getAttribute('date') == '2016-2-7') {
			tds[i - 1].className += ' work';
			tds[i].className += ' rest';
			tds[i + 1].className += ' vacation';
			for (var j = i + 2; j < i + 7; j++) {
				tds[j].className += ' rest';
			}
			tds[13].className += ' work';
		} else if (tds[i].getAttribute('date') == '2016-4-2') {
			tds[i].className += ' rest';
			tds[i + 1].className += ' rest';
			tds[i + 2].className += ' vacation';
		} else if (tds[i].getAttribute('date') == '2016-4-30') {
			tds[i].className += ' rest';
			tds[i + 1].className += ' vacation';
			tds[i + 2].className += ' rest';
		} else if (tds[i].getAttribute('date') == '2016-5-1') {
			tds[i - 1].className += ' rest';
			tds[i].className += ' vacation';
			tds[i + 1].className += ' rest';
		} else if (tds[i].getAttribute('date') == '2016-6-9') {
			tds[i].className += ' vacation';
			tds[i + 1].className += ' rest';
			tds[i + 2].className += ' rest';
			tds[i + 3].className += ' work';
		} else if (tds[i].getAttribute('date') == '2016-9-15') {
			tds[i].className += ' vacation';
			tds[i + 1].className += ' rest';
			tds[i + 2].className += ' rest';
			tds[i + 3].className += ' work';
		} else if (tds[i].getAttribute('date') == '2016-10-1') {
			tds[i].className += ' vacation';
			for (var k = i + 1; k < 12; k++) {
				tds[k].className += ' rest';
			}
			tds[12].className += ' work';
			tds[13].className += ' work';
		} else if (tds[i].getAttribute('date') == (year + '-' + month + '-' + date)) {
			tds[i].className += ' today';
		}
	}
}


//动态写入年月的下拉框
var years = document.getElementById('years');
for (var n = 1901; n < 2101; n++) {
	years.innerHTML += '<span id="' + n + '">' + n + '年</span>';
	if (n === year) {
		document.getElementById(n).className += ' active';
		//window.location.hash='#'+n;
		//console.log(years.scrollTop+' '+years.scrollHeight);
	}
}
var months = document.getElementById('months');
for (var m = 1; m < 13; m++) {
	months.innerHTML += '<span id="' + m + '">' + m + '月</span>';
	if (m === month) {
		document.getElementById(m).className += ' active';
	}
}

//动态显示下拉框
var vacations = document.getElementById('vacations');
yearInput.onclick = function() {
	dispHideSpans(years);
	months.className = 'hideSpan';
	vacations.className = 'hideSpan';
}
monthInput.onclick = function() {
	dispHideSpans(months);
	years.className = 'hideSpan';
	vacations.className = 'hideSpan';
}
vacaInput.onclick = function() {
	dispHideSpans(vacations);
	years.className = 'hideSpan';
	months.className = 'hideSpan';
}

function dispHideSpans(element) {
	if (element.className === 'hideSpan') {
		element.className = 'displaySpan';
	} else {
		element.className = 'hideSpan';
	}
}

//定位滚动条内容位置 待实现
//years.scrollTop=(year-1901)*20+'px';

//点击空白处下拉框消失，待实现

var body = document.getElementsByTagName('body');
var div = document.createElement('div');
div.className = 'div';
div.style.position = 'fixed';
div.style.left = '0';
div.style.top = '0';
div.style.width = '100%';
div.style.height = '100%';
div.style.margin = '0';
div.style.padding = '0';
div.style.zIndex = '-1';
//div.style.backgroundColor = 'yellow';
div.style.opacity = '0';
body[0].appendChild(div);
var forms = document.getElementsByTagName('form');
forms[0].style.zIndex = '100';
div.onclick = function() {
	years.className = 'hideSpan';
	months.className = 'hideSpan';
	vacations.className = 'hideSpan';
}


function changeColor(element, i) {
	for (var j = 0; j < element.length; j++) {
		if (j == i) {
			element[j].className += ' active';
		} else {
			element[j].className = '';
		}

	}
}
//给下拉框里的所有年月绑定onclick事件，并在头部及日历中显示相应年月
var yearSpan = document.getElementById('years').children;
for (var b = 0; b < yearSpan.length; b++) {
	yearSpan[b].onclick = function() {
		changeColor(yearSpan, this.innerHTML.slice(0, 4) - 1901);
		changValue(yearInput, this);
		displayCalendar(getFirDateDay(this.innerHTML.slice(0, 4), checkMonth()), getLastDate(this.innerHTML.slice(0, 4), checkMonth() - 1), getLastDate(this.innerHTML.slice(0, 4), checkMonth()), checkMonth(), this.innerHTML.slice(0, 4));
		years.className = 'hideSpan';
	}
}
var monthSpan = document.getElementById('months').children;
for (var c = 0; c < monthSpan.length; c++) {
	monthSpan[c].onclick = function() {
		if (this.innerHTML.slice(0, 1) < 10 && isNaN(this.innerHTML.slice(0, 2))) {
			var chekmonth = this.innerHTML.slice(0, 1);
		} else {
			var chekmonth = this.innerHTML.slice(0, 2);
		}
		changeColor(monthSpan, chekmonth - 1);
		changValue(monthInput, this);
		displayCalendar(getFirDateDay(yearInpVal(), checkMonth()), getLastDate(yearInpVal(), checkMonth() - 1), getLastDate(yearInpVal(), checkMonth()), checkMonth(), yearInpVal());
		months.className = 'hideSpan';
	}
}

function changValue(inputs, spans) {
	inputs.value = spans.innerHTML;
}

function checkMonth() {
	if (monthInput.value.slice(0, 1) < 10 && isNaN(monthInput.value.slice(0, 2))) {
		return monthInput.value.slice(0, 1);
	} else {
		return monthInput.value.slice(0, 2);
	}
}

function yearInpVal() {
	return yearInput.value.slice(0, 4);
}
//点击左右图标时改变下拉框中颜色
function leftChangColr(element, method, n) {
	element[method - n].className += ' active';
	element[method - (n - 1)].className = '';
}

function rightChangColr(element, method, n) {
	element[method - n].className += ' active';
	element[method - (n + 1)].className = '';
}
//左右图标绑定事件并实现
var leftYear = document.getElementById('leftYear');
leftYear.onclick = function() {
	if (yearInpVal() > 1901) {
		leftIcon(yearInput, yearInpVal(), '年');
		leftChangColr(yearSpan, yearInpVal(), 1901);
		years.className = 'hideSpan';
		months.className = 'hideSpan';
		vacations.className = 'hideSpan';
	}
}
var leftMonth = document.getElementById('leftMonth');
leftMonth.onclick = function() {
	if (checkMonth() == 1) {
		yearInput.value = yearInpVal() - 1 + '年';
		monthInput.value = 13 + '月';
	}
	years.className = 'hideSpan';
	months.className = 'hideSpan';
	vacations.className = 'hideSpan';
	leftIcon(monthInput, checkMonth(), '月');
	if (checkMonth() == 12) {
		monthSpan[11].className += ' active';
		monthSpan[0].className = '';
		yearSpan[yearInpVal() - 1901].className += ' active';
		yearSpan[yearInpVal() - 1900].className = '';
	} else {
		leftChangColr(monthSpan, checkMonth(), 1);
	}
}
var rightYear = document.getElementById('rightYear');
rightYear.onclick = function() {
	if (yearInpVal() < 2100) {
		rightIcon(yearInput, yearInpVal(), '年');
		rightChangColr(yearSpan, yearInpVal(), 1901);
		years.className = 'hideSpan';
		months.className = 'hideSpan';
		vacations.className = 'hideSpan';
	}
}
var rightMonth = document.getElementById('rightMonth');
rightMonth.onclick = function() {
	if (checkMonth() == 12) {
		yearInput.value = parseInt(yearInpVal()) + 1 + '年';
		monthInput.value = 0 + '月';
	}
	years.className = 'hideSpan';
	months.className = 'hideSpan';
	vacations.className = 'hideSpan';
	rightIcon(monthInput, checkMonth(), '月');
	if (checkMonth() == 1) {
		monthSpan[11].className = '';
		monthSpan[0].className += ' active';
		yearSpan[yearInpVal() - 1901].className += ' active';
		yearSpan[yearInpVal() - 1902].className = '';
	} else {
		rightChangColr(monthSpan, checkMonth(), 1);
	}
}

function leftIcon(input, method, s) {
	input.value = method - 1 + s;
	displayCalendar(getFirDateDay(yearInpVal(), checkMonth()), getLastDate(yearInpVal(), checkMonth() - 1), getLastDate(yearInpVal(), checkMonth()), checkMonth(), yearInpVal());
}

function rightIcon(input, method, s) {
	input.value = parseInt(method) + 1 + s;
	displayCalendar(getFirDateDay(yearInpVal(), checkMonth()), getLastDate(yearInpVal(), checkMonth() - 1), getLastDate(yearInpVal(), checkMonth()), checkMonth(), yearInpVal());
}

//返回今天
var btn = document.getElementsByTagName('button');
btn[0].onclick = function() {
	yearInput.value = year + '年';
	monthInput.value = month + '月';
	displayCalendar(getFirDateDay(year, month), getLastDate(year, lastMonth), getLastDate(year, month), month, year);
	years.className = 'hideSpan';
	months.className = 'hideSpan';
	vacations.className = 'hideSpan';
}

//动态显示时钟
var BeijTime = document.getElementById('BeijTime');

function displayClock() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	h = checkT(h);
	m = checkT(m);
	s = checkT(s);

	function checkT(i) {
		if (i < 10) {
			i = '0' + i;
		}
		return i;
	}
	BeijTime.innerHTML = h + ':' + m + ':' + s;
	t = setTimeout(displayClock, 500);
}
window.onload = displayClock();

//2016节假日安排
var vacaSpan = document.getElementById('vacations').children;
var yDan = document.getElementById('yDan');

function displayVacation(firDateDay, lastMonLasDate, lasDate, month, i) {
	yearInput.value = 2016 + '年';
	monthInput.value = month + '月';
	displayCalendar(firDateDay, lastMonLasDate, lasDate, month, 2016);
	vacations.className = 'hideSpan';
	changeColor(vacaSpan, i);
}
yDan.onclick = function() {
	displayVacation(5, 31, 31, 1, 1);
	console.log(yDan.innerHTML);
	changValue(vacaInput, yDan);
}
var chJie = document.getElementById('chJie');
chJie.onclick = function() {
	displayVacation(1, 31, 29, 2, 2);
	changValue(vacaInput, chJie);
}
var qMing = document.getElementById('qMing');
qMing.onclick = function() {
	displayVacation(5, 31, 30, 4, 3);
	changValue(vacaInput, qMing);
}
var ldJie = document.getElementById('ldJie');
ldJie.onclick = function() {
	displayVacation(0, 30, 31, 5, 4);
	changValue(vacaInput, ldJie);
}
var dwJie = document.getElementById('dwJie');
dwJie.onclick = function() {
	displayVacation(3, 31, 30, 6, 5);
	changValue(vacaInput, dwJie);
}
var zhqJie = document.getElementById('zhqJie');
zhqJie.onclick = function() {
	displayVacation(4, 31, 30, 9, 6);
	changValue(vacaInput, zhqJie);
}
var gqJie = document.getElementById('gqJie');
gqJie.onclick = function() {
	displayVacation(6, 30, 31, 10, 7);
	changValue(vacaInput, gqJie);
}
//tds[i].getAttribute('date')+
//下面是网上找的农历的，改了改实在改不出来。。。
/*

*/

//返回农历y年的总天数
function yYerDays(y) {
	var i, sum = 348;
	for (i = 0x8000; i > 0x8; i >>= 1)	 sum += (lunarInfo[y - 1901] & i) ? 1 : 0;
	return (sum + leapDays(y));
}

//返回农历y年闰月的天数
function leapDays(y) {
	if (leapMonth(y)) return ((lunarInfo[y - 1901] & 0x10000) ? 30 : 29);
	else return (0);
}

//判断y年的农历中哪个月是闰月,不是闰月返回0
function leapMonth(y) {
	return (lunarInfo[y - 1901] & 0xf);
}

//返回农历y年m月的总天数
function monthDays(y, m) {
	return ((lunarInfo[y - 1901] & (0x10000 >> m)) ? 30 : 29);
}

//算出当前月第一天的农历日期和当前农历日期下一个月农历的第一天日期
function Dianaday(objDate) {
	var i, leap = 0,
		temp = 0;
	var baseDate = new Date(1901, 2, 19);
	var offset = (objDate - baseDate) / 86400000;
	this.dayCyl = offset + 40;
	this.monCyl = 14;
	for (i = 1901; i < 2100 && offset > 0; i++) {
		temp = yYerDays(i) //获取i年农历多少天
		offset -= temp;
		this.monCyl += 12;
	}
	if (offset < 0) {
		offset += temp;
		i--;
		this.monCyl -= 12;
	}
	this.year = i;
	this.yearCyl = i - 1864;
	leap = leapMonth(i); //闰哪个月
	this.isLeap = false;
	for (i = 1; i < 13 && offset > 0; i++) {
		if (leap > 0 && i == (leap + 1) && this.isLeap == false) { //闰月
			--i;
			this.isLeap = true;
			temp = leapDays(this.year);
		} else {
			temp = monthDays(this.year, i);
		}
		if (this.isLeap == true && i == (leap + 1)) this.isLeap = false; //解除闰月
		offset -= temp;
		if (this.isLeap == false) this.monCyl++;
	}
	if (offset == 0 && leap > 0 && i == leap + 1)
		if (this.isLeap) {
			this.isLeap = false;
		} else {
			this.isLeap = true;
			--i;
			--this.monCyl;
		}
	if (offset < 0) {
		offset += temp;
		--i;
		--this.monCyl;
	}
	this.month = i;
	this.day = offset + 1;
}

//返回公历y年m+1月的天数
function solarDays(y, m) {
	if (m == 1)
		return (((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)) ? 29 : 28);
	else
		return (solarMonth[m]);
}

//记录公历和农历某天的日期
function calElement(sYear, sMonth, sDay, week, lYear, lMonth, lDay, isLeap) {
	this.isToday = false;
	//公历
	this.sYear = sYear;
	this.sMonth = sMonth;
	this.sDay = sDay;
	this.week = week;
	//农历
	this.lYear = lYear;
	this.lMonth = lMonth;
	this.lDay = lDay;
	this.isLeap = isLeap;
	//节日记录
	this.lunarFestival = ''; //农历节日
	this.solarFestival = ''; //公历节日
	this.solarTerms = ''; //节气
}

//返回某年的第n个节气为几日(从0小寒起算)
function sTerm(y, n) {
	var offDate = new Date((31556925974.7 * (y - 1901) + sTermInfo[n] * 60000) + Date.UTC(1901, 0, 6, 2, 5));
	return (offDate.getUTCDate())
}

//保存y年m+1月的相关信息
var fat = mat = 9;
var eve = 0;

function calendar(y, m) {
	fat = mat = 0;
	var sDObj, lDObj, lY, lM, lD = 1,
		lL, lX = 0,
		tmp1, tmp2;
	var lDPOS = new Array(3);
	var n = 0;
	var firstLM = 0;
	sDObj = new Date(y, m, 1); //当月第一天的日期
	this.length = getLastDate(y,m); //公历当月天数
	this.firstWeek = getFirDateDay(y,m); //公历当月1日星期几
	if ((m + 1) == 5) {
		fat = sDObj.getDay()
	}
	if ((m + 1) == 6) {
		mat = sDObj.getDay()
	}
	for (var i = 0; i < 42; i++) {
		if (lD > lX) {
			sDObj = new Date(y, m, i + 1); //当月第一天的日期
			lDObj = new Dianaday(sDObj); //农历
			lY = lDObj.year; //农历年
			lM = lDObj.month; //农历月
			lD = lDObj.day; //农历日
			lL = lDObj.isLeap; //农历是否闰月
			lX = lL ? leapDays(lY) : monthDays(lY, lM); //农历当月最後一天
			if (lM == 12) {
				eve = lX
			}
			if (n == 0) firstLM = lM;
			lDPOS[n++] = i - lD + 1;
		}
		this[i] = new calElement(y, m + 1, i + 1, nStr1[(i + this.firstWeek) % 7], lY, lM, lD++, lL);
		if ((i + this.firstWeek) % 7 == 0) {
			this[i].color = 'red'; //周日颜色
		}
	}

	//节气
	tmp1 = sTerm(y, m * 2) - 1;
	tmp2 = sTerm(y, m * 2 + 1) - 1;
	this[tmp1].solarTerms = solarTerm[m * 2-2];
	this[tmp2].solarTerms = solarTerm[m * 2 -1];
	//if ((this.firstWeek + 12) % 7 == 5) //黑色星期五
	//this[12].solarFestival += '黑色星期五';
	if (y == year && m == month) this[date - 1].isToday = true; //今日
}

//用中文显示农历的日期
function cDay(d) {
	var s;
	switch (d) {
		case 10:
			s = '初十';
			break;
		case 20:
			s = '二十';
			break;
			break;
		case 30:
			s = '三十';
			break;
			break;
		default:
			s = nStr2[Math.floor(d / 10)];
			s += nStr1[d % 10];
	}
	return (s);
}

//在表格中显示公历和农历的日期,以及相关节日 http://www.cnblogs.com/jihua/
var cld;
var lunar = document.getElementsByClassName('lunar');
var dateInfo = document.getElementById('dateInfo');
var animal=document.getElementById('animal');
function drawCld(SY, SM) {
	var lunar = document.getElementsByClassName('lunar');
	var dateInfo = document.getElementById('dateInfo');
	var TF = true;
	var p1 = p2 = "";
	var i, sD, s, size;
	cld = new calendar(SY, SM);
	for (i = 0; i < 42; i++) {
		//sObj = eval('SD' + i);
		lObj = eval('lunarD' + i);
		//sObj.className = '';
		sD = i - cld.firstWeek;
		if (sD > -1 && sD < cld.length) { //日期内
			//sObj.innerHTML = sD + 1;
			//if (cld[sD].isToday) {
			//sObj.style.color = '#9900FF';
			//} //今日颜色
			//else {
			//sObj.style.color = '';
			//}
			if (cld[sD].lDay == 1) { //显示农历月
				lObj.innerHTML = '<b>' + (cld[sD].isLeap ? '闰' : '') + cld[sD].lMonth + '月' + (monthDays(cld[sD].lYear, cld[sD].lMonth) == 29 ? '小' : '大') + '</b>';
			} else {
				lObj.innerHTML = cDay(cld[sD].lDay);
			} //显示农历日
			var Slfw = Ssfw = null;
			s = cld[sD].solarFestival;
			for (var ipp = 0; ipp < lFtv.length; ipp++) { //农历节日
				if (parseInt(lFtv[ipp].substr(0, 2)) == (cld[sD].lMonth)) {
					if (parseInt(lFtv[ipp].substr(2, 4)) == (cld[sD].lDay)) {
						lObj.innerHTML = lFtv[ipp].substr(5);
						Slfw = lFtv[ipp].substr(5);
					}
				}
				if (12 == (cld[sD].lMonth)) { //判断是否为除夕
					if (eve == (cld[sD].lDay)) {
						lObj.innerHTML = "除夕";
						Slfw = "除夕";
					}
				}
			}
			for (var ipp = 0; ipp < sFtv.length; ipp++) { //公历节日
				if (parseInt(sFtv[ipp].substr(0, 2)) == (SM + 1)) {
					if (parseInt(sFtv[ipp].substr(2, 4)) == (sD + 1)) {
						lObj.innerHTML = sFtv[ipp].substr(5);
						Ssfw = sFtv[ipp].substr(5);
					}
				}
			}/*
			if ((SM + 1) == 5) { //母亲节
				if (fat == 0) {
					if ((sD + 1) == 7) {
						Ssfw = "母亲节";
						lObj.innerHTML = "母亲节"
					}
				} else if (fat < 9) {
					if ((sD + 1) == ((7 - fat) + 8)) {
						Ssfw = "母亲节";
						lObj.innerHTML = "母亲节"
					}
				}
			}*/
			if (SM ==5) {
				if (lObj=='lunarD13') {
					Ssfw = "母亲节";
					lObj.innerHTML = "母亲节";
				}
			}
			if (SM ==6) {
				if (lObj=='lunarD20') {
					Ssfw = "父亲节";
					lObj.innerHTML = "父亲节";
				}
			}/*
			if ((SM + 1) == 6) { //父亲节
				if (mat == 0) {
					if ((sD + 1) == 14) {
						Ssfw = "父亲节";
						lObj.innerHTML = "父亲节"
					}
				} else if (mat < 9) {
					if ((sD + 1) == ((7 - mat) + 15)) {
						Ssfw = "父亲节";
						lObj.innerHTML = "父亲节"
					}
				}
			}*/
			if (s.length <= 0) { //设置节气的颜色
				s = cld[sD].solarTerms;
				if (s.length > 0) s = s.fontcolor('limegreen');
			}
			if (s.length > 0) {
				lObj.innerHTML = s;
				Slfw = s;
			} //节气
			if ((Slfw != null) && (Ssfw != null)) {
				lObj.innerHTML = Slfw + "/" + Ssfw;
			}
		} //  else { //非日期
		// 	//sObj.innerHTML = '';
		// 	lObj.innerHTML = '';
		// }
	}
}

//在下拉列表中选择年月时,调用自定义函数drawCld(),显示公历和农历的相关信息
/*
function changeCld() {
	var y, m;
	y = cld.SY.selectedIndex + 1900;
	m = cld.SM.selectedIndex;
	drawCld(y, m);
}*/
drawCld(yearInpVal(),checkMonth());