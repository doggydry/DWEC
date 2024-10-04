/**10-Crea una función que reciba una cadena de texto y que cuente el número de apariciones de
cada carácter. Debe devolver un objeto de tipo clave-valor con el resultado.
Añade el código auxiliar necesario para probar la aplicación. */


function contarCaracteres(cadena) {
    /** 
     * Objeto para almacenar el conteo de caracteres 
     */
    const contador = {}; 
    /**
     * Recorrer cada carácter de la cadena
     */
    for (let i = 0; i < cadena.length; i++) {
        /**
         * Obtener el carácter actual
         */
        const caracter = cadena[i]; 
        
        /**
         * Verificar si el carácter ya está en el objeto contador
         */
        if (contador[caracter]) {
            /**
             * Incrementar el conteo
             */
            contador[caracter] += 1; 
        } else {
            /**
             * Inicializar el conteo en 1
             */
            contador[caracter] = 1; 
        }
    }
    /**
     * Devolver el objeto con el conteo
     */
    return contador; 
}

/**
 * Probar la función con una cadena de texto
 */
const resultado = contarCaracteres("programacion");
console.log(resultado);
