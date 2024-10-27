const $bingo = (function () {
    let cartones = {
        jugador1: [],
        jugador2: [],
        humano: [],
    };
    let marcador = [];
    let bolasSacadas = [];

    /**
     ** Funcion para generar un numero en un rango especifico
     */
    function generarRangoAletorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     ** Funcion para generar un carton a cada jugador
     ** con generarRangoAleatorio, entre 1 y 8 (columnas), genero un numero
     */

    function generarCarton() {
        let carton = [];

        for (let columna = 0; columna<9;columna++){

        }


    }



    /**
     ** Funcion para inicar el juego, resetea los arrays, genera los
     ** cartones de los jugadores e inicializa el marcador.
     */
    function iniciarPartida() {

    }


    /**
     * * Funcion para sacar la siguiente bola 
     */
    function sacarBola() {
        let numeros = [];
        let bolasSacadas = [];
        // Inicializar las bolas del 1 al 90
        for (let i = 1; i <= 90; i++) {
            numeros.push(i);
        }
        // Mezclar los números
        numeros.sort(() => Math.random() - 0.5);
        bolasSacadas[numeros.pop()];
        return bolasSacadas;
        
    }

    /**
     ** Funcion para que el jugador humano pueda
     ** marcar los numeros en su carton
     */


    /**
     ** Funcion para poder cantar linea
     */


    return {
        iniciarPartida: iniciarPartida,
        sacarBola : sacarBola,
    }
})();


console.log($bingo.sacarBola());

