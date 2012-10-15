/* Author:
  Tyler Cipriani
*/

var TylerCipriani = function() {
  var navScroll = function() {
    $('header a').on('click',function(e) {
      var $anchor = $(this),
          target = $anchor.attr('href');

      if (window.location.pathname === '/' && target !== '/hireme/' && target !== '/blog/') {
        e.preventDefault();
   
        $('html, body').stop().animate({
          scrollTop: $(target).offset().top
        }, 1500,'swing');
      }
    });
  }

  return {
    navScroll: navScroll 
  }
} ();

$(function(){
  TylerCipriani.navScroll();
  $('.headline').fitText(0.33);
});
