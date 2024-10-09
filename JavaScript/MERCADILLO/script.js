const $negocio = (() => {
    let inventario = {};

    function agregarProducto(nombre, cantidad, precio, categoria) {
        if (inventario[nombre] == null) {
            inventario[nombre] = {
                cantidad: cantidad,
                precio: precio,
                categoria: categoria,
            };
            alert(`Producto ${nombre} agregado exitosamente!`);
        } else {
            alert(`El producto ${nombre} ya existe.`);
        }
    }

    function eliminarProducto(nombre) {
        if (inventario[nombre]) {
            const confirmar = confirm(`¿Está seguro que desea eliminar el producto ${nombre}?`)
            if (confirmar) {
                delete inventario[nombre];
                alert ('El producto ha sido eliminado del inventario.');
            } else {
                alert('Operacion cancelada');
            }
        } else {
            alert(`El producto ${nombre} no se encuentra en el inventario`);
        }
    }

    function buscarProducto (nombre){
        return inventario[nombre] || null;
    }

    function actualziarInventario(nombre, cantidad){
        if (inventario[nombre]){
            inventario[nombre].cantidad += cantidad;
            if (inventario[nombre].cantidad <=0){
                alert(`!Reponer el producto ${nombre}.`);
            }
        }
    }
})();