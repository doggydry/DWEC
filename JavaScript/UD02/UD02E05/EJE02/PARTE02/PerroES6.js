import { AnimalES6 } from './AnimalES6.js';
export class PerroES6 extends AnimalES6{
    constructor(){
        super('perro','carlos');
    }

    comer (){
        return super.comer();
    }
    dormir (){
        return super.dormir();
    }
    hacerAlgo(){
        return `${this.nombre} hace guau`;
    }
}