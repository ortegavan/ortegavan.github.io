var carrinho = {
    alias: "itensCarrinho",
    itens: new Map(),

    set adicionar([produto, quantidade]) {
        if (localStorage.getItem(this.alias) != null) {
            this.itens = new Map(JSON.parse(localStorage.getItem(this.alias)));
        }
        this.itens.set(produto, quantidade);
        localStorage.setItem(this.alias, JSON.stringify(Array.from(this.itens)));
    },

    set remover(produto) {
        if (localStorage.getItem(this.alias) != null) {
            this.itens = new Map(JSON.parse(localStorage.getItem(this.alias)));
        }
        this.itens.delete(produto);
        localStorage.setItem(this.alias, JSON.stringify(Array.from(this.itens)));
    },

    get ler() {
        if (localStorage.getItem(this.alias) != null) {
            this.itens = new Map(JSON.parse(localStorage.getItem(this.alias)));
        }
        return this.itens;
    },

    get total() {
        return this.ler.size;
    }
};

var favoritos = {
    alias: "itensFavoritos",
    itens: new Map(),

    set adicionar([produto, quantidade]) {
        if (localStorage.getItem(this.alias) != null) {
            this.itens = new Map(JSON.parse(localStorage.getItem(this.alias)));
        }
        this.itens.set(produto, quantidade);
        localStorage.setItem(this.alias, JSON.stringify(Array.from(this.itens)));
    },

    set remover(produto) {
        if (localStorage.getItem(this.alias) != null) {
            this.itens = new Map(JSON.parse(localStorage.getItem(this.alias)));
        }
        this.itens.delete(produto);
        localStorage.setItem(this.alias, JSON.stringify(Array.from(this.itens)));
    },

    get ler() {
        if (localStorage.getItem(this.alias) != null) {
            this.itens = new Map(JSON.parse(localStorage.getItem(this.alias)));
        }
        return this.itens;
    },

    get total() {
        return this.ler.size;
    }
};

