window.addEventListener('resize', function (event) {
    if (document.body.clientWidth >= 992) {
        fecharMenu();
    }
}, true);

function abrirMenu() {
    let menu = document.querySelector("nav");
    menu.classList.add("menu-responsivo");
    menu.classList.remove("oculto-g", "oculto-m", "oculto-p", "oculto-pp");

    let menuFechar = document.querySelector(".menu-responsivo-fechar");
    menuFechar.classList.remove("oculto-g", "oculto-m", "oculto-p", "oculto-pp");
}

function fecharMenu() {
    let menu = document.querySelector("nav");
    menu.classList.remove("menu-responsivo");
    menu.classList.add("oculto-g", "oculto-m", "oculto-p", "oculto-pp");

    let menuFechar = document.querySelector(".menu-responsivo-fechar");
    menuFechar.classList.add("oculto-g", "oculto-m", "oculto-p", "oculto-pp");
}