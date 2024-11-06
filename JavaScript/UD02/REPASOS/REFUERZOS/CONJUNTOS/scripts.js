function conjuntos(arr, arr1, operacion) {
    let resultado;
    operacion = "";

    switch (operacion) {
        case "union":
            arrUnion = []; // Array de unión
            let indice = 0;

            // Recorrer `arr` para agregar sus valores únicos
            for (let elemento = 0; elemento < arr.length; elemento++) {
                esUnico = true;

                // Comprobar si `arr[elemento]` ya está en `arrUnion`
                for (let valor = 0; valor < arrUnion.length; valor++) {
                    if (arr[elemento] === arrUnion[valor]) {
                        esUnico = false;
                        break;
                    }
                }

                // Si es único, lo agregamos
                if (esUnico === true) {
                    arrUnion[indice] = arr[elemento];
                    indice++;
                }
            }

            // Recorrer `arr1` y repetir la misma lógica para valores únicos
            for (let elemento = 0; elemento < arr1.length; elemento++) {
                esUnico = true;

                // Comprobar si `arr1[elemento]` ya está en `arrUnion`
                for (let valor = 0; valor < arrUnion.length; valor++) {
                    if (arr1[elemento] === arrUnion[valor]) {
                        esUnico = false;
                        break;
                    }
                }

                // Si es único, lo agregamos
                if (esUnico === true) { 
                    arrUnion[indice] = arr1[elemento];
                    indice++;
                }
            }

            resultado = arrUnion;
            break;

        case "interseccion":

            break;

        case "diferencia":

            break;
        default:
            console.log("Operacion no válida");
            return;

    }
}