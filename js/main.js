/* --------------------------------
 * ハンバーガーメニュー
 * -------------------------------- */
$(".menu-toggler").click(function(){

    var topVal = 0;
    if($(this).hasClass("active")) {
        topVal = -700;
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }

    $("#menu").stop().animate({
        top: topVal
    }, 200);
});

 /* --------------------------------
 * スムーズスクロール
 * -------------------------------- */
$('a[href^="#"]').click(function(){

  var speed = 400;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href); 
  var position = target.offset().top;

  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
});

