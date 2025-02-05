
// Definicao dos elementos to watch //
const trumpyes = document.querySelector("#trumpyes");
const trumpno = document.querySelector("#trumpno");
const boricyes = document.querySelector("#boricyes");
const boricno = document.querySelector("#boricno");

const editar = document.querySelector("#editar");

// Definicao variavel contatos //

let conexoes = 500;
let solicitacoes= 2;


// Reações a eventos - aceitar ou recusar conexões //


trumpyes.addEventListener("click", function () {
    UpdateConexoes (trump, true);
});

trumpno.addEventListener("click", function () {
    UpdateConexoes (trump, false);
});

boricyes.addEventListener("click", function () {
    UpdateConexoes (boric, true);
});

boricno.addEventListener("click", function () {
    UpdateConexoes (boric, false);
});

function UpdateConexoes (person, aceita) {
    person.remove();
    solicitacoes -= 1;
    if (aceita === true) {
        conexoes += 1;
    }
    numero_conexoes.textContent = String(conexoes);
    numero_solicitacoes.textContent = String(solicitacoes);
}

// Reações a eventos - aceitar ou recusar conexões //

editar.addEventListener("click", function () {
    MudarUsuario ();
});

function MudarUsuario () {
    roberto.textContent = "Zé das Couves";
    picture.className = "foto foto_ze";
}


