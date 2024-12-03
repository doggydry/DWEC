// script.js

import { obtenerAlumnos } from "./datos.js";

const contenedor = document.getElementById("contenedor");
const btnDetalles = document.getElementById("vistaDetalles");
const btnFichas = document.getElementById("vistaFichas");

let seleccionActual = null;

// Limpia el contenido actual del contenedor
function limpiarVista() {
  contenedor.innerHTML = "";
}

// Crea la vista de tabla
function crearVistaTabla() {
  limpiarVista();
  const alumnos = obtenerAlumnos();

  const tabla = document.createElement("table");
  tabla.className = "tabla-detalles";

  // Cabecera de la tabla
  const cabecera = document.createElement("thead");
  cabecera.innerHTML = `
    <tr>
      <th>Nombre</th>
      <th>Curso</th>
      <th>Teléfono</th>
      <th>Email</th>
    </tr>`;
  tabla.appendChild(cabecera);

  // Cuerpo de la tabla
  const cuerpo = document.createElement("tbody");
  alumnos.forEach((alumno) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${alumno.nombre}</td>
      <td title="${alumno.curso}">${alumno.curso.length > 20 ? alumno.curso.slice(0, 20) + "..." : alumno.curso}</td>
      <td>${alumno.telefono}</td>
      <td title="${alumno.email}">${alumno.email.length > 20 ? alumno.email.slice(0, 20) + "..." : alumno.email}</td>`;
    // Resaltado y selección
    fila.addEventListener("mouseover", () => fila.classList.add("resaltado"));
    fila.addEventListener("mouseout", () => fila.classList.remove("resaltado"));
    fila.addEventListener("click", () => seleccionarElemento(fila));

    cuerpo.appendChild(fila);
  });
  tabla.appendChild(cuerpo);

  contenedor.appendChild(tabla);
}

// Crea la vista de fichas
function crearVistaFichas() {
  limpiarVista();
  const alumnos = obtenerAlumnos();

  alumnos.forEach((alumno) => {
    const ficha = document.createElement("div");
    ficha.className = "ficha";
    ficha.innerHTML = `
      <h3>${alumno.nombre}</h3>
      <p><strong>DNI:</strong> ${alumno.dni}</p>
      <p><strong>Curso:</strong> ${alumno.curso}</p>
      <p><strong>Asignaturas:</strong> ${alumno.asignaturas.join(", ")}</p>
      <p><strong>Teléfono:</strong> ${alumno.telefono}</p>
      <p><strong>Email:</strong> ${alumno.email}</p>`;
    // Resaltado y selección
    ficha.addEventListener("mouseover", () => ficha.classList.add("resaltado"));
    ficha.addEventListener("mouseout", () => ficha.classList.remove("resaltado"));
    ficha.addEventListener("click", () => seleccionarElemento(ficha));

    contenedor.appendChild(ficha);
  });
}

// Seleccionar un elemento (fila o ficha)
function seleccionarElemento(elemento) {
  if (seleccionActual) {
    seleccionActual.classList.remove("seleccionado");
  }
  seleccionActual = elemento;
  seleccionActual.classList.add("seleccionado");
}

// Event listeners para alternar vistas
btnDetalles.addEventListener("click", crearVistaTabla);
btnFichas.addEventListener("click", crearVistaFichas);

// Vista inicial
crearVistaTabla();
