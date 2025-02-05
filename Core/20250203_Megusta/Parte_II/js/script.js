
// *********************** Controle eventos Like pessoa *********************** //

var like_Linn = document.querySelector("#Linn_botao");
var like_Lina = document.querySelector("#Lina_botao");
var like_Mateo = document.querySelector("#Mateo_botao");

// *********************** Inicializa contadores de likes *********************** //

var LinnLikes = 0;
var LinaLikes = 0;
var MateoLikes = 0;


// *********************** Controle eventos Like pessoa *********************** //

like_Linn.addEventListener("click", function () {
    ContaLikes("Linn");
});

like_Lina.addEventListener("click", function () {
    ContaLikes("Lina");
});

like_Mateo.addEventListener("click", function () {
    ContaLikes("Mateo");
});

// *********************** Função para contar likes para cada pessoa *********************** //

function ContaLikes(pessoa) {
    if (pessoa === "Linn") {
        LinnLikes += 1;
        Likes_Linn.textContent = String(LinnLikes);
    }
    else if (pessoa === "Lina") {
        LinaLikes += 1;
        Likes_Lina.textContent = String(LinaLikes);
    }
    else if (pessoa === "Mateo") {
        MateoLikes += 1;
        Likes_Mateo.textContent = String(MateoLikes);
    }
};

