function extraerExtremos(arr) {
    // Verificamos si el array está vacío
    if (arr.length === 0) {
        return [];
    }

    // Inicializar min y max con el primer elemento del array
    let min = arr[0];
    let max = arr[0];

    // Encontrar el valor mínimo y máximo
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    // Inicializar el array para los resultados
    let resultado = new Array(max - min + 1); // Crear un array vacío con longitud adecuada
    let indice = 0; // Variable para controlar la posición en resultado

    // Rellenar el array con números entre min y max
    for (let num = min; num <= max; num++) {
        let encontrado = false; // Bandera para verificar si el número está en arr

        // Recorrer el array original
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                encontrado = true; // Si encontramos el número, cambiamos la bandera
                break; // Salimos del bucle
            }
        }

        // Si el número no se encontró, lo añadimos al resultado
        if (!encontrado) {
            resultado[indice] = num; // Asignamos el número a la posición actual en resultado
            indice++; // Incrementamos el índice
        }
    }

    // Recortar el array resultado a la longitud correcta
    let resultadoFinal = new Array(indice); // Creamos un nuevo array con la longitud adecuada
    for (let j = 0; j < indice; j++) {
        resultadoFinal[j] = resultado[j]; // Copiamos los valores
    }

    return resultadoFinal; // Devolvemos el array de números faltantes
}

// Ejemplo de uso
const numeros = [3, 7, 1, 2, 8];
const faltantes = extraerExtremos(numeros);
console.log(faltantes); // Debería mostrar [4, 5, 6]
