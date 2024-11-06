export class AnimalES6{
    constructor (tipo, nombre){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    comer (){
        return `${this.nombre} esta comiendo`;
    }
    dormir (){
        return `${dormir} esta comiendo`;
    }
    hacerAlgo(){
        return `${nombre} esta haciendo algo`;
    }
}

