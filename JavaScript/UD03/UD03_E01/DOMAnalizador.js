(function () {
    // Función auxiliar: Limpia el texto de espacios innecesarios
    function limpiarTexto(texto) {
        return texto.trim().replace(/\s+/g, " ");
    }

    // Función auxiliar: Convierte un nodo en un objeto JSON
    function convertirANodoJSON(nodo) {
        if (!nodo.tagName) return null; // Ignorar nodos que no sean etiquetas HTML

        const lstHijos = Array.from(nodo.children).map(convertirANodoJSON).filter(Boolean);
        const lstData = {};

        Array.from(nodo.attributes).forEach(attr => {
            if (attr.name.startsWith("data-")) {
                lstData[attr.name] = attr.value;
            }
        });

        return {
            etiqueta: nodo.tagName.toLowerCase(),
            texto: limpiarTexto(nodo.textContent),
            tieneId: nodo.hasAttribute("id"),
            lstClass: nodo.classList.length > 0 ? Array.from(nodo.classList) : [],
            lstData,
            lstHijos
        };
    }

    // Función principal: Obtiene el JSON del DOM desde <body>
    function obtenerEstructuraJSON() {
        const body = document.body;
        return convertirANodoJSON(body);
    }

    // Función auxiliar: Imprime el camino desde el documento raíz hasta un nodo
    function construirRuta(nodo) {
        const ruta = [];
        while (nodo) {
            const etiqueta = nodo.tagName ? nodo.tagName.toLowerCase() : "document";
            const id = nodo.id ? nodo.id : "noid";
            const clases = nodo.classList && nodo.classList.length > 0 ? Array.from(nodo.classList).join("-") : "noclass";
            const texto = nodo.textContent ? limpiarTexto(nodo.textContent) : "sin texto";

            ruta.unshift(`${etiqueta}-${id}-${clases}-${texto}`);
            nodo = nodo.parentElement;
        }
        return ruta.join(" -> ");
    }

    // Función principal: Imprime la estructura desde la raíz hasta un selector
    function imprimirEstructura(selector) {
        const nodo = document.querySelector(selector);
        if (!nodo) {
            console.log("Nodo no encontrado.");
            return;
        }
        console.log(construirRuta(nodo));
    }

    // Exponer las funciones globalmente
    window.domAnalyzer = {
        obtenerEstructuraJSON,
        imprimirEstructura
    };
})();
