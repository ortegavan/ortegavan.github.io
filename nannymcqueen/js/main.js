const menu = document.querySelector("nav");
const botaoAbrir = document.querySelector("#botao-abrir");
const botaoFechar = document.querySelector("#botao-fechar");

function abrirMenu() {
    menu.classList.remove("oculto-p");
    menu.classList.add("menu-responsivo");
    botaoAbrir.classList.add("oculto-p");
    botaoFechar.classList.remove("oculto-p")
}

function fecharMenu() {
    menu.classList.add("oculto-p");
    menu.classList.remove("menu-responsivo");
    botaoAbrir.classList.remove("oculto-p");
    botaoFechar.classList.add("oculto-p")
}