$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });


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

        $(".close-modal-nav").click(function() {

            $(this).parent(".modal-nav").fadeOut(300);

        });

    });


    // ---------------------------------------------------------

    $(function() {

        var indexImage;
        var imgSrcAttr;

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
