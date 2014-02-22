//QUIZ

//Question 1 - Gender
$('.q0').children('img')
    .each(function(){
        $(this).on('click', function() {
          ga('send', 'event', 'Quiz', 'Gender', $(this).attr('id'));
    });
});
