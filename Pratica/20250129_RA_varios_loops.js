
// Part 1 - Imprimir pares do 1 ao 30 //

console.log("\n\n\n****************************************")
console.log("** Part 1 - Imprimir pares do 1 ao 30 **\n\n")

for (var contador = 1; contador <= 30; contador += 1) {
    if (contador%2 == 0) {
        console.log("É número par: " + contador);
    }
}


// Part 2 - Imprimir múltiplos de 4 em ordem decrescente //

console.log("\n\n\n****************************************")
console.log("** Part 2 - Imprimir múltiplos de 4 em ordem decrescente **\n\n")

for (var contador = 100; contador >= 1; contador -= 1) {
    if (contador%4 == 0) {
        console.log("Este é um múltiplo de 4 --> " + contador);
    }
}


// Part 3 - Imprimir a sequencia //

console.log("\n\n\n****************************************")
console.log("** Part 3 - Imprimir a sequencia **\n\n")

for (var contador = 10; contador > -6; contador -= 3) {
    console.log(contador);
}

// Part 4 - Somar todos os números pares do 1 ao 50 //

console.log("\n\n\n****************************************")
console.log("** Part 4 - Somar todos os números pares do 1 ao 50 **\n\n")

var numero = 0

for (var contador = 1; contador <= 50; contador += 1) {
    if (contador%2 == 0) {
        numero = numero + contador;
        console.log("Numero: " + contador + "  //  Resultado acumulado : " + numero);
    }
}

console.log ("\nResultado final: "+ numero);

// Part 5 - Fatorial de 20 //

console.log("\n\n\n****************************************")
console.log("** Part 5 - Fatorial de 20 **\n\n")

var fatorial = 1

for (var contador = 20; contador > 0; contador -= 1) {
    fatorial = fatorial * contador;
    console.log("Numero: "+ contador + " //  Fatorial parcial: " + fatorial);
}

console.log ("\nFatorial de 20: "+ fatorial);
