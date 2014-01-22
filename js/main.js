var fantasyImagesArray=["thinking_about_sm.svg","thinking_about_dressing_up.svg","thinking_about_group_sex.svg","thinking_about_masturbating.svg","thinking_about_roleplay.svg","thinking_about_watching.svg","thinking_about_nothing.svg"]
var counter=0;
console.log("testing")
$(document).ready(function(){
$( "#right_arrow").click(function() {
  counter+=1;
if(counter<fantasyImagesArray.length){
	$( "#fantasy_examples" ).html( "<img src='fantasy_images/"+fantasyImagesArray[counter]+"' width='300px'>" );
  }
  else{
 	$( "#fantasy_examples" ).html( "<img src='fantasy_images/"+fantasyImagesArray[0]+"' height='300px'>" );
  	counter=1;
  }
});
$( "#left_arrow").click(function() {
	counter-=1
if(counter!=-1){
	$( "#fantasy_examples" ).html( "<img src='fantasy_images/"+fantasyImagesArray[counter]+"' width='300px'>" );
  }
  else{
  	counter=fantasyImagesArray.length-1
 	$( "#fantasy_examples" ).html( "<img src='fantasy_images/"+fantasyImagesArray[counter]+"' height='300px'>" );
  }

});

});