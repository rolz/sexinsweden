	var age=18;
window.onload = function(){

$(document).ready(function() {
  $("[name=range]").on("change", function() {
    $("[for=range]").val(this.value);
  	age=this.value
  if(age%10==0){
    var number=age/10
	$( "#moose_antlers" ).html( "<img src='../assets/img/moose/moosehead"+number+".svg' height='150px'>" );

  }
  }).trigger("change");

  
  
});


}