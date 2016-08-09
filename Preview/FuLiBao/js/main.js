'use strict';
$(function() {
	//轮播图图片选择
	$('[data-toggle="tooltip"]').tooltip();
	var windowWidth = $(window).width();
	$('#main-ad > .carousel-inner > .item').each(function(i, item) {
		var $item = $(item);
		if (windowWidth >= 768) {
			$item.css('backgroundImage', "url('" + $item.data('img-lg') + "')");
		} else {
			$item.html('<img src="'+ $item.data('img-xs') + '" />');
		}
	});

	//控制#product tab标签页宽度
	var $ulContainer = $('.nav-tabs');
	var width = 30;
	$ulContainer.children().each(function(i, item) {
		width += item.clientWidth;
	});
	if (windowWidth < width) {
		$ulContainer.css('width', width);
	}

	//新闻板块标题点击更改
	$('#news .nav-pills li a').on('click', function() {
		$('#news .news-title').html($(this).data('title'));
	});

	//轮播图手机端手指滑动切换
	var $carousel = $('.carousel');
	var startX = 0;
	var direction = 0;
	$carousel.on('touchstart', function(e) {
		startX = e.originalEvent.touches[0].clientX;
	});

	$carousel.on('touchmove', function(e) {
		direction = e.originalEvent.touches[0].clientX - startX;
	});

	$carousel.on('touchend', function(e) {
		if (direction > 50) {
			$(this).carousel('prev');
		} else if (direction < -50) {
			$(this).carousel('next');
		}
	});

	//消除a标签虚线框
	// $('a').on('focus', function() {
	// 	this.blur();
	// })
});