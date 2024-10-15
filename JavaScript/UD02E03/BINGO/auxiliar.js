function mostrarCartonEnHTML(carton) {
    const contenedor = document.getElementById("contenedorCarton"); // Asegúrate de tener este contenedor en tu HTML

    // Limpiar el contenedor antes de agregar el nuevo cartón
    contenedor.innerHTML = ""; 

    carton.forEach(fila => {
        const filaDiv = document.createElement("div"); // Crear un nuevo div para la fila
        fila.forEach(numero => {
            const numeroDiv = document.createElement("span"); // Crear un nuevo span para el número
            numeroDiv.textContent = numero !== null ? numero : ""; // Mostrar el número o vacío si es null
            numeroDiv.className = "numero"; // Clase para aplicar estilos si es necesario
            filaDiv.appendChild(numeroDiv); // Agregar el número a la fila
        });
        contenedor.appendChild(filaDiv); // Agregar la fila al contenedor
    });
}
