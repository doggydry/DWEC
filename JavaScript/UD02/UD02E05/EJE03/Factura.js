class Factura {
    _clienteNIF;
    _fecha;
    _hora;
    _pagada;
    _lineas;

    constructor(clienteNIF, fecha, hora, pagada, lineas = [{}]) {
        this._clienteNIF = clienteNIF;
        this._fecha = fecha;
        this._hora = hora;
        this._pagada = pagada;
        this._lineas = lineas;
    }

    /**
    * Para cada linea de lineas[] se suma el producto de precioUnitario * cantidad
    */
    get importeTotal() {
        let resultado = 0;
        this._lineas.forEach(linea => {
            resultado += linea.precioUnitario * linea.cantidad;
        });
        return resultado;
    }

    get numeroArticulos() {
        return this._lineas.length;
    }

    imprimirFactura() {
        let datosBasicos = `NIF: ${this._clienteNIF} \nFecha: ${this._fecha} \nHora: ${this._hora} \nPagado: ${this._pagado ? 'Si' : 'No'}`;
        let datosLineas = '';
        this._lineas.forEach(linea => {
            datosLineas += `\nConcepto: ${linea.concepto}, Precio Unitario: ${linea.precioUnitario}, Cantidad: ${linea.cantidad}`;
        });
        return datosBasicos + datosLineas;
    }

}

const factura1 = new Factura('1234547A', '19/02/2002', '19:00', true, [{ concepto: 'Chaqueta', precioUnitario: 6, cantidad: 14 },
{ concepto: 'Abrigo', precioUnitario: 2, cantidad: 9 },
{ concepto: 'Raqueta', precioUnitario: 1, cantidad: 6 }]);

console.log(factura1.importeTotal);
console.log(factura1.numeroArticulos);
console.log(factura1.imprimirFactura());



