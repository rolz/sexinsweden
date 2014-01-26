$( document ).ready(function() {
    console.log( "ready!" );

    /* User's Sex */

    var userResponse = {};

    $( ".q0 button" ).click(function() {
        var valueQ0 = $( this ).val();
        console.log(valueQ0);

        if (valueQ0 == "m" || valueQ0 == "f") {
            userResponse["sex"] = valueQ0;
        }
        else {
            var randomSex = ["m","f"];
            var random = Math.floor(Math.random()*randomSex.length);
            userResponse["sex"] = randomSex[random];
        }

        console.log(userResponse);
    });

    // Possibe result 1=Man, 2=Female, 3=Other(random man or woman)
    // Whatever you choose here effects the path of the rest of the quiz.

    /*Quiz Data Set*/

    //Male results array

    var male = [
    {q1:{a1:["e","d"],a2:["h","b"], a3:["f","g"]}},
    {q2:{a1:["d","f"],a2:["h","g"], a3:["c","e"]}},
    {q3:{a1:["a","b"],a2:["e","f"], a3:["d","g"], a4:["c","h"]}},
    {q4:{a1:["g","a","h"],a2:["h","b","f"], a3:["b","a","d"], a4:["g","c","a"], a5:["b","c","h"], a6:["c","h","e"]}},
    {q5:{a1:["e","f","d"],a2:["h","a","c"], a3:["g","d","b"], a4:["b","f","c"], a5:["a","g","h"], a6:["g","e","d"], a7:["b","f","c"], a8:["e","a","b"]}}
    ];

    //Female results array

    var female = [
    {q1:{a1:["a","b"],a2:["g","d"], a3:["f","c"]}},
    {q2:{a1:["d","c"],a2:["f","h"], a3:["a","g"]}},
    {q3:{a1:["c","e"],a2:["f","h"], a3:["a","d"], a4:["b","g"]}},
    {q4:{a1:["g","a","h"],a2:["h","b","f"], a3:["b","a","d"], a4:["g","c","a"], a5:["b","c","h"], a6:["c","h","e"]}},
    {q5:{a1:["e","f","d"],a2:["h","a","c"], a3:["g","d","b"], a4:["b","f","c"], a5:["a","g","h"], a6:["g","e","d"], a7:["b","f","c"], a8:["e","a","b"]}}
    ];


    /* Prudeness */

    // **** add male and female key pairs

    $(".q1 button").click(function() {
        var valueQ1 = $( this ).val();
        answerM = male[0].q1[valueQ1];
        answerF = female[0].q1[valueQ1];
        console.log("male answer is "+male[0].q1[valueQ1]);
        console.log("female answer is "+female[0].q1[valueQ1]);

        userResponse.push(answerM,answerF);
        console.log(userResponse);
    });

    /* Lose Virginity */

    $(".q2 button").click(function() {
        var valueQ2 = $( this ).val();
        answerM = male[1].q2[valueQ2];
        answerF = female[1].q2[valueQ2];
        console.log("male answer is "+male[1].q2[valueQ2]);
        console.log("female answer is "+female[1].q2[valueQ2]);

        if (userResponse[0] == "m" ) {
            userResponse.push(answerM);
        }
        else {
            userResponse.push(answerF);
        }
    });

    /* Sex Per Month */
    // ****choose scales

    $(function(){
        var $select = $(".1-100");
        for (i=1;i<=20;i++){
            $select.append($('<option></option>').val(i).html(i))
        }
    });

    $(".q3 button").click(function() {
        var valueQ3 = $(".q3 select").val();
        answerM = male[2].q3[valueQ3];
        answerF = female[2].q3[valueQ3];
        console.log("male answer is "+male[2].q3[valueQ3]);
        console.log("female answer is "+female[2].q3[valueQ3]);

        if (userResponse[0] == "m" ) {
            userResponse.push(answerM);
        }
        else {
            userResponse.push(answerF);
        }
    });

    /* Question 5 Positions*/

    $(".q4 button").click(function() {
        var valueQ4 = $( this ).val();
        answerM = male[3].q4[valueQ4];
        answerF = female[3].q4[valueQ4];
        console.log("male answer is "+male[3].q4[valueQ4]);
        console.log("female answer is "+female[3].q4[valueQ4]);

        if (userResponse[0] == "m" ) {
            userResponse.push(answerM);
        }
        else {
            userResponse.push(answerF);
        }
    });

    /* Question 6 Fantasy*/

    // Set the interval to be 4 seconds for Fantasy Images
    var t = setInterval(function(){
        $("#fantasyImageCarousel ul").animate({marginLeft:-480},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },4000);

    // Set the interval to 4 seconds for text
    var u = setInterval(function(){
        $("#fantasyPercentageCarousel ul").animate({marginLeft:-480},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },4000);

    var v = setInterval(function(){
        $("#fantasyNameCarousel ul").animate({marginLeft:-480},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },4000);

    //Submit Fantasy answer

    $(".q5 button").click(function() {
        var valueQ5 = $("#fantasyImageCarousel li").val();
        answerM = male[4].q5["a"+valueQ5];
        answerF = female[4].q5["a"+valueQ5];
        console.log("male answer is "+male[4].q5["a"+valueQ5]);
        console.log("female answer is "+female[4].q5["a"+valueQ5]);

        if (userResponse[0] == "m" ) {
            userResponse.push(answerM);
        }
        else {
            userResponse.push(answerF);
        }

        console.log(userResponse);
    });


    /*Submit to Visit Sweden and Get Result*/

    // get results according to sex now
















    // Simone's Code

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
    };

});


