
// *************** Definição de variáveis para manipular DOM *************** //

var sessao = document.querySelector("#inicio_sessao");
var like_gato = document.querySelector("#like_gato");
var like_golden = document.querySelector("#like_golden");
var definicao = document.querySelector("#definicao");


// *********************** Zera contadores Gato & Golden *********************** //

var GatoLike = 0;
var GoldenLike = 0;


// *********************** Controle do botão <Sessão> *********************** //

sessao.addEventListener("click", function () {
    if (sessao.value === "Iniciar sessão") {
        sessao.value = "Fechar sessão";
    } else {
        sessao.value = "Iniciar sessão";
    }
});


// *********************** Controle eventos Gato & Golden *********************** //

like_gato.addEventListener("click", function () {
    ContaAnimal("gato");
});


like_golden.addEventListener("click", function () {
    ContaAnimal("golden");
});


// *********************** Controle dos likes Gato & Golden *********************** //

function ContaAnimal(animal) {
    if (animal === "gato") {
        GatoLike += 1;
        alert("Gato Tigrado was liked");
        likes_gato.textContent = String(GatoLike);
    }
    else if (animal === "golden") {
        GoldenLike += 1;
        alert("Golden Retriever was liked");
        likes_golden.textContent = String(GoldenLike);
    }
}

// *********************** Controle do botão <Incluir Definição> *********************** //

definicao.addEventListener("click", function () {
    definicao.remove();
});


