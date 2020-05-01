$(window).scroll(function () { 
    if($("html").scrollTop() >= 45){
        $("#bashliq .navbar").addClass("scrolled");

        $("#bashliq .navbar.navbarlogin").css("top", "0px");

        $("#bashliq .navbar .nav-item .nav-link").css("color", "black");
        
        $("#bashliq .navbar-brand  img").attr("src", "./img/logo.png");

        $("#bashliq .bashliq-nav  a i").css("color", "black");

    }else{
        $("#bashliq .navbar").removeClass("scrolled");

        $("#bashliq .navbar .nav-item .nav-link").css("color", "white");
        $("#bashliq .navbar-brand  img").attr("src", "./img/logo-light.png");

        $("#bashliq .bashliq-nav  a i").css("color", "white");

        $("#bashliq .navbar.navbarlogin").css("top", "45px");

        $("#bashliq .navbar.navbarlogin .nav-item .nav-link").css("color", "black");
        

        $("#bashliq .bashliq-nav  a i.logini").css("color", "black");
        $("#bashliq .navbar-brand  img").attr("src", "./img/logo.png");


    }
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




