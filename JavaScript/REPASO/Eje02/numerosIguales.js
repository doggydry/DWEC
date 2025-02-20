// Pedir dos números y decir si son iguales o no.
function numerosIguales(){
    let msg = '';
    let num1 = prompt('Introduce el primer número');
    let num2 = prompt('Introduce el segundo número');
    if (num1===num2){
        msg = alert('Los numeros son iguales');
    } else {
        msg = alert('Los numneros no son iguales');
    }
    return msg;
}
console.log(numerosIguales());