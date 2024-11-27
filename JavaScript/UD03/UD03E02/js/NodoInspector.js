class NodoInspector {
    #nodoActual;

    constructor(nodoInicial) {
        this.#nodoActual = nodoInicial;
    }

    /**
     * Getter para saber si el nodo actual es la raíz.
     */
    get esRaiz() {
        return this.#nodoActual === document.body;
    }

    /**
     * Comprubea si el nodo tiene hijos y si es así devuelve el primero del nodo
     */
    get esPrimerHijo() {
        if (this.#nodoActual.children.length>0){
            return this.#nodoActual.firstChild;
        }
    }

    /**
     * Comprubea si el nodo tiene hijos y si es así devuelve el último del nodo
     */
    get esUltimoHijo() {
       if (this.#nodoActual.children.length>0){
        return this.#nodoActual.lastChild;
       }
    }

    /**
    * Comprueba si el nodo tiene algún hijo con chilElementCount (numero etiquetas HTML)
    */
    get tieneHijos() {
        return this.#nodoActual.childElementCount > 0;
    }

    obtenerInfo() {
        info = {
            
        }
    }
}