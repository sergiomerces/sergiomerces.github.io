//animação do título da home
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#title', {
        strings: ['>_ Eu sou <br> Desenvolvedor Web'],
        typeSpeed: 100,
        showCursor: true,
        cursorChar: '|',
        loop: false
    });
});

// ===== HAMBURGER MENU FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu').parentElement;
    const menuLinks = document.querySelectorAll('#navMenu li a');

    // Toggle menu ao clicar no hamburguer
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});
