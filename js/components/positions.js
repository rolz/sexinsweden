window.onload = function(){

$(document).ready(function ($) {

  var $container = $('.gridMissionary').masonry({
    columnWidth: 280,
    itemSelector: '.item',
    isFitWidth: true
  });

  var $container = $('.gridPositions').masonry({
    columnWidth: 280,
    itemSelector: '.item',
    isFitWidth: true
  });

  var $container = $('.gridFantasy').masonry({
    columnWidth: 230,
    itemSelector: '.item',
    isFitWidth: true
  });

  var $container = $('.enough-sex-grid').masonry({
    columnWidth: 420,
    itemSelector: '.enough-sex-item',
    isFitWidth: true
  });

  var $container = $('.gridCity').masonry({
    columnWidth: 280,
    itemSelector: '.postCard',
    isFitWidth: true
  });

  $('.item').click(function () {

    var positionName=$(this).children()[3].innerText;

    $(this).toggleClass('expand');
    var className=$(this)[0].className
    if(className=="item masonry-brick expand"){
        var imageURL="assets/img/positions/"+positionName+"-info.svg"
        $('.expand').css('background-image','url('+imageURL+')')

    }

    else{
      $('.item').css('background-image','none')

    }

  });

  //Switch to post card back
  $('#postCard').click(function () {

    var positionName=$(this).children()[3].innerText;

    $(this).toggleClass('expand');
    var className=$(this)[0].className
    if(className=="postCard masonry-brick expand"){
        var imageURL="assets/img/positions/"+positionName+"-info.svg"
        $('.expand').css('background-image','url('+imageURL+')')

    }

    else{
      $('.postCard').css('background-image','none')

    }

  });




  $('.q4 .blue-button').click(function () {
    event.stopPropagation()
      var favoriteSex = $(this).attr('name')
      $( "div#favorite-position" ).html('You chose <p style="font-family:Century; display: inline; font-size:20px;">'+favoriteSex+ '</p> as your favorite type of sex')
  });

    $('.q4 .grey-button').click(function () {
      $( "div#favorite-position" ).html('')
  });


  $('.q5 .blue-button').click(function () {
    event.stopPropagation()
      var favoriteFantasy = $(this).attr('name')
      $( "div#favorite-fantasy" ).html('You chose <p style="font-family:Century; display: inline ;font-size:20px;">'+favoriteFantasy+ '</p> as your favorite type of sex')
  });

  $('.q5 .grey-button').click(function () {
      $( "div#favorite-fantasy" ).html('')
  });



});
}