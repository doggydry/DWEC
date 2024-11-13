import datos from './datos.js';

export class Libro {
    _libroID;
    _titulo;
    _ISBN;
    _autorID;
    _bibliotecaID;
    _prestramos;
    _estaDisponible;

    constructor(_libroID, _titulo, _ISBN, _autorID, _bibliotecaID, _prestramos = [{}], _estaDisponible) {
        this._libroID = _libroID;
        this._titulo = _titulo;
        this._ISBN = _ISBN;
        this._autorID = _autorID;
        this._bibliotecaID = _bibliotecaID;
        this._prestramos = _prestramos;
        this._estaDisponible = _estaDisponible;
    }

    generarHTMLCreacion() {
        return `
        <h1>Crear nuevo libro</h1>
        <form id="formNuevoLibro" data-formulario="formNuevoLibro">
            <label for="titulo">Titulo</label>
            <input type="text" id="titulo">

            <label for="isbn">ISBN</label>
            <input type="text" id="isbn">

            <label for="autorid">ID del Autor</label>
            <input type="number" id="autorid">

            <label for="bibliotecaid">ID de la Biblioteca</label>
            <input type="number" id="bibliotecaid"> 
            <input type="button" id="crearLibroBtn" value="Crear">

        </form>
      `;
    }
    generarHTMLPropiedades() {
        return `<h1>Gestión de libro</h1>
        <div data-entidad="libro">
        <ul>
        <li><a href="#">Editar libro</a></li>
        <li><a href="#">Borrar libro</a></li>
        <li><a href="#">Listar Prestamos</a></li>
        <li><a href="#">Crear Prestamo</a></li>
        <li><a href="#">Devolver Prestamos</a></li>
        </ul>
        </div>
        `;


    }
    generarHTMLEdicion() {
        return `
        <h1>Editar un libro</h1>
        <form id="formEditarLibro" data-formularios="formEditarLibro">
            <label for="tituloEdit">Titulo</label>
            <input type="text" id="tituloEdit">

            <label for="isbnEdit">ISBN</label>
            <input type="text" id="isbnEdit">

            <label for="autoridEdit">ID del Autor</label>
            <input type="number" id="autoridEdit">

            <label for="bibliotecaidEdit">ID de la Biblioteca</label>
            <input type="number" id="bibliotecaidEdit"> 
            <input type="button" id="editarLibroBtn" value="Editar">
        </form>

        `;
    }

    generarHTMLListadoPrestamos() {
        return `
        <h1>Listado de libros</h1>
        ${}`;
    }

}

