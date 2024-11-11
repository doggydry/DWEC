import { Factura } from './Factura.js';
import { Utilidades } from './Utilidades.js';

const $factura = document.getElementById('formFacturas'); 

$factura.addEventListener('click',function(){
    let NIF = document.getElementById('NIF').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let pagada = document.getElementById('pagada').value;

    let factura = new Factura(NIF,fecha,hora,pagada);

    document.getElementById('resultado').innerHTML=`<h4>Factura modificada</h4><hr>${factura.imprimirCabeceraFactura()}`;
});

const $lineas = document.getElementById('formLineas');

