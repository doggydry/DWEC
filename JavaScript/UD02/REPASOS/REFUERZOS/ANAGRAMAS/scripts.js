/**
 * Escribe una función que reciba dos palabras y retorne verdadero o falso según sean o no
anagramas.
Un Anagrama consiste en formar una palabra reordenando todas las letras de otra palabra
inicial.
Ten en cuenta que:
• Las palabras pueden ser inventadas.
• Dos palabras exactamente iguales no son anagrama.
 */


/**
 ** Funcion principal para comprobar si son anagramas o no
 */
function comprobarAnagramas(palabra1, palabra2) {

  //! Primera comprobacion
  //* Si son iguales , no son anagramas
  if (palabra1 === palabra2) {
      return false;
  }
  
  //! Segunda comprobacion
  //* Si no tienen el mismo numero de caracteres, no son anagramas
  if (palabra1.length !== palabra2.length) {
    return false;
  }

  //* Variables para llevar el conteo de caracteres de cada palabra
  conteoPalabras1 = extraerCaracteres(palabra1);
  conteoPalabras2 = extraerCaracteres(palabra2);

  //! Tercera comrpobacion 
  //* Si no tienen el mismo numero de 
  for (let letra in conteoPalabras1) {
    if (conteoPalabras1[letra] !== conteoPalabras2[letra]) {
      return false
    } else {
        return true;
    }
  }
  return true;
  /**
   *!FUNCION INTERNA DENTRO DE COMPROBAR ANAGRAMA PARA CONTAR LOS CARACTERES
   ** Funcion para exrtaer caracteres de una cadena
   */
  function extraerCaracteres(palabra) {
    let conteoLetras = {}; //* Variable para llevar el conteo de cada caracter

    /**
     ** Con este for accedemos a cada caracter de la palabra, y lo vamos metiendo en
     ** el objeto conteoLetras para la comprobacion
     */
    for (let i = 0; i < palabra.length; i++) {
      let letra = palabra[i];
      if (!conteoLetras[letra]) {
        conteoLetras[letra] = 1;
      } else {
        conteoLetras[letra]++;
      }
    }

    return conteoLetras;
  }
}
comprobarAnagramas("amor", "roma");

/**
 ** Funcion para sacar por pantalla el resultado del script
 */
document.getElementById('comprobarBtn').addEventListener('click', function(){
  const palabra1 = document.getElementById('palabra1').value;
  const palabra2 = document.getElementById('palabra2').value;
  const resultado = comprobarAnagramas(palabra1, palabra2);
  comprobarAnagramas(palabra1, palabra2);


  document.getElementById('resultado').innerHTML = `Comprobación: ${resultado ? "Si son anagramas" : "No son anagramas"}`;

});