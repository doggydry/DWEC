function Persona2 (nombre, nacimiento, hobbies ){
    this.nombre = nombre;
    this.nacimiento = nacimiento;
    this.hobbies = hobbies;

    this.get = function (){
        let hoy = new Date ();
        
        if (edadReal.getMonth()<mes){
            edadReal--;
        }
        return edadReal;
    }
    this.saludar = function (){
        return (`Hola, me llamdo ${this.nombre} y me gusta ${this.hobbies}`)
    }
}

const persona1 = new Persona2 ('Juan',2000,['correr, cantar y volar.']);
console.log(persona1.saludar());
