export class Autor {
    _autorID;
    _nombreID;
    _nacionalidad;
    _bibliografia;
    _libros;

    constructor (_autorID, _nombreID,_nacionalidad,_bibliografia,_libros = [{}]){
        this._autorID = _autorID;
        this._nombreID = _nombreID;
        this._nacionalidad = _nacionalidad;
        this._bibliografia = _bibliografia;
        this._libros = _libros;
    }

    generarHTMLCreacion(){
        return `
        <h1>Crear un nuevo autor</h1>
        <form id="formNuevoAutro">
            <label for="nombreid">Nombre</label>
            <input type="text" id="nombreid">

            <label for="nacionalidad">Nacionalidad</label>
            <input type="text" id="nacionalidad">

            <label for="bibliografia">Bibliografía</label>
            <input type="number" id="autoridEdit">

            <input type="button" id="agregarAutorBoton" value="Agregar">
        </form>
        `;
    }
    
}