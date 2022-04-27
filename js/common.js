$(document).ready(function () {


    //상단고정
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#header").addClass("fix");
        } else {
            $("#header").removeClass("fix");
        }
    });


    // 모바일메뉴 
    $('.mgnb_wrap').hide();
    $(".ham").click(function () {
        $(".mgnb_wrap").slideDown();
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").slideUp();
    });


});
