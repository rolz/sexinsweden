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
        controller.addTween('#gender', TweenMax.from( $('#genderSection'), .5, {css:{opacity: 0}}));
        controller.addTween('#moose_head', TweenMax.from( $('#ageSection'), .5, {css:{opacity: 0}}));
        controller.addTween('#average-amount-of-sexpartners', TweenMax.from( $('#average-amount-of-sexpartners'), .5, {css:{opacity: 0}}));
        controller.addTween('#lingonberry-q', TweenMax.from( $('#lingonberry-q'), .5, {css:{opacity: 0}}));
        controller.addTween('#lingonberry-f', TweenMax.from( $('#lingonberry-f'), .5, {css:{opacity: 0}}));
        controller.addTween('#screwYou', TweenMax.from( $('#sex-per-month-q'), .5, {css:{opacity: 0}}));
        controller.addTween('#swScrew', TweenMax.from( $('#swScrew'), .5, {css:{opacity: 0}}));
        controller.addTween('#missionary', TweenMax.from( $('#missionary'), .5, {css:{opacity: 0}}));
        controller.addTween('#smaken', TweenMax.from( $('#smaken'), .5, {css:{opacity: 0}}));
        controller.addTween('#how', TweenMax.from( $('#positions-q'), .5, {css:{opacity: 0}}));
        controller.addTween('#fantasy-transition', TweenMax.from( $('#fantasies-q'), .5, {css:{opacity: 0}}));
        controller.addTween('#mast', TweenMax.from( $('#mast'), .5, {css:{opacity: 0}}));
        controller.addTween('#masturbate-most', TweenMax.from( $('#masturbate-most'), 0.5, {css:{opacity: 0}}));
        controller.addTween('#parents', TweenMax.from( $('#parents'), 3, {css:{opacity: 0}},0,200));
        // controller.addTween('#satisfied', TweenMax.from( $('#satisfied'), .5, {css:{opacity: 0}}));
        controller.addTween('.graph', TweenMax.from( $('.graph'), .5, {css:{opacity: 0}}));
        controller.addTween('.satisfied-fade-out', TweenMax.from( $('.satisfied-fade-out'), 1, {css:{opacity: 0}}),0,170);
        controller.addTween('.satisfied-fade-in', TweenMax.from( $('.satisfied-fade-in'), 1, {css:{opacity: 1}}),0,270);


        controller.addTween('#fade', 
        TweenMax.from($('#fade'),.5,{
        css:{opacity:0}}),
        0, // scroll duration of tween (0 means autoplay)
        200); // offset the start of the tween by 200 pixels

        // set duration, in pixels scrolled, for pinned element
        // var pinDur = 1600;
        // // create animation timeline for pinned element
        // var pinAnimations = new TimelineLite();
        // pinAnimations
        //   .append(TweenMax.from($('#enough-sex-section'), .5, {css:{marginTop:0}, ease: Quad.easeInOut}))
        //   .append([
        //     TweenMax.to($('#enough-sex-section'), 1, {css:{marginLeft:'200px'}}),
        //     // TweenMax.to($('#pin-frame-pin'), 1, {css:{marginLeft:'100%'}})
        //   ], .5)
        //   .append([
        //     TweenMax.to($('#enough-sex-2'), .5, {css:{marginRight:'200px'}}),
        //     TweenMax.from($('#enough-sex-2'), .5, {css:{marginTop:'1px'}})
        //   ], .5)
        //   // .append(TweenMax.from($('#pin-frame-bounce'), 5, {css:{marginTop:'-100%'}, ease:Bounce.easeOut}), .5)
        //   // .append(TweenMax.from($('#pin-frame-color'), .25, {css:{opacity:0}}), .5)
        //   // .append([
        //   //   TweenMax.to($('#pin-fraenoume-color'), .25, {css:{backgroundColor:'blue'}}),
        //   //   TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'orange'}})
        //   // ])
        //   // .append([
        //   //   TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'green'}}),
        //   //   TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'red'}})
        //   // ])
        //   // .append([
        //   //   TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'yellow'}}),
        //   //   TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'purple'}})
        //   // ])
        //   // .append([
        //   //   TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'orange'}}),
        //   //   TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'blue'}})
        //   // ])
        //   // .append([
        //   //   TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'red'}}),
        //   //   TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'green'}})
        //   // ])
        //   // .append([
        //   //   TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'#222438'}}),
        //   //   TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'#FFB000'}})
        //   // ])
        //   .append(TweenMax.to($('#pin-frame-unpin'), .5, {css:{top:'100px'}}));
        
        // pin element, use onPin and onUnpin to adjust the height of the element

        // controller.pin($('#enough-sex-1'), pinDur, {
        //   anim:pinAnimations, 
        //   onPin: function() {
        //     $('#enough-sex-1').css('height','100%');
        //   }, 
        //   onUnpin: function() {
        //     // $('#enough-sex-1').scrollTo(0, 800);
        //     // $('#enough-sex-1').scrollTo( $('#calc'), 800 );
        //   }
        // });


        controller.addTween('#sex-sounds', TweenMax.from( $('#sexSounds'), .5, {css:{opacity: 0}}));
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
