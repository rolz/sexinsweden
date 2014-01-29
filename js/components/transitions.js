$(document).ready(function() {
        (new TimelineLite({onComplete:initScrollAnimations}))
        .from( $('#intro-screen'), .4, {delay: .5, css:{right:'1200px'}, ease:Back.easeOut})
        // .from( $('#title-line2'), .4, {css:{top:'1000px',opacity:'0'}, ease:Expo.easeOut})
        // .append([
        //   TweenMax.from( $('#title-line3 .char1'), .25+Math.random(), {css:{top: '-200px', right:'1000px'}, ease:Elastic.easeOut}),
        //   TweenMax.from( $('#title-line3 .char2'), .25+Math.random(), {css:{top: '300px', right:'1000px'}, ease:Elastic.easeOut}),
        //   TweenMax.from( $('#title-line3 .char3'), .25+Math.random(), {css:{top: '-400px', right:'1000px'}, ease:Elastic.easeOut}),
        //   TweenMax.from( $('#title-line3 .char4'), .25+Math.random(), {css:{top: '-200px', left:'1000px'}, ease:Elastic.easeOut}),
        //   TweenMax.from( $('#title-line3 .char5'), .25+Math.random(), {css:{top: '200px', left:'1000px'}, ease:Elastic.easeOut})
        // ])
        // .to( $('#title-info'), .5, {css:{opacity:.99, 'margin-top':0}, delay:-1, ease:Quad.easeOut});
      


        function initScrollAnimations() {
        var controller = $.superscrollorama();
        // var cityAnim = new TimelineLite();
        // cityAnim
        // .append(TweenMax.from($('#submit-answers'), .5, {css:{marginTop:0}, ease: Quad.easeInOut}))
        //   .append([
        //     TweenMax.to($('#your-city'), 1, {css:{marginLeft:'100%'}})
        //   ], .5)

        // function showCity() {
        //   controller.addTween('#submit-answers', TweenMax.from( $('#sex-sounds'), .5, {css:{opacity: 0}}));
        //   .from( $('#title-line2'), .4, {css:{top:'1000px',opacity:'0'}, ease:Expo.easeOut})
        // }

        // individual element tween examples
        // controller.addTween('#intro-screen', TweenMax.from( $('#intro-screen'), .5, {css:{opacity: 0}}));
        controller.addTween('#gender', TweenMax.from( $('#gender'), .5, {css:{opacity: 0}}));
        controller.addTween('#moose_head', TweenMax.from( $('#moose_head'), .5, {css:{opacity: 0}}));
        controller.addTween('#average-amount-of-sexpartners', TweenMax.from( $('#average-amount-of-sexpartners'), .5, {css:{opacity: 0}}));
        controller.addTween('#lingonberry-q', TweenMax.from( $('#lingonberry-q'), .5, {css:{opacity: 0}}));
        controller.addTween('#lingonberry-f', TweenMax.from( $('#lingonberry-f'), .5, {css:{opacity: 0}}));
        controller.addTween('#screwYou', TweenMax.from( $('#screwYou'), .5, {css:{opacity: 0}}));
        controller.addTween('#swScrew', TweenMax.from( $('#swScrew'), .5, {css:{opacity: 0}}));
        controller.addTween('#missionary', TweenMax.from( $('#missionary'), .5, {css:{opacity: 0}}));
        controller.addTween('#smaken', TweenMax.from( $('#smaken'), .5, {css:{opacity: 0}}));
        controller.addTween('#how', TweenMax.from( $('#how'), .5, {css:{opacity: 0}}));
        controller.addTween('#fantasy-transition', TweenMax.from( $('#fantasy-transition'), .5, {css:{opacity: 0}}));
        controller.addTween('#mast', TweenMax.from( $('#mast'), .5, {css:{opacity: 0}}));
        controller.addTween('#parents', TweenMax.from( $('#parents'), .5, {css:{opacity: 0}}));
        controller.addTween('#satisfied', TweenMax.from( $('#satisfied'), .5, {css:{opacity: 0}}));
        controller.addTween('#graph', TweenMax.from( $('#graph'), .5, {css:{opacity: 0}}));



        controller.addTween('#sex-sounds', TweenMax.from( $('#sex-sounds'), .5, {css:{opacity: 0}}));
        controller.addTween('#fantasy-headline', TweenMax.from( $('#fantasy-headline'), .25, {css:{opacity: 0}}));
        controller.addTween('#fantasy-container', TweenMax.from( $('#fantasy-container'), .25, {css:{opacity: 0}}));

        controller.pin($('#lingonberry'), 2000, {
            anim: (new TimelineLite())
            .append(
                TweenMax.to($('#lingonberry'), .5,
                    {css:{left: -2800}})
                )
        })};


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
