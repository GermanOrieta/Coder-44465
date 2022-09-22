const carrito = [];
const productos = [];

class producto {
    constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    }
    sumarIva() {
    return (this.precio = this.precio * 1), 21;
    }
    vendido() {
    this.stock = this.stock - 1;
    }
}

const producto1 = new producto(1, "teclado", 5200, 31);
productos.push(producto1);
const producto2 = new producto(2, "auriculares", 21000, 19);
productos.push(producto2);
const producto3 = new producto(3, "mousepad", 2500, 26);
productos.push(producto3);
const producto4 = new producto(4, "microfono", 7000, 10);
productos.push(producto4);


function mostrarProductos() {
    alert("Bienvenido a MegatroN, estos son nuestros perifericos",);
    productos.forEach((producto) => {
    alert(`
            ${producto.nombre}
            $${producto.precio}
        `);
    });
}

function mostrarCarrito() {
    alert("Productos en su carrito:");
    carrito.forEach((producto) => {
    alert(`${producto.nombre}
            $${producto.precio}`);
    });

    let continuar = Number(prompt("1-Para confirmar su compra, 2-Vaciar carrito"));
    switch (continuar) {
        case 1:
        let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
        let iva = total * 1.21;
        alert(`El total de su compra es de $${iva}`);
    break;
    
        case 2:
        carrito.splice(0, carrito.length -1);
        alert("Carrito vaciado!");
        console.log(carrito);
    break;
}
}

function comprar() {
    let compra = Number(prompt("Elija los productos que desee: 1-Teclado, 2-Auriculares, 3-Mousepad, 4-Microfono, 0-salir"));

    while (compra !== 0) {
    let resultado;
    switch (compra) {
        case 1:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);

    break;
        case 2:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);

    break;
        case 3:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);

    break;
        case 4:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);

    break;
        default:
        alert("Ingrese un producto de la lista por favor");
    }
    compra = Number(prompt("Elija los productos que desee: 1-Teclado, 2-Auriculares, 3-Mousepad, 4-Microfono, 0-salir"));
}
}

mostrarProductos();
comprar();
mostrarCarrito();