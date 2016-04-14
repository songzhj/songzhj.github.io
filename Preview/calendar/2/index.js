
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
	}
}

var dateInfo=document.getElementById('dateInfo');
var ths=document.getElementsByTagName('th');
var weekd=(date-2+(getFirDateDay(year,month)))%7;
weekd=parseInt(weekd);
dateInfo.innerHTML='<p id="yerMonDay">'+year + '-' + month + '-' + date+' 星期'+ths[weekd].innerHTML+'</p>';
dateInfo.innerHTML+='<p id="hao">'+date+'</p>';

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