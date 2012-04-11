/* Author:
  Tyler Cipriani
*/

$(function(){

  $('a.vcard').on('click',function(e) {
    e.preventDefault();

    $('body').load('vcard.html div.container');
  });

});
