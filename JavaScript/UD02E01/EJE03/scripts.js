/**
 * 3-Crea una función reciba un número y que dibuje un rectángulo hueco de lado del tamaño del
número indicado. El valor devuelto será un array con cada una de las cadenas que forman el
rectángulo.
Añade el código auxiliar necesario para probar la aplicación.
 */

function rectangulo(num) {
    let rectangulo = [];

    // Construimos la primera fila que debe de ir completamente llena
    // del numero de asteriscos que introduzcamos

    // Definimos una variable para identificar esa
    // primera fila
    let primeraFila = '';

    // Usamos el bucle for para que en cada iteracion
    // nos añada un * y complete la fila

    for (let i = 0; i < num; i++) {
        primeraFila += '*';
    }
    // Ahora asignamos la primera fila al primer espacio
    // del array

    rectangulo[0] = primeraFila;

    // Para construir las filas del medio, haremos dos FOR, uno para
    // iniciar la fila con un asterisco, y otro para añadir los espacios
    // intermedios

    //  ---PRIMER FOR---
    // Comienza en 1 por que la primera fila es todo *
    // Al igual que la última, por eo
    // ---SEGUNDO FOR---
    // Este bucle se encarga de añadir los espacios entre los asteriscos
    // ¿Por que num-2?
    // Si el número es 5, este bucle iterará 3 veces 
    // (j = 0, j = 1, j = 2), añadiendo un espacio (" ") en cada iteración.
    for (let i = 1; i < num - 1; i++) {
        let filaIntermedia = '*';
        for (let j = 0; j < num - 2; j++) {
            filaIntermedia += ' ';
        }
        filaIntermedia += '*'; // Para añadir al lado derecho el último asterisco 
        rectangulo[i] = filaIntermedia; // Para guardar la fila en el array en la posicion de cada iteracion de i

    }
   //Cosntruir ultima fila
    rectangulo[num-1] = primeraFila;
    return rectangulo;
  
}
let numero = Number(prompt("Introduce el tamaño del rectángulo:"));
let resultado = rectangulo(numero);

// Construir el mensaje final manualmente
let mensaje = ""; // Variable para almacenar el mensaje completo
for (let i = 0; i < resultado.length; i++) {
    mensaje += resultado[i]; // Añadir la fila actual al mensaje
    if (i < resultado.length - 1) {
        mensaje += "\n"; // Añadir un salto de línea, excepto para la última fila
    }
}

// Mostrar el rectángulo completo en un solo alert
alert(mensaje);