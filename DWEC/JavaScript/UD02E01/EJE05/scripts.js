/**5- Crea una función reciba un número y que dibuje un rombo de diagonal del tamaño del
número indicado. El valor devuelto será un array con cada una de las cadenas que forman el
rombo.
Añade el código auxiliar necesario para probar la aplicación. */
'use strict';
function dibujarRombo(tamano) {
    let rombo = [];  // Array donde almacenaremos las filas del rombo

    // Parte superior del rombo (incluye la fila del medio)
    for (let i = 1; i <= tamano; i += 2) {
        let fila = "";  // Aquí construiremos cada fila
        let numEspacios = (tamano - i) / 2;  // Número de espacios en blanco
        let numEstrellas = i;  // Número de estrellas

        // Añadimos los espacios a la fila
        for (let j = 0; j < numEspacios; j++) {
            fila += " ";
        }

        // Añadimos las estrellas a la fila
        for (let j = 0; j < numEstrellas; j++) {
            fila += "*";
        }
        
        // Añadimos los espacios finales (opcional, dependiendo de cómo quieras que se vea)
        for (let j = 0; j < numEspacios; j++) {
            fila += " ";
        }

        rombo[rombo.length] = fila;  // Agregamos la fila al array sin usar push
    }

    // Parte inferior del rombo (sin incluir la fila del medio)
    for (let i = tamano - 2; i >= 1; i -= 2) {
        let fila = "";  // Aquí construiremos cada fila
        let numEspacios = (tamano - i) / 2;  // Número de espacios en blanco
        let numEstrellas = i;  // Número de estrellas

        // Añadimos los espacios a la fila
        for (let j = 0; j < numEspacios; j++) {
            fila += " ";
        }

        // Añadimos las estrellas a la fila
        for (let j = 0; j < numEstrellas; j++) {
            fila += "*";
        }

        // Añadimos los espacios finales (opcional)
        for (let j = 0; j < numEspacios; j++) {
            fila += " ";
        }

        rombo[rombo.length] = fila;  // Agregamos la fila al array sin usar push
    }

    return rombo;  // Devolvemos el array con todas las filas
}

// Código auxiliar para probar el rombo
let tamano = 5;  // Puedes probar con otros números
let romboDibujado = dibujarRombo(tamano);

// Mostrar el rombo en la consola
for (let i = 0; i < romboDibujado.length; i++) {
    console.log(romboDibujado[i]);
}
