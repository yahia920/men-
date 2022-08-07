window.onload = function () {
let menu = document.querySelector('#menu-icon');
let navebar = document.querySelector('.navber');

menubar.oneclick = () => {
    menu.classList.toggle('bx-x');
    navebar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navebar.classList.remove('active');
}
};