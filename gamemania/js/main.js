$(document).ready(function () {

    // habilita o click para busca no topo
    $("#botao-busca").click(function () {
        $("#div-busca").toggleClass("oculto-gg");
        $("#botao-busca i").toggleClass("fa-search").toggleClass("fa-times");
    });

    // habilita o click para descartar janelinha de cookies
    $("#botao-cookies").click(function () {
        aceitarCookies();
    });

    // oculta o menu responsivo caso a tela seja aumentada com ele aberto
    $(window).resize(function() {
        if ($(window).width() >= 768) {
            $("nav").removeClass("menu-responsivo");
        } else {
            $("nav").addClass("menu-responsivo");
        }}).resize();

    // atualiza quantidade de itens no carrinho
    if (carrinho.total > 0) {
        $(".carrinho-quantidade span").text(carrinho.total);
        $(".carrinho-quantidade").removeClass("oculto-gg oculto-g");
    }

    // atualiza quantidade de itens nos favoritos
    if (favoritos.total > 0) {
        $(".favoritos-quantidade span").text(favoritos.total);
        $(".favoritos-quantidade").removeClass("oculto-gg oculto-g");
    }

    // conta os caracteres no falecom
    $("#mensagem").keyup(function () {
        let caracteres = $(this).val().length;
        let atuais = $("#mensagem-caracteres");
        atuais.text(caracteres);
    });
});

function aceitarCookies() {
    localStorage.setItem("cookies", "1");
    $(".cookies").addClass("oculto-gg oculto-g oculto-m oculto-p oculto-pp");
}

function exibirCookies() {
    let alias = "cookies";
    let cookies;

    if (localStorage.getItem(alias) != null) {
        cookies = parseInt(localStorage.getItem(alias));
        if (cookies == 1) {
            $(".cookies").addClass("oculto-gg oculto-g oculto-m oculto-p oculto-pp");
        }
    }
}

function exibirMenuResponsivo() {
    $("nav").removeClass("oculto-pp oculto-p oculto-m").addClass("menu-responsivo");
    $(".menu-responsivo-fechar").removeClass("oculto-pp oculto-p oculto-m");
}

function ocultarMenuResponsivo() {
    $("nav").removeClass("menu-responsivo").addClass("oculto-pp oculto-p oculto-m");
    $(".menu-responsivo-fechar").addClass("oculto-pp oculto-p oculto-m");
}

function buscar() {
    let busca = $("#busca").val();
    localStorage.setItem("busca", busca);
    window.location.href = "busca.html";
}

function buscarVersaoMobile() {
    let busca = $("#busca-mobile").val();
    localStorage.setItem("busca", busca);
    window.location.href = "busca.html";
}

function comprar(sender, produto) {
    carrinho.adicionar = [produto, 1];
    $(".carrinho-quantidade span").text(carrinho.total);
    $(".carrinho-quantidade").removeClass("oculto-gg oculto-g");
    sender.innerHTML = "<i class=\"fas fa-check\"></i>";
}

function remover(produto) {
    carrinho.remover = produto;
    $(".carrinho-quantidade span").text(carrinho.total);
    $(".carrinho-quantidade").removeClass("oculto-gg oculto-g");
    carregarCarrinho();
}

function removerFavorito(produto) {
    favoritos.remover = produto;
    $(".favoritos-quantidade span").text(favoritos.total);
    $(".favoritos-quantidade").removeClass("oculto-gg oculto-g");
    carregarFavoritos();
}

function favoritar(sender, produto) {
    favoritos.adicionar = [produto, 1];
    $(".favoritos-quantidade span").text(favoritos.total);
    $(".favoritos-quantidade").removeClass("oculto-gg oculto-g");
    sender.innerHTML = "<i class=\"fas fa-heart\"></i>";
}

function carregarDetalhesProduto() {
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");
    renderizarProduto(produtos.find(produto => produto.codigo == id));
}

