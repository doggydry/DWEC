//  Pedir el radio de un círculo y calcular su área. A=PI*r^2.

function areaCirculo(){
    let radio = prompt('Ingrese el radio del circulo');
    let area = Math.PI*radio*radio;
    let resultado = alert('El area del circulo es: ' + area.toFixed(3));
    return resultado;
}
console.log(areaCirculo(45));
    

