export class GestionMecanica {

    #clienteBD;
    #contenedor;

    constructor(clienteBD) {
        this.#clienteBD = clienteBD;
        this.#contenedor = null;
    }

    iniciarApp(id){
        const contenedor = document.getElementById(id);
        if (!contenedor){
            console.log('No se puede iniciar la aplicacion');
            return;
        }
         this.#contenedor = contenedor;
        //  this.#contenedor.innerHTML = 'pollo';
        this.generaHTMLBase();
        this.generarHTMLInicio();
    }

    generaHTMLBase(){
     /**
      * Devuelve una cadena HTML con el código HTML de base que 
        incluye el menú principal (inicio, listado vehículos, listado no terminadas, listado 
        no pagadas, listado presupuestos) y un contenedor para resultados (donde se 
        mostrarán los distintos formularios).
      */
        const html = `
        <nav>
        <button id="inicio">Inicio</button>
        <button id="listado-vehiculos">Listado Vehiculos</button>
        <button id="listado-no-terminadas">Listado no terminadas</button>
        <button id="listado-no-pagadas">Listado no pagadas</button>
        <button id="listado-presupuesto">Listado presupuesto</button>
        </nav>
        <div id="contenidos"></div>`;
        this.#contenedor.innerHTML = html;
        document.getElementById('inicio').addEventListener('click', this.generarHTMLInicio);
        document.getElementById('listado-vehiculos').addEventListener('click', this.generarHTMLVehiculos.bind(this));
    }

    generarHTMLInicio(){
        /**
         * Devuelve una cadena HTML con el código HTML de la 
            página de inicio. La página de inicio incluirá un buscador que permita filtrar por 
            matricula o teléfono. El resultado de una búsqueda será la lista de vehículos.
         */
        const html = `
        <h2>Taller Mecánico</h2>
        <form id="form-buscar">
        <label for="buscar">Buscar</label>
        <input type="text" id="buscar"/>
        <input type="submit" value="Enviar" id="enviarBtn"/>
        </form>
        `;
        const contenidos = document.getElementById('contenidos');
        contenidos.innerHTML = html;
    }
    generarHTMLVehiculos(){
        /**
         * Devuelve una cadena HTML con el código 
        HTML del listado de vehículos, cada entrada dispondrá de las opciones: ver 
        vehículo, ver reparaciones y borrar vehículo.  
        El listado incluirá un botón para crear un nuevo vehículo. 
         */

        const vehiculos = this.#clienteBD.obtenerVehiculos();
        let html = `
        <h2>Listado de Vehiculos</h2>
        <input type="button" id="crearVehiculoBtn" value="Crear Vehiculo">
        <ul> 
        `;
        vehiculos.forEach(vehiculo => {
            html+=`
            <li> ${vehiculo.matricula}, ${vehiculo.marca}, ${vehiculo.modelo}</li>
            `;
        });
        html+='</u>';
        const contenidos = document.getElementById('contenidos');
        contenidos.innerHTML = html;

    }
    generarHTMLVehiculo(vehiculoId=null){
        /**
         *  Devuelve una cadena HTML con el 
        código HTML del formulario de propiedades del vehículo. Si el vehiculoId es null 
        estamos creando un nuevo vehículo. Habrá un recuadro para los datos del 
        propietario. 
        Cuando el formulario no sea de creación incluirá una opción para ver las 
        reparaciones del vehículo.
         */

    }
    generarHTMLReparacionesVehiculo(vehiculoId){
        /**
         * Devuelve una cadena HTML 
        con el código HTML del listado de reparaciones del vehículo ordenadas por fecha 
        descendente.  
        En la parte superior se mostrará la matricula y teléfono del propietario del 
        vehículo, así como la opción de ver vehículo
         */
    }
    generarHTMLReparaciones(reparaciones){
        /**
         * Devuelve una cadena HTML con el 
        código HTML del listado de reparaciones, cada entrada dispondrá de las opciones: 
        ver y borrar reparación.
         */

    }
    generarHTMLReparación(reparaciónId=0, vehiculoId=0){
        /**
        * devuelve una cadena 
            HTML con el código HTML del formulario de reparación. Si la reparación es nueva 
            (reparacionId = 0) se empleará el parámetro vehículoId para establecer la relación. 
            Incluirá un recuadro/formulario para añadir un nuevo trabajo a la colección de 
            trabajos.
        */
    }

}