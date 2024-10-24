/**6-Crea una función que dibuje en un alert la figura geométrica indicada por parámetro. Donde
el primer parámetro será la función que genera el polígono y el segundo parámetro el número
que indica el tamaño del polígono.
Deberás definir un menú que solicite el polígono a representar: cuadrado hueco, triangulo,
rombo. Y después solicitar el tamaño al usuario. Incluye una opción de terminar.
Añade el código auxiliar necesario para probar la aplicación. */
'use strict;'
function dibujarCuadradoHueco5(tamano) {
    let figura = '';
    for (let i = 0; i < tamano; i++) {
        if (i === 0 || i === tamano - 1) {  // Primera y última fila
            for (let j = 0; j < tamano; j++) {
                figura += '*';
            }
        } else {  // Filas intermedias
            figura += '*';  // Primer asterisco de la fila
            for (let j = 1; j < tamano - 1; j++) {  // Espacios en medio
                figura += ' ';
            }
            figura += '*';  // Último asterisco de la fila
        }
        figura += '\n';  // Salto de línea al final de cada fila
    }
    return figura;
}

function dibujarTriangulo (tamano2){
    let figura = '';
    for (let i = 0; i < tamano; i++) {
        // Añadir espacios a la izquierda para centrar los asteriscos
        for (let j = 0; j < tamano - i - 1; j++) {
            figura += ' ';
        }
        // Añadir los asteriscos
        for (let j = 0; j < (2 * i + 1); j++) {
            figura += '*';
        }
        figura += '\n';  // Salto de línea al final de cada fila
    }
    return figura;
}
function dibujarRombo(tamano) {
    let figura = '';
    // Parte superior del rombo
    for (let i = 0; i < tamano; i++) {
        for (let j = 0; j < tamano - i - 1; j++) {  // Espacios antes del asterisco
            figura += ' ';
        }
        for (let j = 0; j < (2 * i + 1); j++) {  // Asteriscos en cada fila
            figura += '*';
        }
        figura += '\n';  // Salto de línea
    }
    // Parte inferior del rombo
    for (let i = tamano - 2; i >= 0; i--) {
        for (let j = 0; j < tamano - i - 1; j++) {  // Espacios antes del asterisco
            figura += ' ';
        }
        for (let j = 0; j < (2 * i + 1); j++) {  // Asteriscos en cada fila
            figura += '*';
        }
        figura += '\n';  // Salto de línea
    }
    return figura;
}
function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt("Selecciona la figura a dibujar:\n1. Cuadrado hueco\n2. Triángulo\n3. Rombo\n4. Terminar");
        let tamano;
        if (opcion !== '4') {
            tamano = prompt("Indica el tamaño del polígono:");
        }
        
        switch (opcion) {
            case '1':
                alert(dibujarCuadradoHueco(parseInt(tamano)));
                break;
            case '2':
                alert(dibujarTriangulo(parseInt(tamano)));
                break;
            case '3':
                alert(dibujarRombo(parseInt(tamano)));
                break;
            case '4':
                alert("Fin del programa");
                break;
            default:
                alert("Opción no válida");
        }
    } while (opcion !== '4');
}
mostrarMenu();

