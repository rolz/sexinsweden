$(document).ready(function() {

    // Submit Stop
    $('#finalfinal').waypoint(function(direction) {

        if (direction === 'down') {
          $("body").css("overflow", "hidden");        }
        else {
          $("body").css("overflow", "scroll");         }

    });

    $('#slutOut').click(function() {
        $('#finalfinal').waypoint(function(direction) {
              $("body").css("overflow", "scroll");
        });
    });

    //Gender
    // $('#genderSection').waypoint(function(direction) {

    //     if (direction === 'down') {
    //       $("body").css("overflow", "hidden");        }
    //     else {
    //       $("body").css("overflow", "scroll");         }

    // });

    //Age
    // $('#ageSection').waypoint(function(direction) {

    //     if (direction === 'down') {
    //       $("body").css("overflow", "hidden");        }
    //     else {
    //       $("body").css("overflow", "scroll");         }

    // });

    // //Prudeness
    // $('#average-amount-of-sexpartners').waypoint(function(direction) {

    //     if (direction === 'down') {
    //       $("body").css("overflow", "hidden");        }
    //     else {
    //       $("body").css("overflow", "scroll");         }

    // });

    // //Virginity
    // $('#lingonberry-q').waypoint(function(direction) {

    //     if (direction === 'down') {
    //       $("body").css("overflow", "hidden");        }
    //     else {
    //       $("body").css("overflow", "scroll");         }

    // });

    // //Sex each month
    // $('#sex-per-month-q').waypoint(function(direction) {

    //     if (direction === 'down') {
    //       $("body").css("overflow", "hidden");        }
    //     else {
    //       $("body").css("overflow", "scroll");         }

    // });

    // //Sex each month
    // $('#positions-q').waypoint(function(direction) {

    //     if (direction === 'down') {
    //       $("body").css("overflow", "hidden");        }
    //     else {
    //       $("body").css("overflow", "scroll");         }

    // });

    // //Sex each month
    // $('#fantasies-q').waypoint(function(direction) {

    //     if (direction === 'down') {
    //       $("body").css("overflow", "hidden");        }
    //     else {
    //       $("body").css("overflow", "scroll");         }

    // });


});






