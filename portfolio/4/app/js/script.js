var nav = document.querySelector('#main-nav');
var socials = document.querySelector('#socials');
var menu = document.querySelector('#menu');
var navToggle = document.querySelector('#nav-toggle');
var logo = document.querySelector('#logo');
var body = document.querySelector('body');

function toggle() {
    /* Toggles menu, nav and social icons */
    nav.classList.toggle('hide');
    socials.classList.toggle('hide');
    menu.classList.toggle('hidden-menu');

    /* Change the toggle style */
    navToggle.classList.toggle('active');
    navToggle.classList.toggle('fa-bars');
    navToggle.classList.toggle('fa-times');

    /* Change logo colors */
    toggleLogo();

    /* Prevent from scrolling */
    body.classList.toggle('stop-scrolling');
    // logo.getSVGDocument().querySelectorAll().setAttribute("fill", "white");
    // logo.getSVGDocument().querySelectorAll().setAttribute("stroke", "white");
}

function toggleLogo() {
    if (logo.getSVGDocument().querySelector('#text').getAttribute('fill') === "#242A45") {
        logo.getSVGDocument().querySelector('#text').setAttribute('fill', 'white');
        logo.getSVGDocument().querySelector('#circle').setAttribute('fill', 'white');
        logo.getSVGDocument().querySelector('#flag').setAttribute('fill', '#242A45');
    } else {
        logo.getSVGDocument().querySelector('#text').setAttribute('fill', '#242A45');
        logo.getSVGDocument().querySelector('#circle').setAttribute('fill', '#5267DF');
        logo.getSVGDocument().querySelector('#flag').setAttribute('opacity', '#FFF');
    }
}