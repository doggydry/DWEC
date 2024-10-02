/**9-Crea una función que reciba un número variable de parámetros y que los agrupe por tipo.
Después por cada tipo se mostrará el tipo y la colección de parámetros de ese tipo incluyendo
la posición original entre los parámetros.
Añade el código auxiliar necesario para probar la aplicación.
 */
function agruparPorTipo(...params) {
    const agrupados = {};

    // Recorrer los parámetros
    params.forEach((param, index) => {
        const tipo = typeof param;
        
        // Inicializar el array si el tipo no existe en el objeto
        if (!agrupados[tipo]) {
            agrupados[tipo] = [];
        }

        // Añadir el parámetro y su posición
        agrupados[tipo].push({ valor: param, posicion: index });
    });

    // Mostrar los resultados
    for (const tipo in agrupados) {
        console.log(`Tipo: ${tipo}`);
        agrupados[tipo].forEach(item => {
            console.log(`Valor: ${item.valor}, Posición: ${item.posicion}`);
        });
    }
}

// Código auxiliar para probar la función
agruparPorTipo("Hola", 23, true, "Mundo", 42, null, 3.14, false, undefined);
