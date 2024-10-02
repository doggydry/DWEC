/**
 * 4- Crea una función reciba un número y que dibuje un triángulo de altura el tamaño del
número indicado. El valor devuelto será un array con cada una de las cadenas que forman el
rectángulo.
Añade el código auxiliar necesario para probar la aplicación.
 */
function dibujarTriangulo(altura) {
    //Variable donde se alamacenaran todas las lineas
    let triangulo = '';
    //Cada iteracion reperesenta una linea de triangulo
    for (let i = 1; i <= altura; i++) {
        let linea = '';
        
        for (let j = 0; j < i; j++) {
            linea += '*';
        }
 
        triangulo += linea + '\n';
    }
 
    return triangulo;
}
 
function probarDibujarTriangulo() {
    let altura = 5;
    let resultado = dibujarTriangulo(altura);
 
    alert(resultado);
}
 
probarDibujarTriangulo();