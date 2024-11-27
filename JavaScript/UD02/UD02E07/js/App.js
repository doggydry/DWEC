import {BD} from './datos/BD.js';
import {datos} from './datos/datos.js';
import { Propietario } from './clases/Propietario.js';
import {Reparacion} from './clases/Reparacion.js';
import {Trabajo} from './clases/Trabajo.js';
import {Vehiculo} from './clases/Vehiculo.js';
import {GestionMecanica} from './GestionMecanica.js';
const miBD = new BD(datos); 
const app = new GestionMecanica(miBD);

// Iniciar la aplicación en el contenedor especificado
document.addEventListener("DOMContentLoaded", () => {
  app.iniciarApp("mi-contenedor");
  
});