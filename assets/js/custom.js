/*=========================================================================
        Preloader
=========================================================================*/


$(window).load(function() {
    "use strict";
    $(".preloader-outer").css("top","-100%");

setTimeout(function(){

    $(".avatar").append('<img class="animatedavatar" src="assets/images/animations/venator.gif">');
    $(".welcomebuilder").append('<img class="animatedavatar" src="assets/images/animations/mainheader.gif">');
    $("#welcome").backstretch([
        "assets/images/animations/mainheader.gif",
    ], {duration: 5000, fade: 400});

 }, 500);

});

$(function(){
    "use strict";
    /*=========================================================================
            One Page Nav
    =========================================================================*/
    $(".navigation").onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 700,
        scrollThreshold: 0.5,
        easing: 'easeInOutCubic'
    });

    $('.menugifitem').freezeframe({'animation_play_duration': 1800})

    $( "#animatedavatar" ).on( "", function() {
      alert( $( this ).text() );
    });
    $( "#animatedavatar" ).trigger( "preloader-outer" );
    /*=========================================================================
            Portfolio filter
    =========================================================================*/
      if($('#works .item-outer').length > 0){
        var filterizd = $('#works .item-outer').filterizr();
      }
      $( '.control ul li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });

    /*=========================================================================
            Hamburger Menu & Mobile Push menu
    =========================================================================*/
    $(".hamburger-menu, .main-nav ul li a").on( 'click', function() {
        $(".header").toggleClass("pushed");
        $(".main-content").toggleClass("main-pushed");
        $('.bar').toggleClass('animate');
    });

    /*=========================================================================
            Bootstrap Tooltip
    =========================================================================*/
    $(".resume-download").tooltip();

    /*=========================================================================
            Carousels / Resume, Testimonials, Customers /
    =========================================================================*/
      $(".customer-carousel").owlCarousel({
        items: 4
      });

      $(".resume-carousel, .testimonial-carousel").owlCarousel({
        singleItem:true
      });

    /*=========================================================================
            Backstretch Background Slider
    =========================================================================*/
    $("#welcome").backstretch([
        "assets/images/mainheader.jpg",
    ], {duration: 5000, fade: 400});

    /*=========================================================================
            Welcome & Header Height
    =========================================================================*/
    $("#welcome").css({'height':($(window).height())+'px'});
    $(".header").css({'height':($(window).height())+'px'});

    /*=========================================================================
            Magnific Popup Functions
    =========================================================================*/
    $('.work-image').magnificPopup({
      type: 'image'
    });

    $('.work-video').magnificPopup({
      type: 'iframe',
      iframe: {
          markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '</div>',

          patterns: {
            youtube: {
              index: 'youtube.com/',

              id: 'v=',

              src: 'http://www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed'
            }

          },

          srcAction: 'iframe_src',
        }
    });

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 630 || document.documentElement.scrollTop > 630) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
  currentYOffset = self.pageYOffset;
  initYOffset = currentYOffset;

  var intervalId = setInterval(function(){
  currentYOffset -= initYOffset*0.03;
  document.body.scrollTop = currentYOffset ;
  document.documentElement.scrollTop = currentYOffset;

    if(self.pageYOffset == 0){
      clearInterval(intervalId);
    }
  }, 10);



}

var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
});

/////////////////////////////////////////////////////////////////////
//gaming page button sliders
/////////////////////////////////////////////////////////////////////

$(function () {

  $("#dota2button").click(function () {

    $('html, body').animate({

      scrollTop:$("#Dota2Div").offset().top

    }, 200);

    return false;
  });
});

$(function () {

  $("#csgobutton").click(function () {

    $('html, body').animate({

      scrollTop:$("#csgoDiv").offset().top

    }, 1000);

    return false;
  });
});

$(function () {

  $("#armabutton").click(function () {

    $('html, body').animate({

      scrollTop:$("#armaDiv").offset().top

    }, 1000);

    return false;
  });
});

$(function () {

  $("#gtabutton").click(function () {

    $('html, body').animate({

      scrollTop:$("#gtaDiv").offset().top

    }, 1000);

    return false;
  });
});

$(function () {

  $("#tosbutton").click(function () {

    $('html, body').animate({

      scrollTop:$("#tosDiv").offset().top

    }, 1000);

    return false;
  });
});

$(function () {

  $("#aq3dbutton").click(function () {

    $('html, body').animate({

      scrollTop:$("#aq3dDiv").offset().top

    }, 1000);

    return false;
  });
});

$(function () {

  $("#twabutton").click(function () {

    $('html, body').animate({

      scrollTop:$("#twaDiv").offset().top

    }, 1000);

    return false;
  });
});

$(function () {

  $("#aoe2button").click(function () {

    $('html, body').animate({

      scrollTop:$("#aoe2Div").offset().top

    }, 1000);

    return false;
  });
});

/////////////////////////////////////////////
/////////gaming section sliders end
/////////////////////////////////////////////
