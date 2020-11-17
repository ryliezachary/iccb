$(document).ready(function(){
   
    $('.partners-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pushOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                infinite: true
             },
    }]
    });

});

