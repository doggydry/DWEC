'use strict';

function Animal(tipo, nombre) {
    this.tipo = tipo;
    this.nombre = nombre;

    this.comer = function () {
        return `${nombre} está comiendo`
    };
    this.dormir = function () {
        return `${nombre} está durmiendo`;
    };

    this.hacerRuido = function () {
        if (tipo === 'perro') {
            return `${nombre} hace guau`;
        };
        if (tipo === 'gato') {
            return `${nombre} hace miau`;
        };
        return `${nombre} está haciendo algo`;
    };
}
var animal = new Animal('perro', 'bob');
var animal2 = new Animal('gato', 'mis');
var animal3 = new Animal('pez','javi');

console.log(animal.comer());
console.log(animal2.comer());

console.log(animal.dormir());
console.log(animal2.dormir());

console.log(animal3.hacerRuido());
console.log(animal2.hacerRuido());
console.log(animal.hacerRuido());


