/**9-Crea una función que reciba un número variable de parámetros y que los agrupe por tipo.
Después por cada tipo se mostrará el tipo y la colección de parámetros de ese tipo incluyendo
la posición original entre los parámetros.
Añade el código auxiliar necesario para probar la aplicación.
 */

function agruparPorTipo() {
    const grupos = {}; // Objeto para agrupar parámetros

    // Recorrer los argumentos recibidos
    for (let i = 0; i < arguments.length; i++) {
        const parametro = arguments[i]; // Obtener el parámetro actual
        const tipo = typeof parametro; // Obtener el tipo del parámetro

        // Verificar si el grupo ya existe
        if (!grupos[tipo]) {
            grupos[tipo] = []; // Inicializar el grupo si no existe
        }
        
        // Agregar el parámetro y su posición al grupo
        grupos[tipo][grupos[tipo].length] = { valor: parametro, posicion: grupos[tipo].length };
    }

    // Mostrar los resultados
    for (const tipo in grupos) {
        console.log("Tipo: " + tipo);
        console.log("Valores y posiciones:");
        
        // Recorrer los valores del grupo
        for (let j = 0; j < grupos[tipo].length; j++) {
            console.log("Valor: " + grupos[tipo][j].valor + ", Posición: " + j);
        }
        
        console.log(""); // Añadir una línea en blanco para separar grupos
    }
}

