
// *********************** Controle eventos Like pessoa *********************** //

var like_Linn = document.querySelector("#Linn_botao");


// *********************** Inicializa contadores de likes *********************** //

var LinnLikes = 0;


// *********************** Controle eventos Like pessoa *********************** //

like_Linn.addEventListener("click", function () {
    ContaLikes("Linn");
    console.log("Linn");
});


// *********************** Função para contar likes para cada pessoa *********************** //

function ContaLikes(pessoa) {
    if (pessoa === "Linn") {
        LinnLikes += 1;
        Likes_Linn.textContent = String(LinnLikes);
    }


}

