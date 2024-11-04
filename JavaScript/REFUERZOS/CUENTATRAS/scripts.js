function cuentraAtras(numero, numero1) {
    let maximo = numero;
    let minimo = numero1;

    if (numero1 > numero){
        minimo = numero;
        maximo = numero1;
    } else {
       maximo = numero;
       minimo = numero1;
    }

   return {maximo, minimo};
}

console.log(cuentraAtras(2,34));

document.getElementById('cuentaAtrasBtn').addEventListener('click', function () {
    const primerNumero = parseInt(document.getElementById('primer-numero').value, 10);
    const segundoNumero = parseInt(document.getElementById('segundo-numero').value, 10);

    if (isNaN(primerNumero) || isNaN(segundoNumero)) {
        document.getElementById('resultado').innerHTML = `Se deben introducir dos números enteros`;
    } else if (primerNumero === segundoNumero) {
        document.getElementById('resultado').innerHTML = `Vaya... Los dos números son iguales...`;
    } else {
        const resultado = cuentraAtras(primerNumero, segundoNumero);

        // Limpiamos el contenido previo
        document.getElementById('resultado').innerHTML = "Cuenta atrás: ";

        // Configuramos el intervalo para mostrar los números uno a uno
        const interval = setInterval(() => {
            // Usamos operador ternario para agregar punto o coma
            document.getElementById('resultado').innerHTML += 
                resultado.maximo === resultado.minimo ? ` ${resultado.maximo}.` : ` ${resultado.maximo},`;

            if (resultado.maximo === resultado.minimo) { // Detenemos el intervalo al llegar al mínimo
                clearInterval(interval);
            }
            resultado.maximo--; // Decrementamos `i` en cada intervalo
        }, 1000);
    }
});