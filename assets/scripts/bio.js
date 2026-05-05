// Inicialización del carrusel de Bio
$(document).ready(function(){
    $('.bio-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        speed: 900,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true
    });
});

// Carrusel Ultra Dinámico para "Quién Soy"
$(document).ready(function () {
    $('.quien-soy-slider').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear'
    });
})