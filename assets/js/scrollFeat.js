$(function(){
  $('a[href^="#"]').click(function(){
      var headerHight = 0;
      var speed = 800;
      var href= $(this).attr("href");
      var target = $(href === "#" || href === "" ? 'html' : href);
      var position = target.offset().top-headerHight;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
  });
});