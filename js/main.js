$('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav, .mask').toggleClass('show');
    
  });
$('.mask').on('click', function() {
  // openクラスを削除して、メニューを閉じる
  $('.nav_toggle, .nav, .mask').removeClass('show');
});
  