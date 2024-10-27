/**
 * Escribe una función que reciba un número entero y devuelva un array del tamaño del
número indicado relleno con los primeros valores de la sucesión de Fibonacci.
La sucesión de Fibonacci se compone de una serie de valores en el que cada valor es la
suma de los dos valores previos. Por ejemplo:
0, 1, 1, 2, 3, 5, 8, 13, 21…
 */
/**
 ** Funcion que recibe un número como extensión de la serie de Fibonacci
 */
function Fibonacci(num) {
  let longitud = Array (num); //* Pasamos el numero a un array posicion (num)
  longitud[0] = 0; //* Iniciamos los primeros valores que son los que conocemos 
  longitud[1] = 1; //* para luego usarlos para calcuar la serie

  for (let i = 2; i < longitud.length ; i++){
    longitud[i] = longitud[i -1] + longitud[i -2 ]; //* Accedemos a cada valor del array 
  }  
  return longitud;
}
Fibonacci(7);

document.getElementById('fibonacciBtn').addEventListener('click', function(){
  const tamanio = parseInt(document.getElementById('tamanio').value, 10); // Convertimos el valor a entero
  const resultado = Fibonacci(tamanio);
  document.getElementById('resultado').innerHTML = `Serie de Fibonacci: ${resultado}`;
});