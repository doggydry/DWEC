/**
 * 12-Juego acertar número.
Calcula un numero aleatorio entre 1 y 100, este número permanecerá secreto. Pide al usuario
un numero en rango, el programa le dirá si es mayor o menor que el número secreto. Si el
usuario acierta el número secreto gana. El usuario dispondrá de 5 intentos para acertar el
número secreto, tras lo cual, el programa dirá que ha perdido y le mostrará el número secreto.
Añade el código auxiliar necesario para probar la aplicación.
 */

function numSecreto() {

    /**
     * * Calculamos el numero secreto usando math.floor y math.random
     */
    var numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let resultado = '';
    let contador = 5;

/**
 * * Este while se ejecuta mientas el contador sea mayor que 0
 * * Controlamos que el numero esté en el rango establecido y 
 * * las demás condiciones.
 */
    while (contador > 0) {

        numeroUsuario = Number(prompt('Intenta adivinar el numero secreto.\nREGLAS:\nTiene que ser un numero del 1 al 100\nSolo tienes 5 intentos'));
        switch (true) {
            case (numeroUsuario < 1 || numeroUsuario > 100):
                alert('RECUERDA: El numero debe estar entre 1 y 100');
                continue;

            case (numeroUsuario > numeroSecreto):
                contador--;
                resultado = ('El numero está por debajo\nNumero de intentos restantes: ' + contador);
                break;

            case (numeroUsuario < numeroSecreto):
                contador--;
                resultado = ('El numero está por encima\nNumero de intentos restanes: ' + contador);
                break;

            case (numeroUsuario === numeroSecreto):
                alert('¡Enhorabuena acertaste!');
                return;
        }
        alert(resultado);
    }
    alert('Has perdido. El numero secreto era el ' + numeroSecreto);
}

numSecreto();