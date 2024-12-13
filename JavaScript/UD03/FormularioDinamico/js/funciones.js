import alumnos from "../datos/datos.js";

// Referencias a los elementos del DOM
const cicloSelect = document.getElementById("ciclo");
const tablaIzquierda = document.getElementById("tabla-izquierda");
// Evento para el cambio en el filtro
cicloSelect.addEventListener("change", () => {
    const cicloSeleccionado = cicloSelect.value;
    mostrarAlumnos(cicloSeleccionado);
});

function mostrarAlumnos(ciclo) {
    // Obtener los IDs de los alumnos que ya están en la tabla derecha
    const idsSeleccionados = Array.from(tablaDerecha.querySelectorAll(".fila")).map(fila =>
        fila.dataset.id
    );

    // Filtrar alumnos
    const alumnosFiltrados = alumnos.filter(alumno => {
        const perteneceCiclo = ciclo === "Todos" || alumno.ciclo === ciclo;
        const noSeleccionado = !idsSeleccionados.includes(alumno.alumnoId.toString());
        return perteneceCiclo && noSeleccionado;
    });

    // Limpiar la tabla
    tablaIzquierda.innerHTML = "";

    // Generar filas de alumnos
    alumnosFiltrados.forEach(alumno => {
        const fila = document.createElement("div");
        fila.classList.add("fila");
        fila.innerHTML = `
            <div>${alumno.nombre}</div>
            <div>${alumno.ciclo}</div>
        `;
        fila.dataset.id = alumno.alumnoId; // ID del alumno como atributo
        tablaIzquierda.appendChild(fila);

        // Evento para seleccionar/deseleccionar fila
        fila.addEventListener("click", () => {
            fila.classList.toggle("selected");
        });
    });
}

// Referencias adicionales a los elementos del DOM
const botonDerecha = document.getElementById("mover-derecha");
const botonIzquierda = document.getElementById("mover-izquierda");
const tablaDerecha = document.getElementById("tabla-derecha");

// Mover a la derecha
botonDerecha.addEventListener("click", () => {
    const seleccionadas = document.querySelectorAll("#tabla-izquierda .fila.selected");
    seleccionadas.forEach(fila => {
        fila.classList.remove("selected"); // Quitar selección
        agregarBotonesOrden(fila); // Añadir botones de subir y bajar
        tablaDerecha.appendChild(fila); // Mover a la tabla derecha
    });
});

// Mover a la izquierda
botonIzquierda.addEventListener("click", () => {
    const seleccionadas = document.querySelectorAll("#tabla-derecha .fila.selected");
    const cicloSeleccionado = cicloSelect.value;

    seleccionadas.forEach(fila => {
        const ciclo = fila.children[1].textContent;

        // Verificar compatibilidad de ciclo
        if (cicloSeleccionado === "Todos" || cicloSeleccionado === ciclo) {
            fila.classList.remove("selected"); // Quitar selección
            quitarBotonesOrden(fila); // Quitar botones de subir y bajar
            tablaIzquierda.appendChild(fila); // Mover a la tabla izquierda
        }
    });
});

// Función para agregar botones de orden
function agregarBotonesOrden(fila) {
    const botones = document.createElement("div");
    botones.classList.add("botones-orden");
    botones.innerHTML = `
        <button class="subir">⬆</button>
        <button class="bajar">⬇</button>
    `;
    fila.appendChild(botones);

    // Funcionalidad de subir
    botones.querySelector(".subir").addEventListener("click", () => {
        if (fila.previousElementSibling) {
            tablaDerecha.insertBefore(fila, fila.previousElementSibling);
        }
    });

    // Funcionalidad de bajar
    botones.querySelector(".bajar").addEventListener("click", () => {
        if (fila.nextElementSibling) {
            tablaDerecha.insertBefore(fila.nextElementSibling, fila);
        }
    });
}

// Función para quitar botones de orden
function quitarBotonesOrden(fila) {
    const botones = fila.querySelector(".botones-orden");
    if (botones) {
        fila.removeChild(botones);
    }
}

// Referencia al botón de enviar y al contenedor de mensajes
const botonEnviar = document.getElementById("boton-enviar");
const contenedorMensajes = document.getElementById("contenedor-mensajes");

// Manejar el evento de clic en el botón Enviar
botonEnviar.addEventListener("click", () => {
    // Leer las filas de la tabla derecha
    const filasDerecha = Array.from(tablaDerecha.querySelectorAll(".fila"));

    // Construir arrays para el JSON
    const alumnoIds = [];
    const nombres = [];
    const orden = [];

    filasDerecha.forEach((fila, index) => {
        const alumnoId = fila.getAttribute("data-id");
        const nombre = fila.children[0].textContent;

        alumnoIds.push(Number(alumnoId));
        nombres.push(nombre);
        orden.push(index + 1); // El orden es la posición de la fila en la tabla
    });

    // Crear el objeto JSON
    const resultado = {
        alumnoIds,
        nombres,
        orden,
    };

    // Mostrar el JSON en el contenedor de mensajes
    contenedorMensajes.textContent = JSON.stringify(resultado, null, 4);
});

// Mostrar todos los alumnos inicialmente
mostrarAlumnos("Todos");