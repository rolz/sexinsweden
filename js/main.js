var fantasyImagesArray=["thinking_about_sm.svg","thinking_about_dressing_up.svg","thinking_about_group_sex.svg","thinking_about_masturbating.svg","thinking_about_roleplay.svg","thinking_about_watching.svg","thinking_about_nothing.svg"]
var counter=1;

$(document).ready(function(){
$( "#fantasy_examples" ).click(function() {
if(counter<fantasyImagesArray.length){
	$( "#fantasy_examples" ).html( "<img src='fantasy_images/"+fantasyImagesArray[counter]+"' width='200px'>" );
  counter+=1;
  }
  else{
  	console.log("else")
 	$( "#fantasy_examples" ).html( "<img src='fantasy_images/"+fantasyImagesArray[0]+"' width='200px'>" );
  	counter=1;
  }
});
});