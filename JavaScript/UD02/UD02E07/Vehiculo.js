class Vehiculo {

    #marca;
    #modelo;
    #matricula;
    #anio;
    #motor;
    #propietario;

    constructor (marca, modelo, matricula, anio, motor, propietario = [{}]){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#matricula = matricula;
        this.#anio = anio;
        this.#motor = motor;
        this.#propietario = propietario;
    }
}