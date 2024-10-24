/**9-Crea una función que reciba un número variable de parámetros y que los agrupe por tipo.
Después por cada tipo se mostrará el tipo y la colección de parámetros de ese tipo incluyendo
la posición original entre los parámetros.
Añade el código auxiliar necesario para probar la aplicación.
 */
'use strict;'

function agrupar(...args) {
   /**
    * *Aqui creamos un objeto con 4 propiedades, 
    * *cada una de ellas es una lista vacía
    */
   const agrupadosPorTipo = {
      number: [],
      string: [],
      boolean: [],
      object: []
   }
   /**
    * *Aqui usamos un for para recorrer la lista de args 
    * *que contiene los valores que pasate a la funcion
    * !LINEA 25: obtiene los valores en la posicion de i
    * !LINEA 27: determina el tipo de ese valor usando typeof
    */
   for (let i = 0; i < args.length; i++) {
      let valor = args[i];
      let tipo = typeof valor;

      /**
       * *Ahora guardamos el valor segun su tipo
       */
      if (tipo === "number") {
         agrupadosPorTipo.number[agrupadosPorTipo.number.length] = { valor: valor, posicion: i };
      } else if (tipo === "string") {
         agrupadosPorTipo.string[agrupadosPorTipo.string.length] = { valor: valor, posicion: i };
      } else if (tipo === "boolean") {
         agrupadosPorTipo.boolean[agrupadosPorTipo.boolean.length] = { valor: valor, posicion: i };
      } else {
         agrupadosPorTipo.object[agrupadosPorTipo.object.length] = { valor: valor, posicion: i };
      }

   }


   /**
    * !PRIMER FON IN:
    * *Recorre cada tipo de dato 
    * *Si hay valores guardados por ese tipo los muestra en consola
    * !SEGUNDO FOR:
    * *Para cada tipo, recorremos la lista de valores y 
    * *mostrando su posición original y el valor en sí.
    */
   for (let tipo in agrupadosPorTipo) {
      if (agrupadosPorTipo[tipo].length > 0) {
         console.log("Tipo: " + tipo);  // Mostramos el tipo
         for (let j = 0; j < agrupadosPorTipo[tipo].length; j++) {
            console.log("Posición: " + agrupadosPorTipo[tipo][j].posicion + ", Valor: " + agrupadosPorTipo[tipo][j].valor);
         }
         console.log("---");
      }
   }

   agruparPorTipo(5, "Hola", true, 10, "Mundo", false, 3.14);
}




