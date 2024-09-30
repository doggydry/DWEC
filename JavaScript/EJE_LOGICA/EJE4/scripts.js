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