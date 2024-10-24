/**
 * 13-Juego mates
Crea un programa que genere dos números aleatorios entr e 1 y 10,y un operador aritmético.
Se ofrecerá al usuario los valores para que calcule el resultado, y el programa le dirá si el
resultado es correcto o incorrecto.
Las preguntas, respuesta del usuario y si ha acertado o fallado se almacenarán ordenadamente
en un array.
Se preguntas se realizarán en lotes de 4, tras lo cual se consultará al usuario si desea continuar.
Cuando el usuario no desee seguir jugando se mostrará un resumen de las preguntas (número,
pregunta y acierto) así como el total de preguntas acertadas y el total de falladas.
Añade el código auxiliar necesario para probar la aplicación.
 */

/**
 ** Definimos una variables globales accesibles desde todos
 ** los métodos.
 */
const operadores = ["Suma", "Resta", "Multiplica", "Divide"];
const datos = []; 
let continuar = true; 

/**
 ** Funcion para generar los numeros aleatorios, devuelve ambos
 */
function generarNumeros() {
    const random = Math.floor(Math.random() * 10) + 1;
    const random1 = Math.floor(Math.random() * 10) + 1;
    return [random, random1];
}

/**
 ** Funcion para escoger un operador al azar entre el array de operadores
 */
function seleccionarOperador() {
    return operadores[Math.floor(Math.random() * operadores.length)];
}


/**
 ** Funcion para calcular el resultado de cada operacion aritmetica
 *! ToFixed: Redondear a dos decimales
 */
function calcularResultado(random, random1, operador) {
    switch (operador) {
        case "Suma":
            return random + random1;
        case "Resta":
            return random - random1;
        case "Multiplica":
            return random * random1;
        case "Divide":
            return (random / random1).toFixed(2); 
        default:
            return null;
    }
}

/**
 ** Funcion donde se ejecuta el juego, aqui mostramos cada lote de pregutas y al final el resumen
 ** de la partida
 */
function juegoMates() {
    alert('Bienvenido al Juego de Matemáticas! Se te darán dos números y su operador aritmético.');

/**
 * * Este bucle funciona por cada lote de 4 preguntas, mientras en el confirm el usuario de a "Aceptar",
 * * el bucle seguirá haciendo preguntas.
 */
    while (continuar) {
        for (let i = 0; i < 4; i++) { 
            const [random, random1] = generarNumeros(); /** Generamos los numeros al azar*/ 
            const operador = seleccionarOperador(); /** Generamos un operador al azar */
            const resultadoCorrecto = calcularResultado(random, random1, operador); /** Calculamos el resultado correcto*/

            const respuestaUsuario = Number(prompt(`Pregunta ${i + 1}:\n${operador}:\n${random} y ${random1}`)); /** Guardamos la respuesta del usuario */

            const acierto = respuestaUsuario === parseFloat(resultadoCorrecto);

            /** 
             *! TERNARIO= 
             ** Si acierto es correcto (es decir si es igual a true con resultadoCorrecto) la variable
             ** resultado se inicializará con 'Correcto', sino con 'Incorrecto'.
             */
            const resultado = acierto ? "Correcto" : "Incorrecto";

            /**
             ** Con datos.length accedo al ultimo espacio disponible en mi array datos.
             ** Metemos los datos en el array.
             */
            datos[datos.length] = { 
                pregunta: `${operador}: ${random} y ${random1}`,
                respuestaUsuario,
                resultadoCorrecto,
                acierto,
            };

            alert(`Tu respuesta es: ${resultado}`); /** Mostramos al usuario si la respuesta es correcta o incorrecta */
        }

        continuar = confirm("¿Quieres continuar jugando?");
    }

    mostrarResumen();
}

/**
 ** Con esta funcion mostramos el resumen de los datos de la partida
 */
function mostrarResumen() {
    /**Contadores de fallos y aciertos */
    let aciertos = 0;
    let fallos = 0;
    let resumen = "Resumen de preguntas:\n"; 

    /**FOR que en cada iteracion muestra el resumen de todos los datos*/
    for (let i = 0; i < datos.length; i++) { 
        resumen += `Pregunta ${i + 1}: ${datos[i].pregunta} - Respuesta del usuario: ${datos[i].respuestaUsuario}, Correcto: ${datos[i].resultadoCorrecto}. Resultado: ${datos[i].acierto ? 'Acierto' : 'Fallo'}\n`;
        /**IF para que en cada acierto se sume el contador, o de lo contario el de fallos */
        if (datos[i].acierto) {
            aciertos++;
        } else {
            fallos++;
        }
    }

    resumen += `Total de aciertos: ${aciertos}\nTotal de fallos: ${fallos}`;
    alert(resumen); 
}

juegoMates();
