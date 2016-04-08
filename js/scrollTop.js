$(function() {
  $(".header").load("header.html", function(responseText,textStatus,XMLHttpRequest) {
    if (textStatus == "error") {
      $(".header").load("./pages/header.html");
    }
  });
  $(".toTop").load("toTop.html", function(responseText,textStatus,XMLHttpRequest) {
    if (textStatus == "error") {
      $(".toTop").load("./pages/toTop.html");
    }
  });
  $(".back").load("back.html");
    //首先隐藏
  $(".toTop").hide();
  //当滚动条的位置处于距顶部600像素以下时，跳转链接出现，否则消失
  $(function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        $(".toTop").fadeIn(300);
      } else {
        $(".toTop").fadeOut(300);
      }
    });
    //当点击跳转链接后，回到页面顶部位置
    $(".toTop").click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 300);
      return false;
    });
  });

  //_blank
  $(function() {
    $(".code").attr('target', "_blank");
  });
});
