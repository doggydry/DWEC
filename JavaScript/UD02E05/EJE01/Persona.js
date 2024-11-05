class Persona {
    _nombre;
    _nacimiento;
    _hobbies;
    constructor (nombre, nacimiento, hobbies){
        this._nombre = nombre;
        this._nacimiento = nacimiento;
        this._hobbies = hobbies;
    }

    get edad (){
        return this._nacimiento;
    } 

    saludar (){
        return (`Hola, me llamdo ${this._nombre}  y me gusta ${this._hobbies}`)
    }

}
const persona1 = new Persona ('Paco', '02/02/2000', ['Jugar, Saltar, Correr']);
console.log(persona1.saludar());


