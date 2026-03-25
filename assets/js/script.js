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
