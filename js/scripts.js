$(document).ready(function() {

    var indexImage;
    var imgSrcAttr;
   
// ------------------------------------------------------------------------------------------------------
    //  PRELOAD

    $(".catalog-thumnails .thumbnail").addClass("novisible");

    $(window).on('load', function () {


        var countCatalogThumbnailFor = 0;
        var animationDelay = 0;
        var countCatalogThumbnail;
        var intervalShow;


        setTimeout(function() {

            $(".preload-bg").fadeOut(500);

            $(".catalog-thumnails .thumbnail").removeClass("novisible");


            countCatalogThumbnail = $(".catalog-thumnails .thumbnail").length - 1;

            for ( countCatalogThumbnailFor = 0; countCatalogThumbnailFor <= countCatalogThumbnail; countCatalogThumbnailFor++ ) {
               

                $(".catalog-thumnails .thumbnail:eq("+ countCatalogThumbnailFor +")").css({

                                                    "-webkit-animation-delay": .6 + animationDelay + "s",
                                                    "-moz-animation-delay": .6 + animationDelay + "s",
                                                    "-o-animation-delay": .6 + animationDelay + "s",
                                                    "animation-delay": .6 + animationDelay + "s"

                                                });

                $(".catalog-thumnails .thumbnail:eq("+ countCatalogThumbnailFor +")").addClass("zoomIn");

                animationDelay = animationDelay + .3;

            }

        }, 1200);


    });

//     var scaleVal = 1;

// $(".catalog-thumnails .thumbnail")
//   .on( "mouseenter", function() {

//     // scaleVal = scaleVal + .03;

//     setInterval(function() {

//         scaleVal = scaleVal + .003;

//     }, 35);

//     $(this).css({"transform" : "scale("+ scaleVal +")"});

//   })
//   .on( "mouseleave", function() {

//     scaleVal = scaleVal - .03;

//     console.log(scaleVal);

//     $(this).css({"transform" : "scale("+ scaleVal +")"});

//   });



// ------------------------------------------------------------------------------------------------------

    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });

    // ---------------------------------------------------------

    $(function() {


        $(".catalog-link").click(function() {

            $(".catalog-modal-nav").fadeIn(300);

        });

        $(".menu-link").click(function() {

            $(".main-nav-modal").fadeIn(300);

        });

        $(".close-modal-nav").click(function() {

            $(this).parent(".modal-nav").fadeOut(300);

        });

    });


    // ---------------------------------------------------------

    $(function() {

        // var indexImage;
        // var imgSrcAttr;

        $(".sidebar-right img").click(function() {

            $(".preview-box").fadeIn(300);

            indexImage = $(".sidebar-right img").index(this);

            imgSrcAttr = $(".sidebar-right img:eq("+ indexImage +")").attr("src");

            $(".preview-box img").attr("src", imgSrcAttr);

        });

        $(".preview-box .close-btn, .preview-box .preview-bg").click(function() {

            $(".preview-box").fadeOut(300);

        });

    });




});
