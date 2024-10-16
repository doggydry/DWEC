const $bingo = (function () {
    let cartones = [];
    let marcador = [];
    let bolasSacadas = [];

    /**
     ** Funcion para generar un numero en un rango especifico
     */
    function generarRangoAletorio (min, max){
        return Math.floor(Math.random()*(max - min +1))+min;
    }

    /**
     *todo Funcion para generar un carton a cada jugador
     */

        function generarCarton() {
            let carton = [];
        
            for (let fila = 0; fila < 3; fila++) {
                let filaCarton = Array(9).fill(null); // 9 columnas, todas inicializadas a null
                let numerosFila = [];
        
                //* GENERAMOS 5 NUMEROS PARA CADA FILA, POR QUE DE CADA FILA DE 9 SE QUITAN 3
                while (numerosFila.length < 5) {
                    //* Generamos un número aleatorio entre 0 y 8 corresponde a cada columna (decena)
                    let decena = Math.floor(Math.random() * 9);
                    //* Segun la decena sacada, (2,3,4) calculamos su minimo y máximo
                    //! EJEMPLO: DECENA = 4 -> MIN = 41 Y MAX 50
                    let min = decena * 10 + 1; 
                    let max = decena * 10 + 10;

                    //* Generamos un numero dentro de los rangos de MAX Y MIN
                    //! EJEMPLO : MIN = 41 MAX = 50
                    let numero = generarRangoAletorio(min, max); 

                    //* Si el numero no está, lo incluimos
                    if (!numerosFila.includes(numero)) {
                        numerosFila.push(numero);
                        filaCarton[decena] = numero; // Colocamos el número en la columna correcta
                    }
                }
        
                carton.push(filaCarton); // Añadimos la fila generada al cartón
            }
        
            return carton;
        }
        


    /**
     ** Funcion para inicar el juego, resetea los arrays, genera los
     ** cartones de los jugadores e inicializa el marcador.
     */


    /**
     * * Funcion para sacar la siguiente bola 
     */
 


    /**
     ** Funcion para que el jugador humano pueda
     ** marcar los numeros en su carton
     */


    /**
     ** Funcion para poder cantar linea
     */
   

     return {
    generarCarton : generarCarton,
     }
})();


console.log($bingo.generarCarton());

