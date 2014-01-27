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

    var positionName=$(this).children()[3].innerText

    $(this).toggleClass('expand');
    var className=$(this)[0].className
    if(className=="item masonry-brick expand"){
        var imageURL="assets/img/positions/"+positionName+"-info.svg"
        $('.expand').css('background-image','url('+imageURL+')')
    }

    else{
      $('.item').css('background-image','none')

    }



  //$('.expand').add('<img id="position-info" src="assets/img/positions/69-info.svg" style="z-index:100; position:absolute;">').html();

  //$(this).parent('.item').css('visibility','hidden');
  //$('.position-info').toggleClass('expand')

  //$(this).parent('.item').html('<img src="assets/img/positions/69-info.svg">');


  });

  //$('.item,.expand').click(function () { 
  //  console.log("hej")
  //    $('.item').removeClass('.expand');
  //});
  //

  $('.add-to-chart').click(function () {
      var favoriteSex = $(this).attr('value')
      $( "div.favorite-position" ).html('You chose <p style="font-family:Century; font-size:20px; display:inline">'+favoriteSex+ '</p> as your favorite type of sex')
  });


  
});
}