/* Author:
  Tyler Cipriani
*/

$(function(){
  $('header a').on('click',function(e){
    var $anchor = $(this),
        target = $anchor.attr('href');

    if (target !== '/hireme/') {
      e.preventDefault();
 
      $('html, body').stop().animate({
        scrollTop: $(target).offset().top
      }, 1500,'swing');
    }
  });
});
