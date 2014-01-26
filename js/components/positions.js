window.onload = function(){

$(document).ready(function ($) {
  
  var $container = $('.grid').masonry({
    columnWidth: 280,
    itemSelector: '.item',
    isFitWidth: true
  });

  var $container = $('.enough-sex-grid').masonry({
    columnWidth: 420,
    itemSelector: '.enough-sex-item',
    isFitWidth: true
  });

      
  $('.item').click(function () { 
    $(this).toggleClass('expand');
  });
  
});
}