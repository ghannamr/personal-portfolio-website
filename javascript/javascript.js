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
                       "top": "20vh"
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
                       "right": "23%"
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

               }
           }

       lastScrollTop = wS;
});

$(document).ready(function bounce(){
    var div = $(".arrow");
    div.animate({top: '+=20px'}, "slow");
    div.animate({top: '-=20px'}, "slow");
    bounce();
});
