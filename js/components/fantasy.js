var fantasyImagesArray=[

{fileName:"thinking_about_sm.svg",percent:"10%", fantasyType:"S&M", fontSize:"150px"},
{fileName:"thinking_about_dressing_up.svg",percent:"11%", fantasyType:"dressing up",fontSize:"70px"},
{fileName:"thinking_about_group_sex.svg",percent:"13%", fantasyType:"group sex",fontSize:"140px"},
{fileName:"thinking_about_masturbating.svg",percent:"14%", fantasyType:"masturbation",fontSize:"80px"},
{fileName:"thinking_about_roleplay.svg",percent:"16%", fantasyType:"roleplay",fontSize:"130px"},
{fileName:"thinking_about_watching.svg",percent:"17%", fantasyType:"watching others have sex",fontSize:"80px"},
{fileName:"thinking_about_nothing.svg",percent:"12%", fantasyType:"nothing",fontSize:"130px"}

]
var counter=0;

$(document).ready(function(){
$( "#right_arrow").click(function() {
  counter+=1;
if(counter<fantasyImagesArray.length){
  	HTMLWrite(counter)

  }
  else{
  	counter=0;
  	HTMLWrite(counter)
  }
});
$( "#left_arrow").click(function() {
	counter-=1
if(counter!=-1){
  	HTMLWrite(counter)
 }
  else{
  	counter=fantasyImagesArray.length-1
  	HTMLWrite(counter)
  }

});

});

function HTMLWrite(number){
	$( "#fantasy_examples" ).html( "<img src='../assets/img/fantasy/"+fantasyImagesArray[number].fileName+"' height='300px'>" );
	$( "#fantasy_percentage" ).html( fantasyImagesArray[number].percent );
 	$( "#fantasy_type" ).html( fantasyImagesArray[number].fantasyType ); 
//	$( "#fantasy_type" ).css( "font-size", function( index ) {
//  index=fantasyImagesArray[number].fontSize;
//  return index;
//
//});
}