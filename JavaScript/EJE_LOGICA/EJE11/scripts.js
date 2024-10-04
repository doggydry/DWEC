/**
 * 11- Crea una función que reciba un rango, para cada valor en el rango se informará de si el
número es múltiplo de 3, si es múltiplo de 5 y si es número primo. Sólo mostrar información de
los números que cumplan alguna de las condiciones.
Añade el código auxiliar necesario para probar la aplicación.
 */

function esPrimo(numero) {
    if (numero <= 1) return false; // Los números menores o iguales a 1 no son primos
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false; // Si el número es divisible por i, no es primo
    }
    return true; // Si no se encontró ningún divisor, es primo
}

function verificarNumerosEnRango(inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
        let mensaje = ''; // Inicializar mensaje

        // Comprobar si es múltiplo de 3
        if (i % 3 === 0) {
            mensaje += `${i} es múltiplo de 3. `;
        }

        // Comprobar si es múltiplo de 5
        if (i % 5 === 0) {
            mensaje += `${i} es múltiplo de 5. `;
        }

        // Comprobar si es primo
        if (esPrimo(i)) {
            mensaje += `${i} es un número primo. `;
        }

        // Mostrar mensaje solo si hay información
        if (mensaje) {
            console.log(mensaje);
        }
    }
}

// Probar la función con un rango de números
verificarNumerosEnRango(3, 60);
