/**7-Crea una función que reciba un número e imprima la tabla de multiplicar.
Crea una función que solicite dos números entre 0 y 10, y que imprima las tablas de multiplicar
entre los números indicados. Las tablas aparecerán desde el número más pequeño al mayor
(aquí hay validaciones).
Añade el código auxiliar necesario para probar la aplicación.
 */
'use strict';
function imprimirTabla(numero) {
    console.log("Tabla de multiplicar del " + numero);
    for (var i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}
function imprimirTablasEntreNumeros() {
    var num1 = prompt("Introduce el primer número (entre 0 y 10):");
    var num2 = prompt("Introduce el segundo número (entre 0 y 10):");

    // Convertir los valores a números
    num1 = Number(num1);
    num2 = Number(num2);

    // Validación simple
    if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10 || isNaN(num1) || isNaN(num2)) {
        alert("Ambos números deben estar entre 0 y 10.");
        return;
    }

    // Comprobamos cuál número es menor o mayor
    var menor = num1;
    var mayor = num2;

    if (num1 > num2) {
        menor = num2;
        mayor = num1;
    }

    // Imprimir las tablas desde el menor hasta el mayor
    for (var i = menor; i <= mayor; i++) {
        imprimirTabla(i);
        console.log("-------------------------"); // Separador entre tablas
    }
}
imprimirTablasEntreNumeros();