function carregarProdutosPorTipo() {
    let titulo = document.querySelector("#titulo-produtos");
    let params = new URLSearchParams(document.location.search);
    let tipo = params.get("tipo");

    if (tipo == "destaques") {
        renderizarProdutos(produtos.filter(produto => produto.destaque));
    }
    else if (tipo == "lancamentos") {
        renderizarProdutos(produtos.filter(produto => produto.lancamento));
    }
    else {
        renderizarProdutos(produtos.filter(produto => produto.tipo == tipo));
    }

    titulo.innerHTML = renderizarTipo(tipo);

    $(".menu-g a").each(function () {
        if ($(this).prop("href").indexOf(tipo) > 0) {
            $(this).addClass("atual");
        }
    });
}

function carregarProdutosHome() {
    renderizarProdutos(produtos.filter(produto => produto.destaque));
}

function carregarCarrinho() {
    let selecionados = produtos.filter(produto => carrinho.ler.has(produto.codigo));
    renderizarCarrinho(selecionados);
}

function carregarFavoritos() {
    let favoritados = produtos.filter(produto => favoritos.ler.has(produto.codigo));
    renderizarFavoritos(favoritados);
}

function renderizarFavoritos(selecionados) {
    let template = "";
    let divProdutos = document.querySelector("#carrinho");

    template += `
        <h2>
            Meus favoritos
        </h2>`;

    if (selecionados.length > 0) {
        for (let produto of selecionados) {
            template += `
            <div class="margem-topo">
                <img src="${produto.imagem}" alt="${produto.minititulo}">
                <p>
                    ${produto.titulo}<br>
                    <a onclick="removerFavorito(${produto.codigo});">Remover</a>
                </p>
                <p>
                    <strong>${produto.preco}</strong>
                </p>
            </div>`;
        }
    } else {
        template += `<div class="margem-topo">
            Sua lista de favoritos está vazia.
        </div>`;
    }

    divProdutos.innerHTML = template;
}

function renderizarCarrinho(selecionados) {
    let template = "";
    let divProdutos = document.querySelector("#carrinho");

    template += `
        <h2>
            Minha cesta de compras
        </h2>`;

    if (selecionados.length > 0) {
        for (let produto of selecionados) {
            template += `
            <div class="margem-topo">
                <img src="${produto.imagem}" alt="${produto.minititulo}">
                <p>
                    ${produto.titulo}<br>
                    <a onclick="remover(${produto.codigo});">Remover</a>
                </p>
                <p>
                    <strong>${produto.preco}</strong>
                </p>
            </div>`;
        }
    } else {
        template += `<div class="margem-topo">
            Sua cesta de compras está vazia.
        </div>`;
    }

    template += `
        <p class="margem-topo">&nbsp;</p>
        <a href="index.html" class="carrinho-voltar oculto-pp">
            <i class="far fa-arrow-left"></i> continuar comprando
        </a>
        <button>
            finalizar compra <i class="far fa-arrow-right"></i>
        </button>`;

    divProdutos.innerHTML = template;
}

function renderizarProdutos(produtos) {
    let template = "";
    let divProdutos = document.querySelector(".produtos");
    let divSemProdutos = document.querySelector(".sem-produtos");

    if (produtos.length > 0) {
        for (const produto of produtos) {
            template += `
            <div class="produto">
                <a href="produto.html?id=${produto.codigo}">
                    <img src="${produto.imagem}" alt="${produto.minititulo}">
                    <p>
                        ${produto.titulo}<br>
                        <strong>
                        ${produto.preco}<br>
                        </strong>
                    </p>
                </a>
                <div class="produto-comprar">
                    <button onclick="comprar(this, ${produto.codigo});">comprar</button>
                </div>
            </div>`;
        }

        divProdutos.innerHTML = template;

        if (produtos.length % 3 != 0) {
            divProdutos.style.setProperty("justify-content", "start", "important");
        }
    } else {
        divSemProdutos.style.setProperty("display", "block", "important");
    }
}

