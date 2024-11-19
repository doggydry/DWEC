const miBD = new BD(); // Crear el cliente de base de datos
const app = new GestionMecanica(miBD);

// Iniciar la aplicación en el contenedor especificado
document.addEventListener("DOMContentLoaded", () => {
  app.iniciarApp("#mi-contenedor");
});