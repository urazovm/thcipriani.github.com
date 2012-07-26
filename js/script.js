/* Author:
  Tyler Cipriani
*/

$(function(){

  $('a.loadIt').on('click',function(e) {
    e.preventDefault();
    var href = $(this).href();

    $('.main').load(href + 'div.container');
  });

});
