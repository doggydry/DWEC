import { Factura } from './Factura.js';
export class Utilidades {

    static serializarFactura(facturaOBJ) {
        return JSON.stringify(facturaOBJ);
    }

    static deserializarFactura(facturaJSON) {
        return JSON.parse(facturaJSON);
    }
}

const factura = new Factura('1234547A', '19/02/2002', '19:00', true, [{ concepto: 'Chaqueta', precioUnitario: 6, cantidad: 14 },
{ concepto: 'Abrigo', precioUnitario: 2, cantidad: 9 },
{ concepto: 'Raqueta', precioUnitario: 1, cantidad: 6 }]);

const facturaJSON = Utilidades.serializarFactura(factura);
console.log(facturaJSON);

const facturaDeseralizada = Utilidades.deserializarFactura(facturaJSON);
console.log(facturaDeseralizada);