
$(document).ready(function ($) {

  $('.help').click(function () {
    var thisId="#"+$(this).attr('id')+"-help";

    $(thisId).toggleClass('help-hidden');

    $(thisId).toggleClass('help-visible');
      //console.log(thisClass)
      //$( thisClass ).html( '<img src="assets/img/help/'+thisId+'.svg" style="z-index:1000; position:absolute" height="200px">' );


  });
});
