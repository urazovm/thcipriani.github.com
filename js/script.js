/* Author:
  Tyler Cipriani
*/

$(function(){
  $('a.vcard').on('click',function(e) {
    e.preventDefault();
    var $main = $('div.main');

    $main.removeClass('jumbotron').addClass('vcard');

    $main.load('vcard.html div.main');
  }
})();
