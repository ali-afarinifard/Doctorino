// Menu Bar
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
};
// Menu Bar


// Scrolling (Move Header)
window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    };

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

};
// Scrolling (Move Header)


// onLoad
window.onload = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    };

};
// onLoad