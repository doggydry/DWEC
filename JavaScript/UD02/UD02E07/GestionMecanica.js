class GestionMecanica {

    #clienteBD;
    #contenedor;

    constructor(clienteBD) {
        this.#clienteBD = clienteBD;
        this.#contenedor = null;
    }

    iniciarApp(selector) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.#contenedor = elemento;
            this.#contenedor = this.#generarHTMLbase();
        } else {
            alert("No se ha podido iniciar la aplicación: Contenedor no encontrado");
        }
    }

    #generarHTMLbase() {
        return `
        <nav>
            <ul>
                <li><h ref="#" id="inicio">Inicio</a></li>
                <li><a href="#" id="listado-vehiculos">Listado Vehículos</a></li>
                <li><a href="#" id="no-terminadas">Listado No Terminadas</a></li>sadad
                <li><a href="#" id="no-pagadas">Listado No Pagadas</a></li>sadad
                <li><a href="#" id="presupuestos">Listado Presupuestos</a></li>
        </nav>
        
      <main id="contenido-app">
        <h1>Bienvenido a la Gestión Mecánica</h1>
      </main>
        `;
    }

    #generarHTMLinicio() {
        return `
        <section id="pagina-inicio">
        <h1>Gestión Mecánica - Inicio</h1>
        <p>Bienvenido a la plataforma de gestión de vehículos. Use el buscador para encontrar un vehículo por matrícula o teléfono.</p>
        
        <form id="form-buscador">
          <label for="busqueda">Buscar por matrícula o teléfono:</label>
          <input type="text" id="busqueda" name="busqueda" placeholder="Introduce matrícula o teléfono" required>
          <button type="submit">Buscar</button>
        </form>
        
        <section id="resultados-busqueda">
          <h2>Resultados</h2>
          <p>No se han realizado búsquedas todavía.</p>
        </section>
      </section>
        `;

    }
}