// Variables para manejar el pedido y la descripción.
let totalPedido = 0;
let descripcionPedido = "";

// Función para mostrar el menú y obtener el pedido.
function mostrarMenu() {
    let seleccion = prompt("Seleccione una pizza (ingrese el número correspondiente):\n1. Muzzarella - $500\n2. Napolitana - $600\n3. Fugazzeta - $650");
    procesarPedido(seleccion);
}

// Función para procesar el pedido
function procesarPedido(seleccion) {
    switch (seleccion) {
        case "1":
            descripcionPedido += "Muzzarella, ";
            totalPedido += 500;
            alert('Has añadido Muzzarella a tu pedido. Total: $' + totalPedido);
            break;
        case "2":
            descripcionPedido += "Napolitana, ";
            totalPedido += 600;
            alert('Has añadido Napolitana a tu pedido. Total: $' + totalPedido);
            break;
        case "3":
            descripcionPedido += "Fugazzeta, ";
            totalPedido += 650;
            alert('Has añadido Fugazzeta a tu pedido. Total: $' + totalPedido);
            break;
        default:
            alert("Opción no válida. Intente nuevamente.");
            mostrarMenu();
            return;  // Salir para evitar la confirmación si la opción no es válida
    }

    let continuar = confirm("¿Deseas agregar otra pizza?");
    if (continuar) {
        mostrarMenu();
    } else {
        mostrarTotal();
    }
}

// mostrar el total del pedido
function mostrarTotal() {
    // Eliminamos la última coma y espacio en blanco de la descripción del pedido
    let pedidoFinal = descripcionPedido.slice(0, -2);
    
    alert('Pedido final: ' + pedidoFinal + '\nTotal a pagar: $' + totalPedido);
    console.log('Pedido final: ' + pedidoFinal);
    console.log('Total a pagar: $' + totalPedido);
}
//Llamar a la funcion para que se ejecute
mostrarMenu(); 
