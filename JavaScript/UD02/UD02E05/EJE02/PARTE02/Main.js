import { AnimalES6 } from './AnimalES6.js';
import { GatoES6 } from './GatoES6.js';
import { PerroES6 } from './PerroES6.js';

const animal = new AnimalES6('animal','generico')

const gato = new GatoES6();
const perro = new PerroES6();

console.log(gato.comer());
console.log(gato.dormir());
console.log(gato.hacerAlgo());

console.log(perro.comer());
console.log(perro.dormir());
console.log(perro.hacerAlgo());

console.log(animal.comer());
console.log(animal.dormir());
console.log(animal.hacerAlgo());



