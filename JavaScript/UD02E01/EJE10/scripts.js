/**10-Crea una función que reciba una cadena de texto y que cuente el número de apariciones de
cada carácter. Debe devolver un objeto de tipo clave-valor con el resultado.
Añade el código auxiliar necesario para probar la aplicación. */
function contarCaracteres(cadena) {
    /**
     * Creamos un contador para 
     * almacenar los caracteres
     */

    let contador = {};

    /**
     * Recorremos el texto caracter por caracter
     * Si existe, incrementamos el contador
     * Si no existe, lo inicializamos en 1
     */
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];

        if (contador[caracter]) {
            contador[caracter]++;
        } else {
            contador[caracter] = 1;
        }
    }

    
    return contador;
}

/**
 * Código auxiliar para probar la función
 */
let texto = "TECLADO MECANICO";
let resultado = contarCaracteres(texto);

/** 
 * Mostramos el resultado en alert 
 */
let mensaje = "";
for (let caracter in resultado) {
    mensaje += "Carácter: " + caracter + ", Apariciones: " + resultado[caracter] + "\n";
}
alert(mensaje);
