const nav = document.querySelector('#main-nav');
const socials = document.querySelector('#socials');
const menu = document.querySelector('#menu');
const navToggle = document.querySelector('#nav-toggle');
const logo = document.querySelector('#logo');
const body = document.querySelector('body');

function toggle() {
    /* Toggles menu, nav and social icons */
    nav.classList.toggle('hidden-nav');
    socials.classList.toggle('hidden-socials');
    menu.classList.toggle('hidden-menu');

    /* Change the toggle style */
    navToggle.classList.toggle('active');
    navToggle.classList.toggle('fa-bars');
    navToggle.classList.toggle('fa-times');

    /* Change logo colors */
    toggleLogo();

    /* Prevent from scrolling */
    document.body.style.overflow = (document.body.style.overflow == 'hidden') ? 'scroll' : 'hidden';
    // body.classList.toggle('stop-scrolling');
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

function toggleTab(tab) {
    const tabToToggle = tab.getAttribute("data-tab-target");
    const features = document.querySelectorAll('section.features .feature');
    const links = document.querySelectorAll('nav.features button');

    features.forEach((feature) => {
        if (feature.getAttribute('data-tab') === tabToToggle) {
            feature.classList.remove('hide');
        } else {
            feature.classList.add('hide');
        }
    });

    links.forEach((link) => {
        if (link.getAttribute('data-tab-target') === tabToToggle) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function toggleAnswer(question) {
    let questionNumber = question.getAttribute("data-question");
    let answer = document.querySelector(`#answer${questionNumber}`);
    let arrow = document.querySelector(`#arrow-q${questionNumber}`);
    let arrowFill = arrow.getSVGDocument().querySelector('path').getAttribute('stroke');

    // answer.classList.toggle('hidden-answer');
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.marginBottom = null;
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.marginBottom = "2em";
    }

    arrow.classList.toggle('opened');

    if (arrowFill !== '#fa5757') {
        arrow.getSVGDocument().querySelector('path').setAttribute('stroke', '#fa5757');
    } else {
        arrow.getSVGDocument().querySelector('path').setAttribute('stroke', 'rgb(83, 104, 223)');
    }
}

function validateEmail(inputText) {
    let email = document.form1.email;
    let error = document.querySelector('p.error');
    let emailValidated = document.querySelector('p.validated');
    let warning = document.querySelector('#warning');

    console.log(error);
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)) {
        emailValidated.style.display = "block";
        email.focus();
        return true;
    } else {
        email.style.border = "2px solid #fa5757";
        error.style.display = "block";
        warning.style.display = "block";
        email.focus();
        return false;
    }
}