var age=18;
	$(document).ready(function() {
	  $("[name=range]").on("change", function() {
	    $("[for=range]").val(this.value);
	  	age=this.value
	    if(age<=70){
		  if(age%7==0){
		    var number=age/7
			console.log(number)

			$( "#moose_antlers" ).html( "<img src='assets/img/moose/moosehead"+number+".svg' height='300px'>" );
		  }
		}
	else{
		if(age%10==0){
			var number=age/10+2

			$( "#moose_antlers" ).html( "<img src='assets/img/moose/moosehead"+number+".svg' height='300px'>" );
		}

	}




	  }).trigger("change");
	});