/* --- NAVBAR --- */
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('.navbar');

    // Scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Links
    const links = document.querySelectorAll('.nav-link, .navbar-brand');
    links.forEach(link => {
        link.onclick = function() {
            return true;
        };
    });
});
// jQuery: Navbar –> Animación del navbar
$(document).ready(function(){
    // Animación Sticky del Navbar al bajar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#avanzadoNav').addClass('scrolled');
        } else {
            $('#avanzadoNav').removeClass('scrolled');
        }
    });

    // Modificador dinámico de URL sin recargar página (Emula carpetas limpias)
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        let target = $(this).attr('href');
        let cleanUrl = target.replace('#', '/');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);

        // Cambia la URL visualmente a samadesan.github.io/experiencia/
        window.history.pushState("object or string", "Title", cleanUrl);
    });
});