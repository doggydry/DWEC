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
        <form id="formNuevoLibro">
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
    generarHTMLPropiedades(){

    }
}

// Crea una instancia de Libro
const libro = new Libro(1, 'prueba', '123-456-789', 1, 1, [], true);

// Llama al método generarHTMLCreacion() a través de la instancia
const html = libro.generarHTMLCreacion();
document.querySelector('.container').innerHTML = html;


