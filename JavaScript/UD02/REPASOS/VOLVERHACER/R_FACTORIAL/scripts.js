/**
 * Escribe una función que calcule el factorial de un número dado de manera recursiva.
 */

function factorial (num){
    let resultado = "";
    let factorial = 1;
    
    for (let i = num; i>0; i--){
        factorial*=i;   
        resultado += (i === 1) ? `${i} = ` : `${i} x `;
    }
    return resultado + factorial;
}
console.log (factorial(5));
