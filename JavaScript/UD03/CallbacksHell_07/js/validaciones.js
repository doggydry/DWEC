function validarFormulario() {
    const nombre = document.getElementById('nombre');
    const contrasenia = document.getElementById('contrasenia');
    const emailInput = document.getElementById('email');
    const fecha = document.getElementById('fechaNac');
}

/**
 ** Nombre: No puede contener números y debe tener al menos 3 caracteres 
 */
function validarNombre(nombre, callback) {

    const contieneNumeros = /\d/; // Expresión regular para detectar números
    if (!contieneNumeros.test(nombre) && nombre.length >= 3) {
        return callback('Resultado correcto', null);
    } else {
        return callback(null, 'Resultado incorrecto');
    }
}

validarNombre(nombre.value, function (resultadoCorrecto, resultadoErroneo) {
    if (resultadoCorrecto) {

    }
    if (resultadoErroneo) {

    }
});

