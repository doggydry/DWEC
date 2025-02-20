function numeroEscrito() {
    let numeroRandom = Math.floor(Math.random() * 100); // De 0 a 99 inclusive
    let decenas = Math.floor(numeroRandom / 10);
    let unidades = numeroRandom % 10;

    let resultado1 = "";
    let resultado2 = "";

    // Definir las decenas
    switch (decenas) {
        case 1:
            resultado1 = (unidades === 0) ? "diez" : "diez y ";
            break;
        case 2:
            resultado1 = (unidades === 0) ? "veinte" : "veinte y ";
            break;
        case 3:
            resultado1 = "treinta ";
            break;
        case 4:
            resultado1 = "cuarenta ";
            break;
        case 5:
            resultado1 = "cincuenta ";
            break;
        case 6:
            resultado1 = "sesenta ";
            break;
        case 7:
            resultado1 = "setenta ";
            break;
        case 8:
            resultado1 = "ochenta ";
            break;
        case 9:
            resultado1 = "noventa ";
            break;
    }

    // Definir las unidades
    switch (unidades) {
        case 1:
            resultado2 = "uno";
            break;
        case 2:
            resultado2 = "dos";
            break;
        case 3:
            resultado2 = "tres";
            break;
        case 4:
            resultado2 = "cuatro";
            break;
        case 5:
            resultado2 = "cinco";
            break;
        case 6:
            resultado2 = "seis";
            break;
        case 7:
            resultado2 = "siete";
            break;
        case 8:
            resultado2 = "ocho";
            break;
        case 9:
            resultado2 = "nueve";
            break;
        default:
            resultado2 = ""; // Para el caso de 0
            break;
    }

    // Concatenar el resultado final
    let resultadoFinal = (decenas === 0 && unidades === 0) 
        ? "cero" 
        : (resultado1.trim() + (unidades !== 0 && decenas > 1 ? " y " : "") + resultado2).trim();

    console.log(`El número ${numeroRandom} es: ${resultadoFinal}`);
}

numeroEscrito();
