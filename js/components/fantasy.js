var fantasyImagesArray=[

{fileName:"thinking_about_sm.svg",percent:"10%", fantasyType:"S&M", value:"5",fontSize:"150px"},
{fileName:"thinking_about_dressing_up.svg",percent:"11%", fantasyType:"dressing up", value:"6",fontSize:"70px"},
{fileName:"thinking_about_group_sex.svg",percent:"13%", fantasyType:"group sex", value:"2" ,fontSize:"140px"},
{fileName:"thinking_about_masturbating.svg",percent:"14%", fantasyType:"masturbation", value:"1", fontSize:"80px"},
{fileName:"thinking_about_roleplay.svg",percent:"16%", fantasyType:"roleplay", value:"3", fontSize:"130px"},
{fileName:"thinking_about_watching.svg",percent:"17%", fantasyType:"watching others have sex", value:"7", fontSize:"80px"},
{fileName:"thinking_about_colleague.svg",percent:"12%", fantasyType:"colleagues", value:"4", fontSize:"130px"},
{fileName:"thinking_about_nothing.svg",percent:"12%", fantasyType:"nothing", value:"8",fontSize:"130px"}

]
var counter=0;

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


function HTMLWrite(number){
	$( "#fantasy_examples" ).html( "<img src='assets/img/fantasy/"+fantasyImagesArray[number].fileName+"' height='300px'>" );
	$( "#fantasy_percentage" ).html( fantasyImagesArray[number].percent );
 	$( "#fantasy_type" ).html( fantasyImagesArray[number].fantasyType );
//	$( "#fantasy_type" ).css( "font-size", function( index ) {
//  index=fantasyImagesArray[number].fontSize;
//  return index;
//
//});
}