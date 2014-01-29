$(document).ready(function() {
        var controller = $.superscrollorama();

        // individual element tween examples
        controller.addTween('#sex-sounds', TweenMax.from( $('#sex-sounds'), .5, {css:{opacity: 0}}));
        controller.addTween('#fantasy-headline', TweenMax.from( $('#fantasy-headline'), .25, {css:{opacity: 0}}));
        controller.addTween('#fantasy-container', TweenMax.from( $('#fantasy-container'), .25, {css:{opacity: 0}}));

        controller.pin($('#lingonberry'), 2000, {
            anim: (new TimelineLite())
            .append(
                TweenMax.to($('#lingonberry'), .5,
                    {css:{left: -2800}})
                )
        });


   //controller.pin($('#satisfied'), 700, {
   //    onUnpin: function(){
   //        $('#infografik').css('position', 'relative');


   //    }
   //}, -2000);

//    controller.addTween('#satisfied', TweenMax.from($('#satisfied'), .5,
//        {css:{opacity:0}},
//        {css:{left:100}})
//        ),
//            onUnpin: function(){
//            $('#infografik').css('position', 'fixed');
//        }
//);

//controller.pin($('.enough-sex-section'), 2000, {
//    anim: (new TimelineLite())
//    .append(
//        TweenMax.to($('.enough-sex-section'), 0.1,
//            {css:{left: -3900}})
//        ),
//    offset:-100
//
//});

});
