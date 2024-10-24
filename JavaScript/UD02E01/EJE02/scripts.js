/**
 * 2-Realiza un programa que solicite números al usuario hasta que introduzca un 0. Y que
muestre los valores: máximo, mínimo, suma, media y total de números introducidos
 */
let num = 1;
let suma = 0;
//Si el primer número es negativo, el mínimo no se actualizará 
//correctamente porque minimo y maximo 
//están inicializados en 0. 
//Deberías inicializarlos después de leer el primer número
// o asignar un valor que garantice una comparación adecuada.
let minimo = Infinity;
let maximo = -Infinity;
let media = 0;
let numTtal = 0;

do {
    num = Number(prompt('Introduzca un numero'));
    //Mientras que el numero sea distinto de 0, entrara dentro de este if
    if (num !== 0) {
        if (num > maximo) {
            maximo = num;
        }
        if (num < minimo) {
            minimo = num;
        }
        suma += num;
        numTtal++;
    }
} while (num != 0);
if (numTtal > 0) {
    media = suma / numTtal;
}
alert('Maximo: ' + maximo + '\nMinimo: ' + minimo + '\nSuma :' + suma + '\nMedia: ' +media+'\nTotal de numeros introducidos: ' + numTtal);