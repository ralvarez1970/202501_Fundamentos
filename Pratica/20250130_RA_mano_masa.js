
// Mao na massa //

// By Roberto Alvarez, Jan 2025 //

function PizzaOven(massa, cobertura, queijos, adicionais) {
    var pizza = {}
    pizza.massa = massa;
    pizza.cobertura = cobertura;
    pizza.queijos = queijos;
    pizza.adicionais = adicionais;
    return pizza;
}


var p1 = PizzaOven("Estilo Chicago", "calabresa", ["muzzarela", "brie"], ["cebola", "pimentão", "cogumelos", "alcaparras"]);
console.log("\nAqui está uma pizza muuuito gostosa...")
console.log(p1);

var p2 = PizzaOven("Massa fina", "tomates", ["muzzarela", "muzzarela de búfula"], ["basilico", "azeitona"]);
console.log("\nAqui está uma pizza inovadora...")
console.log(p2);

var p3 = PizzaOven("Massa alta", "cogumelos", ["muzzarela de búfula", "roquefort"],["alho poró", "cebola marinada", "pimenta de cheiro"]);
console.log("\nAqui está um apizza muito gostosa");
console.log(p3);

var p4 = PizzaOven("Napolitana", "anchovas", [], ["tomate cereja", "creme de leite", "pimenta calabresa", "aspargos"]);
console.log("\nAqui está uma pizza muito queijuda...");
console.log(p4);
