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
                alert('El producto ha sido eliminado del inventario.');
            } else {
                alert('Operacion cancelada');
            }
        } else {
            alert(`El producto ${nombre} no se encuentra en el inventario`);
        }
    }

    function buscarProducto(nombre) {
        return inventario[nombre] || null;
    }

    function actualizarInventario(nombre, cantidad) {
        if (inventario[nombre]) {
            inventario[nombre].cantidad += cantidad;
            if (inventario[nombre].cantidad <= 0) {
                alert(`!Reponer el producto ${nombre}.`);
            }
        }
    }
    // Función para ordenar los productos por precio
    function ordenarProductosPorPrecio() {
        return Object.entries(inventario)
            .sort(([, a], [, b]) => a.precio - b.precio)
            .map(([nombre, { cantidad, precio, categoria }]) => ({
                nombre,
                cantidad,
                precio,
                categoria,
            }));
    }

    function imprimirInventario() {
        let informe = '';
        for (const [nombre, { cantidad, precio }] of Object.entries(inventario)) {
            const total = cantidad * precio;
            informe += `Nombre: ${nombre}, Categoría: ${inventario[nombre].categoria}, Cantidad: ${cantidad}, Precio: ${precio}, Total: ${total}\n`;
        }
        return informe || 'El inventario está vacío.';
    }
    function filtrarProductosPorCategoria(categoria) {
        return Object.entries(inventario)
            .filter(([, { categoria: cat }]) => cat === categoria)
            .map(([nombre, { cantidad, precio }]) => ({
                nombre,
                cantidad,
                precio,
            }));
    }

    return {
        agregarProducto,
        eliminarProducto,
        buscarProducto,
        actualizarInventario,
        ordenarProductosPorPrecio,
        imprimirInventario,
        filtrarProductosPorCategoria,
    };
    

})();