export class BD {
    #vehiculos;
    #reparaciones;
    #siguienteReparacionId = 1;
    #siguienteVehiculoId = 1;

    constructor(datos) {
        this.#vehiculos = datos.vehiculos;
        this.#reparaciones = datos.reparaciones;
    }
    obtenerVehiculos() {
        //Devuelve la lista de vehículos.
        return this.#vehiculos;
    }
    // obtenerVehiculo(filtro, valor) {
    obtenerVehiculo (vehiculoId){
        return this.#vehiculos.find(v => v.id === vehiculoId);
    
    /**
         * Devuelve el vehículo que cumple con alguno de los 
        criterios de filtrado. Posibles valores para “filtro”: “vehiculoId”, “matricula” y 
        “teléfono”. El parámetro “valor” tendrá un valor acorde al filtro seleccionado. 
         */

     }
    crearVehiculo(vehiculo) {
    }
    borrarVehiculo(vehiculoId) {
    }
    obtenerReparaciones(filtro, valor) {
        /**
         * Devuelve la lista reparaciones, si hay un 
            criterio de filtrado se aplica. Posibles valores para “filtro”: “fecha”, “pagado” y 
            “terminado”. El parámetro “valor” tendrá un valor acorde al filtro seleccionado
         */
        return this.#reparaciones;

    }
    obtenerReparacion(reparacionId) {
        return this.#reparaciones.find(r => r.id === reparacionId);
    }
    crearReparación(vehiculoId, reparación) {

    }
    borrarReparación(reparacionId) {

    }
}