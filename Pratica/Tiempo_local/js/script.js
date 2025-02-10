
// Selecao de elementos - cidades //

const bsas = document.querySelector("#bsas");
const mexico = document.querySelector("#mexico");
const santiago = document.querySelector("#santiago");
const sampa = document.querySelector("#sampa");
const quito = document.querySelector("#quito");


// Selecao de elementos - temperatura //

const sistema = document.querySelector("#sistema");
var display_temp = document.querySelectorAll(".display_tem");


// Selecao de elementos - footer & reload //

const banner = document.querySelector("#botao_aceitar");


// Definicao de cidades //

const cidade_bsas = [["img/sol.png", "Hoje", "Ensolarado", 28, 15], ["img/chuva.png", "Amanhã", "Chuvoso", 21, 13], ["img/chuva.png", "Sábado", "Chuvoso", 24, 12], ["img/nublado.png", "Domingo", "Nublado", 25, 14], ["img/chuva.png", "Segunda", "Chuvoso", 23, 11]];
const cidade_sampa = [["img/sol.png", "Hoje", "Ensolarado", 31, 15], ["img/sol.png", "Amanhã", "Ensolarado", 33, 20], ["img/sol.png", "Sábado", "Ensolarado", 32, 19], ["img/parcialmente.png", "Domingo", "Parcialmente nublado", 27, 16], ["img/sol.png", "Segunda", "Ensolarado", 31, 21]];
const cidade_quito = [["img/chuva.png", "Hoje", "Chuvoso", 18, 13], ["img/chuva.png", "Amanhã", "Chuvoso", 15, 08], ["img/nublado.png", "Sábado", "Nublado", 09, 07], ["img/neve.png", "Domingo", "Neve", 01, -03], ["img/tempestade.png", "Tempestade", "Segunda", 10, 07]];
const cidade_santiago = [["img/parcialmente.png", "Hoje", "Parcialmente nublado", 22, 12], ["img/sol.png", "Amanhã", "Ensolarado", 28, 17], ["img/chuva.png", "Sábado", "Chuvoso", 23, 16], ["img/vento.png", "Domingo", "Ventoso", 16, 12], ["img/nublado.png", "Segunda", "Nublado", 25, 14]];
const cidade_mexico = [["img/nublado.png", "Hoje", "Nublado", 22, 12], ["img/sol.png", "Amanhã", "Ensolarado", 28, 13], ["img/vento.png", "Sábado", "Ventoso", 25, 11], ["img/parcialmente.png", "Domingo", "Parcialmente nublado", 18, 10], ["img/sol.png", "Segunda", "Ensolarado", 26, 12]];


// Definicao temperatura e cidade base //

let celcius = true;

let last = cidade_bsas;

let city = "Buenos Aires";


// Definicao de eventos - carga de pagina //

window.addEventListener("pageshow", function (event) {
    alert("Carregando informações do clima.");
});


// Definicao de eventos - remocao do footer //

banner.addEventListener("click", function () {
    footer_alert.remove();
});


// Definicao de eventos - cidades //

bsas.addEventListener("click", function () {
    TrocaCidade(cidade_bsas, "Buenos Aires");
});

mexico.addEventListener("click", function () {
    TrocaCidade(cidade_mexico, "Cidade do México");
});

santiago.addEventListener("click", function () {
    TrocaCidade(cidade_santiago, "Santiago");
});

sampa.addEventListener("click", function () {
    TrocaCidade(cidade_sampa, "São Paulo");
});

quito.addEventListener("click", function () {
    TrocaCidade(cidade_quito, "Quito");
});


// Definicao de eventos - temperatura //

sistema.addEventListener("change", function () {
    if (sistema.value == "F") {
        celcius = false;
    }
    else {
        celcius = true;
    }
    TrocaCidade(last, city);
});


// Funcao Troca Cidade //

function TrocaCidade(target, display) {
    for (var index = 0; index < 5; index += 1) {
        document.getElementById(`figura_d${index}`).src = String(target[index][0]);
        document.getElementById(`dia${index}`).textContent = String(target[index][1]);
        document.getElementById(`tempo_d${index}`).textContent = String(target[index][2]);
        if (celcius == false) {
            document.getElementById(`temp_max_d${index}`).textContent = String(CelciusFarenheit(target[index][3]));
            document.getElementById(`temp_min_d${index}`).textContent = String(CelciusFarenheit(target[index][4]));
            display_temp.forEach(function (element) {
                element.textContent = "°F ";
            });
        }
        else {
                document.getElementById(`temp_max_d${index}`).textContent = String(target[index][3]);
                document.getElementById(`temp_min_d${index}`).textContent = String(target[index][4]);
                display_temp.forEach(function (element) {
                    element.textContent = "°C ";
                });
            }

        }
        cidade.textContent = display;
        last = target;
        city = display;
    }



    // Funcao calculo temperatura // 

    function CelciusFarenheit(celcius) {
        return Math.round((celcius * 9 / 5) + 32);
    }
