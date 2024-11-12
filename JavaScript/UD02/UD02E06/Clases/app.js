import {Libro} from './Libro.js';
import {Autor} from './Autor.js';
const libro = new Libro(1, 'prueba', '123-456-789', 1, 1, [], true);
const autor = new Autor(1, 1,'suances','',[]);

const generarHTMLCreacionlibro = libro.generarHTMLCreacion();
const generarHTMLEdicionLibro = libro.generarHTMLEdicion();

const generarHTMLCreacionAutor = autor.generarHTMLCreacion();
const generarHTMLEdicionAutor = autor.generarHTMLCreacion();

const $divNuevoLibro = document.querySelector('[data-nuevoLibro="formNuevoLibro"]');
const $divEditarLibro = document.querySelector('[data-editarLibro="formEditarLibro"]');
const $divNuevoAutor = document.querySelector('[data-autor="formNuevoAutor"]');

$divNuevoAutor.innerHTML = generarHTMLCreacionAutor;
$divNuevoLibro.innerHTML = generarHTMLCreacionlibro;
$divEditarLibro.innerHTML = generarHTMLEdicionAutor;


