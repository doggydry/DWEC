class Factura{
    _clienteNIF;
    _fecha;
    _hora;
    _pagada;
    _lineas;

    constructor(clienteNIF, fecha, hora, pagada, lineas = []){
        this._clienteNIF = clienteNIF;
        this._fecha = fecha;
        this._hora = hora;
        this._pagada = pagada;
        this._lineas = lineas;
    }
    

}