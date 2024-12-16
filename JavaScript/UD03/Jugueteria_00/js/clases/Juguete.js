class Juguete {

    #jugueteID;
    #nombre;
    #marca;
    #precio;

    constructor(juegueteID = null, nombre='Deconocido', marca='Desconocido', precio=0.0){
        this.#jugueteID = juegueteID;
        this.#nombre = nombre;
        this.#marca = marca;
        this.#precio = precio;
    }

    getJugueteID(){
        return this.#jugueteID;
    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
       return this.#nombre = nombre;
    }

    getMarca(){
        return this.#marca;
    }
    setMarca(marca){
        return this.#marca = marca;
    }
    getPrecio(){
        return this.#precio;
    }
    setPrecio(precio){
        return this.#precio;
    }

    generarHTMLPropiedades(){
        
    }

}