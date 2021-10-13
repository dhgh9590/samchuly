$(function(){


    $(".menu > ul > li").mouseenter(function(){
        $(".menu > ul > li").find(".sub_menu > li").stop().fadeOut(0);
        $(this).find(".sub_menu > li").stop().fadeIn();
        $(".menu > ul > li").removeClass("active");
        $(this).addClass("active");
        $("#nav").addClass("active");
    });

    $(".menu > ul > li").mouseleave(function(){
        $("#nav").removeClass("active");
    });

    let nowScrollTop;
    let lastScrollTop = 0;


    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();

        if(scrollTop != 0){
            $("#nav").css({background:"linear-gradient(to bottom, rgba(255, 255 , 255, 1) 100px,rgba(250, 250 , 250, 1) 100px)"});
        }else{
            $("#nav").removeClass("hide");
        }

        nowScrollTop = true;

        setInterval(function(){
            if(nowScrollTop){
                nowScrollTop = false;
                hasScroll();
            }
        }, 1000);
    });

    function hasScroll(){
        let scrollTop = $(this).scrollTop();

        if( scrollTop > lastScrollTop ){
            $("#nav").addClass("hide");
        } else{
            $("#nav").removeClass("hide");
        }

        lastScrollTop = scrollTop;
    }


});