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