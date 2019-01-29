var lastScrollTop = 0;
$(window).scroll(function() {
   var hT = $('#AboutMe').offset().top,
       hH = $('#AboutMe').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop(),
       screenWidth = $(window).width();

           if (wS > (hH-wH) && wS > lastScrollTop){ //when scrolling down
               if(screenWidth > 800){//change the menu position to a fixed block on the left of the screen
                   console.log('Change menu layout to side');
                   $(".menu").css({
                       "flex-direction": "column",
                       "justify-content": "space-between",
                       "position": "fixed",
                       "right": "0",
                       "top": "20vh",
                       "width": "auto"

                   });
                   $(".menu-about-div").css({
                       "padding-top": "5vh",
                       "padding-bottom": "5vh"
                   });
                   $(".menu-timeline-div").css({
                       "padding-top": "5vh",
                       "padding-bottom": "5vh"
                   });
                   $(".menu-projects-div").css({
                       "padding-top": "5vh",
                       "padding-bottom": "5vh"
                   });
                   $(".menu-contact-div").css({
                       "padding-top": "5vh",
                       "padding-bottom": "5vh"
                   });

                   $(".menu-about").css({
                       "padding-left": "40px",
                       "padding-right": "40px"
                   });
                   $(".menu-timeline").css({
                       "padding-left": "28px",
                       "padding-right": "28px"
                   });
                   $(".menu-projects").css({
                       "padding-left": "30px",
                       "padding-right": "30px"
                   });
                   $(".menu-contact").css({
                       "padding-left": "32px",
                       "padding-right": "32px"
                   });
                   $(".back-to-top-link").css({
                       "opacity": "1",
                       "visibility": "visible"
                   });



               }

               //animate the arrow icon for all sizes
               /*var div = $(".arrow");
               div.animate({top: '+=20px'}, "slow");
               div.animate({top: '-=20px'}, "slow");*/

           }
           else if(wS < (hH-wH) && wS < lastScrollTop){ //when scrolling up
               if(screenWidth > 800){//change the menu position to a fixed block on the left of the screen
                   console.log('Change menu layout to top');
                   $(".menu").css({
                       "flex-direction": "row",
                       "justify-content": "center",
                       "position": "absolute",
                       "top": "55vh",
                       "width": "100%"
                   });
                   $(".menu-about-div").css({
                       "padding-top": "0",
                       "padding-bottom": "0",
                       "padding-left": "3vw",
                       "padding-right": "3vw"
                   });
                   $(".menu-timeline-div").css({
                       "padding-top": "0",
                       "padding-bottom": "0",
                       "padding-left": "3vw",
                       "padding-right": "3vw"
                   });
                   $(".menu-projects-div").css({
                       "padding-top": "0",
                       "padding-bottom": "0",
                       "padding-left": "3vw",
                       "padding-right": "3vw"
                   });
                   $(".menu-contact-div").css({
                       "padding-top": "0",
                       "padding-bottom": "0",
                       "padding-left": "3vw",
                       "padding-right": "3vw"
                   });

                   $(".menu-about").css({
                       "padding-left": "2vw",
                       "padding-right": "2vw"
                   });
                   $(".menu-timeline").css({
                       "padding-left": "2vw",
                       "padding-right": "2vw"
                   });
                   $(".menu-projects").css({
                       "padding-left": "2vw",
                       "padding-right": "2vw"
                   });
                   $(".menu-contact").css({
                       "padding-left": "2vw",
                       "padding-right": "2vw"
                   });
                   $(".back-to-top-link").css({
                       "opacity": "0",
                       "visibility": "hidden"
                   });


               }
           }

       lastScrollTop = wS;
});

$(document).ready(function bounce1(){
    var div1 = $(".arrow-down");
    div1.animate({top: '+=20px'}, "slow");
    div1.animate({top: '-=20px'}, "slow");
    bounce1();
});

$(document).ready(function bounce2(){
    var div2 = $(".back-to-top-link");
    div2.animate({top: '+=20px'}, "slow");
    div2.animate({top: '-=20px'}, "slow");
    bounce2();
});
