/**
 * Escribe una función que reciba dos palabras y retorne verdadero o falso según sean o no
anagramas.
Un Anagrama consiste en formar una palabra reordenando todas las letras de otra palabra
inicial.
Ten en cuenta que:
• Las palabras pueden ser inventadas.
• Dos palabras exactamente iguales no son anagrama.
 */
function comprobarAnagramas(palabra1, palabra2) {
    if (palabra1 === palabra2) {
      return false;
    }
    if (palabra1.length !== palabra2.length) {
      return false;
    }
  
    let conteoPalabras1 = extraerCaracteres(palabra1);
    let conteoPalabras2 = extraerCaracteres(palabra2);
  
    for (let letra in conteoPalabras1) {
      if (conteoPalabras1[letra] !== conteoPalabras2[letra]) {
        return false; // Si no coinciden, retorna false
      }
    }
  
    return true; // Si todas coinciden, retorna true
  
    function extraerCaracteres(palabra) {
      let conteoLetras = {};
  
      for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i]; // Asegúrate de declarar 'letra'
        if (conteoLetras[letra] === undefined) {
          conteoLetras[letra] = 1;
        } else {
          conteoLetras[letra]++;
        }
      }
      return conteoLetras;
    }
  }
  
  console.log(comprobarAnagramas("amor", "roma")); // Debería imprimir true
  