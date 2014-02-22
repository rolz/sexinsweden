//////////////////
//QUIZ

//Question 0 - Gender
$('.q0').children('img')
    .each(function(){
        $(this).on('click', function() {
          ga('send', 'event', 'Quiz', 'Q0 - Gender', $(this).attr('id'));
    });
});

//Question 1 - Prudeness
$('.q1').find('button')
    .each(function(){
        $(this).on('click', function() {
          ga('send', 'event', 'Quiz', 'Q1 - Prudeness', $(this).attr('id'));
    });
});

//Question 2 - Virginity
$('.q2').find('button')
    .each(function(){
        $(this).on('click', function() {
          ga('send', 'event', 'Quiz', 'Q2 - Virginity', $(this).attr('id'));
    });
});

//Question 3 - Sex per month
// ***get value out
$('.q3').find('button')
    .each(function(){
        $(this).on('click', function() {
          ga('send', 'event', 'Quiz', 'Q2 - Virginity', $(this).attr('id'));
    });
});





//////////////////

//AGE

//Moose


////////////////
// Time spent on sections


///////////////
//Explorations clicks

//Funnels