var produtos = [
    {
        codigo: 1,
        sku: "0123456789",
        tipo: "audio",
        marca: "Beats",
        minititulo: "Fones de ouvido Beats",
        titulo: "Fones de ouvido Beats Solo3 Wireless Rose Gold",
        descricao: "Com 40 horas de bateria, o Beats Solo3 Wireless é o fone de ouvido perfeito para o dia a dia, com o Fast Fuel, uma recarga de cinco minutos oferece três horas de música. Curta toda sua liberdade de movimento e o famoso som da Beats com a tecnologia wireless Bluetooth Classe 1. Os fones de revestimento acolchoado podem ser ajustados para que você tenha conforto o dia todo.",
        preco: "R$ 1599,00",
        parcelado: "em até 12x de R$ 133,25",
        avista: "R$ 1439,10 à vista (10% de desconto)",
        imagem: "img/beats.jpg", 
        relacionados: [2,3,4],
        destaque: false,
        lancamento: false
    },
    {
        codigo: 2,
        sku: "0123456789",
        tipo: "consoles",
        marca: "Sony",
        minititulo: "Console Playstation 4",
        titulo: "Console Playstation 4 Special Edition",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris augue, convallis vitae lobortis ut, pulvinar at dolor. Etiam convallis, metus id aliquam mattis, diam lorem sagittis mi, tempus aliquam erat nulla sed lacus. Curabitur sodales elit et leo efficitur vehicula. Integer at dui maximus, suscipit tellus sit amet, sagittis ex.",
        preco: "R$ 3000,00",
        parcelado: "",
        avista: "",
        imagem: "img/playstation.jpg", 
        relacionados: [],
        destaque: true,
        lancamento: false
    },
    {
        codigo: 3,
        sku: "0123456789",
        tipo: "perifericos",
        marca: "Razer",
        minititulo: "Mouse gamer Razer",
        titulo: "Mouse gamer Razer sem fio",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris augue, convallis vitae lobortis ut, pulvinar at dolor. Etiam convallis, metus id aliquam mattis, diam lorem sagittis mi, tempus aliquam erat nulla sed lacus. Curabitur sodales elit et leo efficitur vehicula. Integer at dui maximus, suscipit tellus sit amet, sagittis ex.",
        preco: "R$ 1300,00",
        parcelado: "",
        avista: "",
        imagem: "img/mouse-razer.jpg", 
        relacionados: [], 
        destaque: true, 
        lancamento: false
    },
    {
        codigo: 4,
        sku: "0123456789",
        tipo: "audio",
        marca: "Beats",
        minititulo: "Fones de ouvido Powerbeats",
        titulo: "Fones de ouvido Powerbeats Pro",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris augue, convallis vitae lobortis ut, pulvinar at dolor. Etiam convallis, metus id aliquam mattis, diam lorem sagittis mi, tempus aliquam erat nulla sed lacus. Curabitur sodales elit et leo efficitur vehicula. Integer at dui maximus, suscipit tellus sit amet, sagittis ex.",
        preco: "R$ 2200,00",
        parcelado: "",
        avista: "",
        imagem: "img/fone-beats.jpg", 
        relacionados: [], 
        destaque: true, 
        lancamento: false
    },
    {
        codigo: 5,
        sku: "0123456789",
        tipo: "smartphones",
        marca: "Apple",
        minititulo: "iPhone 12",
        titulo: "iPhone 12",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris augue, convallis vitae lobortis ut, pulvinar at dolor. Etiam convallis, metus id aliquam mattis, diam lorem sagittis mi, tempus aliquam erat nulla sed lacus. Curabitur sodales elit et leo efficitur vehicula. Integer at dui maximus, suscipit tellus sit amet, sagittis ex.",
        preco: "R$ 7000,00",
        parcelado: "",
        avista: "",
        imagem: "img/iphone.jpg", 
        relacionados: [], 
        destaque: true, 
        lancamento: false
    },
    {
        codigo: 6,
        sku: "0123456789",
        tipo: "pcgamer",
        marca: "NVIDIA",
        minititulo: "Placa de vídeo GeForce",
        titulo: "Placa de vídeo NVIDIA GeForce RTX 2060",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris augue, convallis vitae lobortis ut, pulvinar at dolor. Etiam convallis, metus id aliquam mattis, diam lorem sagittis mi, tempus aliquam erat nulla sed lacus. Curabitur sodales elit et leo efficitur vehicula. Integer at dui maximus, suscipit tellus sit amet, sagittis ex.",
        preco: "R$ 3700,00",
        parcelado: "",
        avista: "",
        imagem: "img/geforce.jpg", 
        relacionados: [], 
        destaque: true, 
        lancamento: false
    },
    {
        codigo: 7,
        sku: "0123456789",
        tipo: "colecionaveis",
        marca: "Nintendo",
        minititulo: "Cogumelo do Mario",
        titulo: "Cogumelo do Mario colecionável",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris augue, convallis vitae lobortis ut, pulvinar at dolor. Etiam convallis, metus id aliquam mattis, diam lorem sagittis mi, tempus aliquam erat nulla sed lacus. Curabitur sodales elit et leo efficitur vehicula. Integer at dui maximus, suscipit tellus sit amet, sagittis ex.",
        preco: "R$ 50,00",
        parcelado: "",
        avista: "",
        imagem: "img/cogumelo-mario.jpg", 
        relacionados: [], 
        destaque: true, 
        lancamento: false
    },
    {
        codigo: 8,
        sku: "0123456789",
        tipo: "smartphones",
        marca: "Apple",
        minititulo: "iPhone 13",
        titulo: "iPhone 13 Rosa",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris augue, convallis vitae lobortis ut, pulvinar at dolor. Etiam convallis, metus id aliquam mattis, diam lorem sagittis mi, tempus aliquam erat nulla sed lacus. Curabitur sodales elit et leo efficitur vehicula. Integer at dui maximus, suscipit tellus sit amet, sagittis ex.",
        preco: "R$ 7600,00",
        parcelado: "",
        avista: "",
        imagem: "img/iphone13rosa.jpg", 
        relacionados: [], 
        destaque: false, 
        lancamento: false
    },
    {
        codigo: 9,
        sku: "0123456789",
        tipo: "eletronicos",
        marca: "Apple",
        minititulo: "Apple Watch",
        titulo: "Apple Watch Series 7",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris augue, convallis vitae lobortis ut, pulvinar at dolor. Etiam convallis, metus id aliquam mattis, diam lorem sagittis mi, tempus aliquam erat nulla sed lacus. Curabitur sodales elit et leo efficitur vehicula. Integer at dui maximus, suscipit tellus sit amet, sagittis ex.",
        preco: "R$ 5300,00",
        parcelado: "",
        avista: "",
        imagem: "img/apple-watch.jpg", 
        relacionados: [], 
        destaque: false, 
        lancamento: false
    },
    {
        codigo: 10,
        sku: "0123456789",
        tipo: "eletronicos",
        marca: "Apple",
        minititulo: "iMac",
        titulo: "Novo iMac de 24 polegadas com chip M1 da Apple",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris augue, convallis vitae lobortis ut, pulvinar at dolor. Etiam convallis, metus id aliquam mattis, diam lorem sagittis mi, tempus aliquam erat nulla sed lacus. Curabitur sodales elit et leo efficitur vehicula. Integer at dui maximus, suscipit tellus sit amet, sagittis ex.",
        preco: "R$ 17600,00",
        parcelado: "",
        avista: "",
        imagem: "img/imac-rosa.jpg", 
        relacionados: [], 
        destaque: false, 
        lancamento: true
    }
];