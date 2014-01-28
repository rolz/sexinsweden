
$(document).ready(function() {
	var mapChanged=false;
$(window).scroll(function () {
  if(!mapChanged){
  if ($(window).scrollTop() >= $("#satisfied").position().top && $(window).scrollTop() + $(window).height() >= $("#satisfied").position().top) {
      $('#satisfied').css('position','fixed').css();
      mapChanged=true;
      console.log("scrolled!");

  }
}
});
});
