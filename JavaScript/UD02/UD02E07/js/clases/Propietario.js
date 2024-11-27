export class Propietario {
    #nombre;
    #telefono;
    #email;

    construct(nombre,telefono,email){
        this.#nombre= nombre;
        this.#telefono = telefono;
        this.#email = email;
    }
}