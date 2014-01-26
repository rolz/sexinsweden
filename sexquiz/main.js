$( document ).ready(function() {
    console.log( "ready!" );

    /* User Sex */

    $( ".q1 button" ).click(function() {
        var valueQ1 = $( this ).val();
        console.log("q1" + "=" + valueQ1);
    });

    /* Prudeness */

    $(".q2 button").click(function(e) {
        e.preventDefault();
        var valueQ2 = $( this ).val();
        console.log("q2" + "=" + valueQ2);

    });

    /* Lose Virginity */

    $(".q3 button").click(function(e) {
        e.preventDefault();
        var valueQ3 = $( this ).val();
        console.log("q3" + "=" + valueQ3);

    });

    /* Sex Per Month */

    $(function(){
        var $select = $(".1-100");
        for (i=1;i<=20;i++){
            $select.append($('<option></option>').val(i).html(i))
        }
    });

    $(".q4 button").click(function(e) {
        e.preventDefault();
        var valueQ4 = $(".q4 select").val();
        console.log("q4" + "=" +valueQ4);

    });

    /* Question 5 Positions*/

    $(".q5 button").click(function(e) {
        e.preventDefault();
        var valueQ5 = $( this ).val();
        console.log("q5" + "=" + valueQ5);
    });

    /* Question 6 Fantasy*/

    // Set the interval to be 2 seconds for Fantasy Images
    var t = setInterval(function(){
        $("#fantasyImageCarousel ul").animate({marginLeft:-480},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },2000);

    var u = setInterval(function(){
        $("#fantasyPercentageCarousel ul").animate({marginLeft:-480},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },2000);

    var v = setInterval(function(){
        $("#fantasyNameCarousel ul").animate({marginLeft:-480},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },2000);

    $( "#fantasyCarousel li" ).each(function( index ) {
      console.log( index + ": " + $( this ).val() );
    });

    // Set the interval to 2 seconds for text

    var fantasyImagesArray=[

    {fileName:"thinking_about_sm.svg",percent:"10%", fantasyType:"S&M", fantasyValue:"5",fontSize:"150px"},
    {fileName:"thinking_about_dressing_up.svg",percent:"11%", fantasyType:"dressing up", fantasyValue:"6",fontSize:"70px"},
    {fileName:"thinking_about_group_sex.svg",percent:"13%", fantasyType:"group sex", fantasyValue:"2" ,fontSize:"140px"},
    {fileName:"thinking_about_masturbating.svg",percent:"14%", fantasyType:"masturbation", fantasyValue:"1", fontSize:"80px"},
    {fileName:"thinking_about_roleplay.svg",percent:"16%", fantasyType:"roleplay", fantasyValue:"3", fontSize:"130px"},
    {fileName:"thinking_about_watching.svg",percent:"17%", fantasyType:"watching others have sex", fantasyValue:"7", fontSize:"80px"},
    {fileName:"thinking_about_colleague.svg",percent:"12%", fantasyType:"colleagues", fantasyValue:"4", fontSize:"130px"},
    {fileName:"thinking_about_nothing.svg",percent:"12%", fantasyType:"nothing", fantasyValue:"8",fontSize:"130px"}

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
        $( "#fantasy_examples" ).html( "<img src='../assets/img/fantasy/"+fantasyImagesArray[number].fileName+"' height='300px'>" );
        $( "#fantasy_percentage" ).html( fantasyImagesArray[number].percent );
        $( "#fantasy_type" ).html( fantasyImagesArray[number].fantasyType );
    //  $( "#fantasy_type" ).css( "font-size", function( index ) {
    //  index=fantasyImagesArray[number].fontSize;
    //  return index;
    //
    //});

        $(".q6 button").click(function() {
            var valueQ6 = fantasyImagesArray[number].fantasyValue;
            console.log("q6"+"="+valueQ6);
        });
    };

});


