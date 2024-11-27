export class Vehiculo {
    #marca;
    #modelo;
    #matricula;
    #anio;
    #motor;
    #propietario;

    constructor (marca, _modelo, _matricula, _anio, _motor, _propietario = [{}]){
        this.#marca = marca;
        this.#modelo = _modelo;
        this.#matricula = _matricula;
        this.#anio = _anio;
        this.#motor = _motor;
        this.#propietario = _propietario;
    }
}