import { Factura } from './Factura.js';
import { Utilidades } from './Utilidades.js';

const $factura = document.getElementById('ActualizarBtn'); 

$factura.addEventListener('click',function(){
    let NIF = document.getElementById('NIF').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let pagada = document.getElementById('pagada').value;

    let factura = new Factura(NIF,fecha,hora,pagada);
    Utilidades.serializarFactura(factura);
    // document.getElementById('resultadoFactura').innerHTML=`<h4>Factura modificada</h4><hr>${factura.imprimirCabeceraFactura()}`;
});

const $lineas = document.getElementById('AgregarBtn');

$lineas.addEventListener('click',function(){
    let concepto = document.getElementById('concepto').value;
    let cantidad = document.getElementById('cantidad').value;
    let precio = document.getElementById('precio').value;
});