function renderizarProduto(produto) {
    let template = "";
    let divProduto = document.querySelector(".detalhe-produto");
    let divBreadcrumbs = document.querySelector(".breadcrumbs");

    if (produto.codigo > 0) {
        template += `
        <div>
            <h2>
                ${produto.titulo}
            </h2>
            <p>
                SKU: ${produto.sku}
            </p>
            <p class="margem-topo">
                ${produto.descricao}
            </p>
            <p class="margem-topo">
                <strong>${produto.preco}</strong><br>
                ${produto.parcelado}<br>
                ${produto.avista}
            </p>
            <p class="margem-topo">
                &nbsp;
            </p>
            <p class="margem-topo">
                <button onclick="comprar(this, ${produto.codigo});" class="botao-sacola">
                    <i class="fas fa-shopping-basket"></i> colocar na cesta
                </button>
                <button onclick="favoritar(this, ${produto.codigo});" class="botao-favorito">
                    <i class="far fa-heart"></i>
                </button>
            </p>
        </div>
        <div>
            <img src="${produto.imagem}" alt="${produto.minititulo}">
        </div>`;

        divProduto.innerHTML = template;

        template = `
        <div class="container">
            <a href="index.html">
                <i class="fal fa-house"></i>
            </a> / <a href="produtos.html?tipo=${produto.tipo}">
                ${renderizarTipo(produto.tipo)}
            </a> / <span class="atual">
                ${produto.minititulo}
            </span>
        </div>`;

        divBreadcrumbs.innerHTML = template;

        let relacionados = produtos.filter(relacionado => produto.relacionados.includes(relacionado.codigo));
        if (relacionados.length > 0) {
            renderizarRelacionados(produto, relacionados);
        }
    }
}

function renderizarRelacionados(produto, relacionados) {
    let template = "";
    let divRelacionados = document.querySelector(".compre-tambem");

    template += `<h2>Quem comprou <strong>${produto.minititulo}</strong> também comprou:</h2>
    <div>`;
    for (let relacionado of relacionados) {
        template += `<a href="produto.html?id=${relacionado.codigo}">
            <img src="${relacionado.imagem}" alt="${relacionado.minititulo}">
        </a>`;
    }
    template += `</div>`;

    divRelacionados.innerHTML = template;
}

function renderizarBuscados() {
    let busca = localStorage.getItem("busca");

    busca = busca != null ? busca.toLowerCase() : "";

    let buscados = produtos.filter(p =>
        p.titulo.toLowerCase().indexOf(busca) >= 0 ||
        p.descricao.toLowerCase().indexOf(busca) >= 0);
    let template = "";
    let divTermo = document.querySelector(".termo-busca");
    let divResultado = document.querySelector(".resultado-busca");
    let divQuantidade = document.querySelector(".resultado-busca-total");
    let divSemProdutos = document.querySelector(".sem-produtos");
    let divCabecalho = document.querySelector(".cabecalho-busca");

    divTermo.innerHTML = busca;

    if (buscados.length > 0) {
        for (let produto of buscados) {
            template += `
            <div>
                <a href="produto.html?id=${produto.codigo}">
                    <img src="${produto.imagem}" alt="${produto.minititulo}">
                    ${produto.titulo}
                    <p>${produto.preco}</p>
                </a>
            </div>`;
        }
        divQuantidade.innerHTML = buscados.length;
        divResultado.innerHTML = template;
    } else {
        divSemProdutos.style.setProperty("display", "block", "important");
        divCabecalho.style.setProperty("display", "none", "important");
    }

    localStorage.removeItem("busca");
}

function renderizarTipo(tipo) {
    switch (tipo) {
        case "lancamentos":
            return "Lançamentos";
        case "destaques":
            return "Destaques";
        case "jogos":
            return "Jogos";
        case "pcgamer":
            return "PC Gamer";
        case "eletronicos":
            return "Eletrônicos";
        case "perifericos":
            return "Periféricos";
        case "colecionaveis":
            return "Colecionáveis";
        case "consoles":
            return "Consoles";
        case "notebooks":
            return "Notebooks";
        case "smartphone":
            return "Smartphones & tablets";
        case "audio":
            return "Áudio";
        case "smarthome":
            return "Smart home";
        case "drones":
            return "Drones";
        default:
            return "Produtos";
    }
}