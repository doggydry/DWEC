/**
 * Escribe una función que reciba un número entero y devuelva un array del tamaño del
número indicado relleno con los primeros valores de la sucesión de Fibonacci.
La sucesión de Fibonacci se compone de una serie de valores en el que cada valor es la
suma de los dos valores previos. Por ejemplo:
0, 1, 1, 2, 3, 5, 8, 13, 21…
 */

function serieFibonacci (num){
    let arrayNum = Array (num);

    arrayNum [0] = 0;
    arrayNum [1] = 1;

    for (let i = 2; i < arrayNum.length; i++){
        arrayNum [i] = arrayNum[i-1] + arrayNum [i-2];
    }
    return arrayNum;
}
console.log(serieFibonacci(7));


document