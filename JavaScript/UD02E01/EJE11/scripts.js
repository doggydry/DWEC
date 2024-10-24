/**
 * 11- Crea una función que reciba un rango, para cada valor en el rango se informará de si el
número es múltiplo de 3, si es múltiplo de 5 y si es número primo. Sólo mostrar información de
los números que cumplan alguna de las condiciones.
Añade el código auxiliar necesario para probar la aplicación.
 */

function rango(numero, numero1) {

    /**
     * Variable para acumular todos los resultados
     */
    let resultado = '';

    /**
     * * For que recorre el rango de numeros.
     * * Declaramos las variables de los multiplos 
     * * y los primos y le asignamos el valor.
     */

    for (let i = numero; i <= numero1; i++) {
        let multiplo3 = (i % 3 == 0);
        let multiplo5 = (i % 3 == 0);
        let esPrimo = true;

    /**
     * !Explicacion del algoritmo de esPrimo
     * ?Primero descarta los numeros que sean menor que 2.
     * ?No verifiacamos más allá de la raiz cuadrada ya que
     * ?si un numero tiene un divior mayor que su raiz cuadrada,
     * ?el otro divisor será menor que la raí cuadrada.
     * ?si se encuentra i % j === 0, es que no es primo, ya que 
     * ?tendrá un divisor distinto de 1 y si mismo
     */
        if (i < 2) {
            esPrimo = false;
        } else {
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }
/**
 * * Con esto mostramos los resultados y los guardamos en la
 * * variable resultado
 */
        if (multiplo3) {
            resultado += i + ' es multiplo de 3\n';
        }
        if (multiplo5) {
            resultado += i + ' es multiplo de 3\n';
        }
        if (esPrimo) {
            resultado += i + ' es primo\n';
        }
    }

    console.log(resultado)
}
rango(1, 5);