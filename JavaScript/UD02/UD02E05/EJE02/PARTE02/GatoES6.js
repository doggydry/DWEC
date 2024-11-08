import { AnimalES6 } from './AnimalES6.js';
export class GatoES6 extends AnimalES6{
    constructor(){
        super('gato','pepe');
    }
    comer (){
        return super.comer();
    }
    dormir (){
        return super.dormir();
    }
    hacerAlgo(){
        return `${this.nombre} hace miau`;
    }
}
