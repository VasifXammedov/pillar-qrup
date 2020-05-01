$(window).scroll(function () { 
    if($("html").scrollTop() >= 45){
        $("#bashliq .navbar").addClass("scrolled");
    }else{
        $("#bashliq .navbar").removeClass("scrolled");
    }


    // $(".search-icon").click(function (e) { 
    //     e.preventDefault();
    //     $(".popup").addClass("popup-show");
    //     $(".popup").css("display","block");
    // }

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:6,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
});