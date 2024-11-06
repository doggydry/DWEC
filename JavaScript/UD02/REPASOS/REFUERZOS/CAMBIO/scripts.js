/**
 * Escribe una función que reciba un importe en euros y devuelva en un array el importe
introducido como parámetro repartido en billetes de 200, 100, 50, 10, 5 y monedas de 2 y
1 euros. La devolución empleara siempre la moneda de mayor valor disponible.
Para probarlo crea una web que incluya los campos de entrada “Importe producto”,
“Importe entregado” un botón para “Cobrar”. Y como elementos de salida un contenedor
para el “importe total a devolver” y otro contenedor “cambio” en el que se muestre la
devolución resultado de la llamada a la función, formatea la salida para mostrar cada
valor devuelto en una línea nueva. 
 */
function maquinaCambios(importe) {
    const denominaciones = [200, 100, 50, 10, 5, 2, 1];
    let resultado = "";
    for (let i = 0; i <= denominaciones.length; i++) {
        let billete = denominaciones[i];
        let contador = 0;

        while (importe >= billete) {
            importe = importe - billete;
            contador++;
        }
        if (contador > 0) {
            resultado += (billete === 2 || billete === 1) ? `${contador} moneda de ${billete}€\n` : `${contador} billetes de ${billete}€\n`;
        }
    }
    return resultado;

}
function calcularCambio(importe, entregado) {
    let cambio = entregado - importe;
    return maquinaCambios(cambio);
}

function importeTotal(importe, entregado) {
    let importeTotal = entregado - importe;
    return importeTotal;
}
console.log(calcularCambio(500, 600));

document.getElementById('cobrarBtn').addEventListener('click', function (e) {
    const importeProducto = parseInt(document.getElementById('producto-input').value, 10);
    const importeEntregado = parseInt(document.getElementById('entregado-input').value, 10);

    const cambio = calcularCambio(importeProducto, importeEntregado);
    const total = importeTotal(importeProducto, importeEntregado);

    if (importeEntregado < importeProducto) {
        e.preventDefault();
        document.getElementById('importe-devolver').innerHTML = "El importe entregado debe ser mayor o igual al del producto";
    } else if (importeEntregado === importeProducto) {
        e.preventDefault();
        document.getElementById('importe-devolver').innerHTML = "¡Así estaría, muchas gracias!";
        document.getElementById('cambio').innerHTML = "Cambio calculado: 0 €";

    } else {
        e.preventDefault();
        document.getElementById('importe-devolver').innerHTML = "El importe total a devolver es: " + total + "€\n";
        document.getElementById('cambio').innerHTML = "Cambio calculado: <br> " + cambio;
    }
});