export class AnimalES6{
    constructor (tipo, nombre){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    comer (){
        return `${this.nombre} esta comiendo`;
    }
    dormir (){
        return `${this.nombre} esta durmiendo`;
    }
    hacerAlgo(){
        return `${this.nombre} esta haciendo algo`;
    }
}

