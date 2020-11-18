$(document).ready(function(){
    $('.partners-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pushOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                infinite: true
             },
            breakpoint: 520,
            settings: {
                slidesToShow: 3,
                dots: true
            }
    }]
    });

});

