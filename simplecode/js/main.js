AOS.init();

const nav = document.querySelector("nav");
const logo = document.querySelector("#logo");
const logoResponsivo = document.querySelector("#logo-responsivo");
const menu = document.querySelector(".menu");
const menuAbrir = document.querySelector("#menu-responsivo-click-abrir");
const menuFechar = document.querySelector("#menu-responsivo-click-fechar");

window.onscroll = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        nav.classList.add("nav-amarela");
        logo.setAttribute("src", "img/logo-white.png");
        logoResponsivo.setAttribute("src", "img/profile-white.png");
    } else {
        nav.classList.remove("nav-amarela");
        logo.setAttribute("src", "img/logo.png");
        logoResponsivo.setAttribute("src", "img/profile.png")
    }
}

window.onresize = function () {
    if (window.innerWidth >= 992) {
        menu.classList.remove("menu-responsivo");
    } else {
        menu.classList.add("menu-responsivo");
    }
}

function abrirMenuResponsivo() {
    menu.classList.remove("oculto-g", "oculto-m", "oculto-p");
    menu.classList.add("menu-responsivo");
    menuAbrir.classList.add("oculto");
    menuFechar.classList.remove("oculto");
}

function fecharMenuResponsivo() {
    menu.classList.add("oculto-g", "oculto-m", "oculto-p");
    menu.classList.remove("menu-responsivo");
    menuAbrir.classList.remove("oculto");
    menuFechar.classList.add("oculto");
}