const menu = document.querySelector("nav");
const iconeAbrir = document.querySelector("#abrir-menu");
const iconeFechar = document.querySelector("#fechar-menu");

function abrirMenu() {
    menu.classList.remove("oculto-p");
    iconeAbrir.classList.add("oculto");
    iconeFechar.classList.remove("oculto");
}

function fecharMenu() {
    menu.classList.add("oculto-p");
    iconeAbrir.classList.remove("oculto");
    iconeFechar.classList.add("oculto");
}