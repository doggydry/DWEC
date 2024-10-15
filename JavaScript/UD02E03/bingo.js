const $bingo = (function(){ 
    let cartones = [];
    let marcador = [];
    let bolasSacadas = [];

    /**
     ** Funcion para generar un numero en un rango especifico
     */
    function generarNumeroRango (min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     ** Funcion para generar un carton a cada jugador
     */
    function generarCarton () {
        let carton = []; // Crear una estructura para el carton

        for (let fila = 0; fila < 3; fila++){
            let filaCarton = Array(9).fill(null);
            let numerosFila = [];

            while(numerosFila.length < 5){
                let decena = Math.floor(Math.random() * 9);
                let min = decena * 10 + 1;
                let max = decena * 10 + 10;

                if (decena === 0) { 
                    min = 1; 
                    max = 10; // Primera columna es de 1 a 10
                } else if (decena === 8) {
                    min = 81; 
                    max = 90; // Última columna es de 81 a 90
                }

                let numero = generarNumeroRango(min, max);

                // Cambié esta línea para usar includes
                if (!numerosFila.includes(numero)) {
                    numerosFila.push(numero);
                    filaCarton[decena] = numero;
                }
            }
            carton.push(filaCarton);
        }
        return carton; // Retorna el cartón generado
    }

    /**
     ** Funcion para inicar el juego, resetea los arrays, genera los
     ** cartones de los jugadores e inicializa el marcador.
     */
     function inicializarJuego(jugadores) {
        // Reiniciar los arrays
        cartones = []; 
        marcador = []; 
        bolasSacadas = []; 
    
        // Generar cartones para cada jugador
        for (let i = 0; i < jugadores.length; i++) {
            let carton = generarCarton(); // Genera un cartón
            cartones.push(carton); // Asigna el cartón al array de cartones
            
            // Inicializar marcador para cada jugador
            marcador.push({ jugador: jugadores[i], lineas: 0, bingos: 0 });
        }
    
        // Comprobar que se han inicializado correctamente
        console.log("Juego inicializado", { cartones, marcador, bolasSacadas });
    }
    
    /**
     * * Funcion para sacar la siguiente bola 
     */
    function sacarBola (){
        const bola = generarNumeroRango(1,90); //Con la funcion de generar numero en rango generamos la bola

        //Nos aseguramos de que la bola haya salido antes

        if (!bolasSacadas.includes(bola)){
            bolasSacadas.push(bola); //Agregamos la bola al array de bolas sacadas
            console.log(`Bola sacada: ${bola}`);
        } else {
            //Si la bola ya salio sacamos otra
            sacarBola();
        }
    }


    /**
     ** Funcion para que el jugador humano pueda
     ** marcar los numeros en su carton
     */
    function marcarNumero (numero){
        const cartonHumano = cartones[0];

        for (let fila of cartonHumano){
            //Verificamos si el numero está en la fila
            const indice = fila.indexOf(numero);
            if (indice!==-1){
                //Marcar el numero como marcado
                fila[indice] = null;
                console.log(`Numero ${numero} marcado en el carton.`);
                return;
            }
        }
        console.log(`El numero ${numero} no está en el cartón.`);
    }

    return {
        generarCarton: generarCarton,
        inicializarJuego: inicializarJuego,
        sacarBola: sacarBola,
        marcarNumero: marcarNumero,
    };
})();




function probarCarton (){
    let carton = $bingo.generarCarton();
    console.log(carton);
}
$bingo.inicializarJuego(['Humano', 'Automático 1', 'Automático 2']);
probarCarton();
$bingo.sacarBola();
$bingo.marcarNumero(-1);
