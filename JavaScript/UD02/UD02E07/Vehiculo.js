export class Vehiculo {
    _marca;
    _modelo;
    _matricula;
    _anio;
    _motor;
    _propietario;

    constructor (_marca, _modelo, _matricula, _anio, _motor, _propietario = [{}]){
        this._marca = _marca;
        this._modelo = _modelo;
        this._matricula = _matricula;
        this._anio = _anio;
        this._motor = _motor;
        this._propietario = _propietario;
    }
}