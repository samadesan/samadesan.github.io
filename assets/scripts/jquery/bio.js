$(document).ready(function(){
    // Inicialización del carrusel de Bio
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