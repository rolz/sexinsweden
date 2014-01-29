	$(document).ready(function() {
	var age=18;
	  $("[name=range]").on("change", function() {
	    $("[for=range]").val(this.value);
	  	age=this.value
	    if(age<=70){
		  if(age%7==0){
		    var number=age/7

			$( "#moose_antlers" ).html( "<img src='assets/img/moose/moosehead"+number+".svg' height='400px'>" );
		  }
		}
	else{
		if(age%10==0){
			var number=age/10+2

			$( "#moose_antlers" ).html( "<img src='assets/img/moose/moosehead"+number+".svg' height='400px'>" );
		}
	}
	  }).trigger("change");
getAge(age);
	});
