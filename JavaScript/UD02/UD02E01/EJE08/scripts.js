/**8-Crea una función que reciba un número y calcule su factorial, la función devolverá una
cadena con el desarrollo del factorial. Por ejemplo, para una entrada de 4 devolverá la cadena
“4x3x2x1=24”.
Añade el código auxiliar necesario para probar la aplicación. El script solicitará números al
usuario hasta que no desee continuar. */
function factorial (numero) {
    if (numero === 0 || numero === 1) {
        return "1=1";
    }

    let resultado = 1;
    let desarrollo = "";

    for (let i = numero; i > 0; i--) {
        resultado *= i;
        //Mientras que i sea distinto de 1, imprimirá la i y detrás la x, 
        //sino pondrá un iugal
        desarrollo += (i === 1) ? `${i}=` : `${i}x`;
    }

    return desarrollo + resultado;
}

// Ejemplo: Llamada desde consola
alert(factorial(10)); 
