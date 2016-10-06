$(document).ready(function() {

    var indexImage;
    var imgSrcAttr;
   
// ------------------------------------------------------------------------------------------------------
    //  PRELOAD

    $(window).on('load', function () {


        var countCatalogThumbnailFor = 0;
        var countCatalogThumbnail;
        var intervalShow;


        $(".catalog-thumnails").css({"min-height" : $(".catalog-thumnails").height() + "px"});

        $(".catalog-item").addClass("novisible");

        setTimeout(function() {

            $(".preload-bg").fadeOut(500);

            $(".catalog-item").removeClass("novisible");

            countCatalogThumbnail = $(".catalog-thumnails .thumbnail").length - 1;

            intervalShow = setInterval(function() {

                $(".catalog-thumnails .thumbnail:eq("+ countCatalogThumbnailFor +")").addClass("show");

                countCatalogThumbnailFor++

                if( countCatalogThumbnailFor > countCatalogThumbnail ) {

                    clearInterval(intervalShow);

                    $(".catalog-thumnails").css({"min-height" : "auto"});

                }

            }, 400);

        }, 1200);


    });



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
