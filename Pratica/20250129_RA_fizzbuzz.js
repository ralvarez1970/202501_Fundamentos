// FizzBuzz by R. Alvarez, Jan 2025 //

for (var contador = 1; contador <= 100; contador += 1) {
    if (contador % 3 == 0 && contador % 5 ==0) {
        console.log(contador);
        console.log("FizzBuzz");
    }
    else if (contador % 3 == 0) {
        console.log(contador);
        console.log("Fizz");
    }
    else if (contador % 5 == 0) {
        console.log(contador);
        console.log("Buzz");
    }
    else {
        console.log(contador);
    }
}



