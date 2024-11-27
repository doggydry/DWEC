class GestionMecanica {
  #clienteBD;
  #contenedor;

  constructor(clienteBD) {
    this.#clienteBD = clienteBD; // Se pasa un objeto para la conexión con la base de datos.
  }

  iniciarApp(selector) {
    const contenedor = document.querySelector(selector);
    if (!contenedor) {
      console.error("No se pudo iniciar la aplicación. Contenedor no encontrado.");
      return;
    }

    this.#contenedor = contenedor;
    this.#contenedor.innerHTML = this.#generaHTMLBase();

    // Manejar clics en el menú
    const botonesMenu = this.#contenedor.querySelectorAll(".menu button");
    botonesMenu.forEach((boton) => {
      boton.addEventListener("click", (event) => {
        const opcion = event.target.dataset.menu;
        if (opcion === "inicio") this.mostrarInicio();
        if (opcion === "vehiculos") this.mostrarVehiculos(this.obtenerVehiculosMock());
      });
    });

    this.mostrarInicio(); // Carga la vista inicial
  }

  #generaHTMLBase() {
    return `
      <div class="menu">
        <button data-menu="inicio">Inicio</button>
        <button data-menu="vehiculos">Listado Vehículos</button>
        <button data-menu="no-terminadas">Listado No Terminadas</button>
        <button data-menu="no-pagadas">Listado No Pagadas</button>
        <button data-menu="presupuestos">Listado Presupuestos</button>
      </div>
      <div id="resultados"></div>
    `;
  }

  // Página de inicio
  mostrarInicio() {
    const htmlInicio = `
      <div class="inicio">
        <h2>Buscar Vehículos</h2>
        <input type="text" id="buscador" placeholder="Matrícula o Teléfono" />
        <button id="buscar">Buscar</button>
        <ul id="resultados-busqueda"></ul>
      </div>
    `;
    const resultados = this.#contenedor.querySelector("#resultados");
    resultados.innerHTML = htmlInicio;
  }

  // Listado de vehículos
  mostrarVehiculos(vehiculos) {
    const htmlVehiculos = this.#generarHTMLVehiculos(vehiculos);
    const resultados = this.#contenedor.querySelector("#resultados");
    resultados.innerHTML = htmlVehiculos;

    // Agregar eventos a los botones del listado
    const botonesVer = resultados.querySelectorAll(".ver-vehiculo");
    botonesVer.forEach((boton) => {
      boton.addEventListener("click", (event) => {
        const idVehiculo = event.target.dataset.id;
        console.log(`Ver detalles del vehículo con ID: ${idVehiculo}`);
        // Aquí puedes implementar la lógica para ver detalles del vehículo
      });
    });
  }

  #generarHTMLVehiculos(vehiculos) {
    if (vehiculos.length === 0) {
      return `<p>No hay vehículos registrados.</p>`;
    }

    let listado = `<ul>`;
    vehiculos.forEach((vehiculo) => {
      listado += `
        <li>
          <strong>${vehiculo.matricula}</strong> - ${vehiculo.modelo}
          <button class="ver-vehiculo" data-id="${vehiculo.id}">Ver</button>
        </li>
      `;
    });
    listado += `</ul>`;

    return `
      <div class="listado-vehiculos">
        <h2>Listado de Vehículos</h2>
        <button id="nuevo-vehiculo">Nuevo Vehículo</button>
        ${listado}
      </div>
    `;
  }

  // Método ficticio para obtener vehículos
  obtenerVehiculosMock() {
    return [
      { id: 1, matricula: "1234ABC", modelo: "Toyota Corolla" },
      { id: 2, matricula: "5678DEF", modelo: "Honda Civic" },
      { id: 3, matricula: "9101GHI", modelo: "Ford Focus" },
    ];
  }
}

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
  const gestion = new GestionMecanica(null); // Pasamos null como BD para pruebas
  gestion.iniciarApp("#app");
});
