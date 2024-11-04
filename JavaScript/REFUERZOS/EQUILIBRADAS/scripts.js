/**
 ** Funcion para comrpobar las expresiones
 */
function comprobarExpresiones(expresion) {
  /**
   ** Contadores para poder llevar el recuento de cuantas veces
   ** ha salido cada simbolo
   */
  let contadorLlaves = 0;
  let contadorCorchetes = 0;
  let contadorParentesis = 0;

  /**
   ** For para recorrer la cadena caracter por caracter 
   ** Si se encuentra se suma el marcador, y si se encuentra 
   ** su par se resta
   */

  for (let i = 0; i < expresion.length; i++) {
    let caracter = expresion[i];

    if (caracter === "{") {
      contadorLlaves++;
    }
    if (caracter === "}") {
      contadorLlaves--;
    }
    if (caracter === "[") {
      contadorCorchetes++;
    }
    if (caracter === "]") {
      contadorCorchetes--;
    }
    if (caracter === "(") {
      contadorParentesis++;
    }
    if (caracter === ")") {
      contadorParentesis--;
    }

    /**
     ** Si hay algun marcador que es menor que 0 es 
     ** que hay alguna sin cerrar, devuelve false
     */
    if (
      contadorLlaves < 0 ||
      contadorParentesis < 0 ||
      contadorParentesis < 0
    ) {
      return false;
    }
  }
  /**
   ** Devuelve true
   */
  return (
    contadorLlaves === 0 && contadorCorchetes === 0 && contadorParentesis === 0
  );
}

console.log(comprobarExpresiones(" { a * ( c + d ) ] - 5 }"));
