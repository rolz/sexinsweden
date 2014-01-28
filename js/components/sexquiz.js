$( document ).ready(function() {
    console.log( "ready!" );

    /* User's Sex : Q0*/

    var userResponse = {};
    var cityResponse;

    $( ".q0 img" ).click(function() {
        var valueQ0 = $( this ).attr("alt")
        console.log(valueQ0);
        $(".sex").css('opacity','0.2')
        $(this).css('opacity','1')

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
    {q1:{a1:["e","d"],a2:["h","b"], a3:["f","g"], a4:["a","b","c","d","e","f","g","h"]}},
    {q2:{a1:["d","f"],a2:["h","g"], a3:["c","e"], a4:["a","b","c","d","e","f","g","h"]}},
    {q3:{a1:["a","b"],a2:["e","f"], a3:["d","g"], a4:["c","h"], a5:["a","b","c","d","e","f","g","h"]}},
    {q4:{a1:["g","a","h"],a2:["h","b","f"], a3:["b","a","d"], a4:["g","c","a"], a5:["b","c","h"], a6:["c","h","e"], a7:["a","b","c","d","e","f","g","h"]}},
    {q5:{a1:["e","f","d"],a2:["h","a","c"], a3:["g","d","b"], a4:["b","f","c"], a5:["a","g","h"], a6:["g","e","d"], a7:["b","f","c"], a8:["e","a","b"], a9:["a","b","c","d","e","f","g","h"]}}
    ];

    //Female results array

    var female = [
    {q1:{a1:["a","b"],a2:["g","d"], a3:["f","c"], a4:["a","b","c","d","e","f","g","h"]}},
    {q2:{a1:["d","c"],a2:["f","h"], a3:["a","g"], a4:["a","b","c","d","e","f","g","h"]}},
    {q3:{a1:["c","e"],a2:["f","h"], a3:["a","d"], a4:["b","g"], a5:["a","b","c","d","e","f","g","h"]}},
    {q4:{a1:["g","a","h"],a2:["h","b","f"], a3:["b","a","d"], a4:["g","c","a"], a5:["b","c","h"], a6:["c","h","e"], a7:["a","b","c","d","e","f","g","h"]}},
    {q5:{a1:["e","f","d"],a2:["h","a","c"], a3:["g","d","b"], a4:["b","f","c"], a5:["a","g","h"], a6:["g","e","d"], a7:["b","f","c"], a8:["e","a","b"], a9:["a","b","c","d","e","f","g","h"]}}
    ];


    /* Prudeness */

    // **** add male and female key pairs

    $(".q1 button").click(function() {
        var valueQ1 = $( this ).val();

        userResponse["q1"] = {"m": male[0].q1[valueQ1], "f": female[0].q1[valueQ1]};

        console.log(userResponse);
    });

    /* Lose Virginity */

    $(".q2 button").click(function() {
        var valueQ2 = $( this ).val();

        userResponse["q2"] = {"m": male[1].q2[valueQ2], "f": female[1].q2[valueQ2]};

        console.log(userResponse);
    });

    /* Sex Per Month */

    $(function(){
        var $select = $(".1-20");
        for (i=0;i<=20;i++){
            $select.append($('<option></option>').val(i).html(i))
        }
    });

    // With Answer

    $(".q3 #submit").click(function() {
        // find val of canvas maybe use document ready function
        var initValueQ3 = $(".q3 #screwYouText").text();
        console.log(initValueQ3);

        if (initValueQ3 <= 2) {
            var valueQ3 = "a1";
            userResponse["q3"] = {"m": male[2].q3[valueQ3], "f": female[2].q3[valueQ3]};
        }
        else if (initValueQ3 >= 3 && initValueQ3 <=6) {
            var valueQ3 = "a2";
            userResponse["q3"] = {"m": male[2].q3[valueQ3], "f": female[2].q3[valueQ3]};
        }
        else if (initValueQ3 >= 7 && initValueQ3 <= 15) {
            var valueQ3 = "a3";
            userResponse["q3"] = {"m": male[2].q3[valueQ3], "f": female[2].q3[valueQ3]};
        }
        else {
            var valueQ3 = "a4";
            userResponse["q3"] = {"m": male[2].q3[valueQ3], "f": female[2].q3[valueQ3]};
        };

        console.log(userResponse);
    });

    // No Answer

    $(".q3 #no-answer").click(function() {
        var valueQ3 = $( this ).val();

        userResponse["q3"] = {"m": male[2].q3[valueQ3], "f": female[2].q3[valueQ3]};

        console.log(userResponse);
    });



    /* Question 4 Positions*/

    $(".q4 button").click(function() {
        var valueQ4 = $( this ).val();

        userResponse["q4"] = {"m": male[3].q4[valueQ4], "f": female[3].q4[valueQ4]};

        console.log(userResponse);
    });

    /* Question 5 Fantasy*/

    $(".q5 button").click(function() {
        var valueQ5 = $( this ).val();

        userResponse["q5"] = {"m": male[4].q5[valueQ5], "f": female[4].q5[valueQ5]};

        console.log(userResponse);
    });

    // No Answer

    $(".q5 #no-answer").click(function() {
        var valueQ5 = $( this ).val();

        userResponse["q5"] = {"m": male[4].q5[valueQ5], "f": female[4].q5[valueQ5]};

        console.log(userResponse);
    });


    /*Submit to Visit Sweden and Get Result*/

    // get results according to sex at this point in app

    $("#finalResponseButton").click(function() {

        if (userResponse["sex"] == "m" || userResponse["sex"] == "f" ) {

            answerQ1 = userResponse.q1[userResponse.sex];
            answerQ2 = userResponse.q2[userResponse.sex];
            answerQ3 = userResponse.q3[userResponse.sex];
            answerQ4 = userResponse.q4[userResponse.sex];
            answerQ5 = userResponse.q5[userResponse.sex];

            //View all answers

            var userAnswersArray = answerQ1.concat(answerQ2, answerQ3, answerQ4, answerQ5);
            console.log(userAnswersArray);

            //Count answers

            var finalUserAnswersArray = _.chain(userAnswersArray).countBy().pairs().object().value();
            console.log(finalUserAnswersArray);

            // Sort into objects with Key Pairs

           var finalUserAnswersObject = _.map(finalUserAnswersArray, function(value, key) {
                return {id: key, count: value};
            });

           console.log(finalUserAnswersObject);

            function multiplemax(arr, compare) {
              var groups = _.groupBy(arr, compare);
              var keys = _.keys(groups);
              var max = _.max(keys);
              return groups[max];
            };

            var valueResponses = multiplemax(finalUserAnswersObject, "count");
            console.log(valueResponses);
            console.log(valueResponses.length);

            getCity(valueResponses);

        }
        else {
            console.log("Looks like you have not chosen your sex.")
        };

        // Get City

        function getCity(values) {

            // log city id
            console.log(values[0].id);

            var citiesArray = [
                {id:"a", cityName:"Åre"},
                {id:"b", cityName:"Leksand"},
                {id:"c", cityName:"Gävle"},
                {id:"d", cityName:"Kiruna"},
                {id:"e", cityName:"Visby"},
                {id:"f", cityName:"Stockholm"},
                {id:"g", cityName:"Malmö"},
                {id:"h", cityName:"Göteborg"}
            ];

            // If only one object then select city
            // Switch case and choose city.
            // var cityResponse;

            if (values.length === 1) {
                var cityId = values[0].id;
                switch(cityId) {
                    case "a":
                        var cityResponse = citiesArray[0].cityName;
                        break;
                    case "b":
                        var cityResponse = citiesArray[1].cityName;
                        break;
                    case "c":
                        var cityResponse = citiesArray[2].cityName;
                        break;
                    case "d":
                        var cityResponse = citiesArray[3].cityName;
                        break;
                    case "e":
                        var cityResponse = citiesArray[4].cityName;
                        break;
                    case "f":
                        var cityResponse = citiesArray[5].cityName;
                        break;
                    case "g":
                        var cityResponse = citiesArray[6].cityName;
                        break;
                    case "h":
                        var cityResponse = citiesArray[7].cityName;
                        break;
                }
                console.log(cityResponse);
                sendPostCard(cityResponse);
            }
            else {
                console.log("More than 1 value");

                // Randomize City Id's for when user has multiple id's with same count

                function random(array){
                  return array[ _.random(0, array.length-1) ]
                };

                var randomId = random(values);
                console.log(randomId);
                var cityId = randomId.id;

                //Switch Case and choose city

                switch(cityId) {
                    case "a":
                        var cityResponse = citiesArray[0].cityName;
                        break;
                    case "b":
                        var cityResponse = citiesArray[1].cityName;
                        break;
                    case "c":
                        var cityResponse = citiesArray[2].cityName;
                        break;
                    case "d":
                        var cityResponse = citiesArray[3].cityName;
                        break;
                    case "e":
                        var cityResponse = citiesArray[4].cityName;
                        break;
                    case "f":
                        var cityResponse = citiesArray[5].cityName;
                        break;
                    case "g":
                        var cityResponse = citiesArray[6].cityName;
                        break;
                    case "h":
                        var cityResponse = citiesArray[7].cityName;
                        break;
                }
                console.log(cityResponse);
                sendPostCard(cityResponse);
            };

            //Send PostCard
            function sendPostCard(city) {
                console.log(city);

                switch(city) {
                    case "Åre":
                        $(".mapForCity img").attr('src','assets/img/cities/are_map.svg');
                        $(".postCard img").attr('src','assets/img/cities/are_front.svg');
                        break;
                    case "Leksand":
                        $(".mapForCity img").attr('src','assets/img/cities/leksand_map.svg');
                        $(".postCard img").attr('src','assets/img/cities/leksand_front.svg');
                        break;
                    case "Gävle":
                        $(".mapForCity img").attr('src','assets/img/cities/gavle_map.svg');
                        $(".postCard img").attr('src','assets/img/cities/gavle_front.svg');
                        break;
                    case "Kiruna":
                        $(".mapForCity img").attr('src','assets/img/cities/kiruna_map.svg');
                        $(".postCard img").attr('src','assets/img/cities/kiruna_front.svg');
                        break;
                    case "Visby":
                        $(".mapForCity img").attr('src','assets/img/cities/visby_map.svg');
                        $(".postCard img").attr('src','assets/img/cities/visby_front.svg');
                        break;
                    case "Stockholm":
                        $(".mapForCity img").attr('src','assets/img/cities/stockholm_map.svg');
                        $(".postCard img").attr('src','assets/img/cities/stockholm_front.svg');
                        break;
                    case "Malmö":
                        $(".mapForCity img").attr('src','assets/img/cities/malmo_map.svg');
                        $(".postCard img").attr('src','assets/img/cities/malmo_front.svg');
                        break;
                    case "Göteborg":
                        $(".mapForCity img").attr('src','assets/img/cities/gothenburg_map.svg');
                        $(".postCard img").attr('src','assets/img/cities/gothenburg_front.svg');
                        break;
                }

            };


        };
    });
});


