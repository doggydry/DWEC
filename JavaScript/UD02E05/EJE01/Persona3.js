const persona2 = {
    nombre: 'Nestor',
    nacimiento: '',
    hobbies: ['leer','correr','programar'],

    saludar:function(){
        return (`Hola, mi nombre es ${this.nombre} y mis hobbies son ${this.hobbies}` );
    },

    getNacimiento:function(){
        
    }


};

console.log(persona2.saludar());