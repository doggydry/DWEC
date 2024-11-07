tablero = [["","",""], ["","",""],["","",""]];

function comprobarEstado(tablero){
    for (let fila in tablero){
        if (fila === 'x'){
            return 'x';
        }
    }
}