$(document).ready(function(){
    // 1. Animación Sticky del Navbar al bajar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#avanzadoNav').addClass('scrolled');
        } else {
            $('#avanzadoNav').removeClass('scrolled');
        }
    });

    // 2. Carrusel Ultra Dinámico para "Quién Soy"
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

    // 3. Modificador dinámico de URL sin recargar página (Emula carpetas limpias)
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var cleanUrl = target.replace('#', '/');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);

        // Cambia la URL visualmente a samadesan.github.io/experiencia/
        window.history.pushState("object or string", "Title", cleanUrl);
    });
});