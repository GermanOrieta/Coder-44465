const contenedor = document.getElementById("contenedor")
const boton = document.getElementById("boton")
const boton2 = document.getElementById("boton2")

let productos = [
    {
        id: 1,
        nombre: "Teclado",
        precio: 2000,
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/349/695/products/log-gpro_11-ca1b69ecb7c2d3e9ab15941547535331-1024-1024.png"
    },
    {
        id: 2,
        nombre: "Auriculares",
        precio: 3500,
        imagen: "https://www.sony.com.ar/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
    },
    {
        id: 3,
        nombre: "Mouse",
        precio: 4000,
        imagen: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/accessories/wireless-mouse-gt/imgs/pc/huawei-wireless-mouse-gt-kv.jpg"
    },
    {
        id: 4,
        nombre: "Pad",
        precio: 1000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_619601-MLA31097571219_062019-O.jpg"
    }
]

let carrito = []

let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
    carrito = carritoStorage;
}

productos.forEach(producto =>{
    let productoRenderizado = document.createElement("contenedor")
    productoRenderizado.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio: $${producto.precio}</p>
            <button id=${producto.id} class="btn btn-primary">Comprar</button>
        </div>
    </div>
    `
    contenedor.append(productoRenderizado)
    const boton = document.getElementById(producto.id)
    boton.addEventListener("click",() => comprarProducto(producto))
})


const comprarProducto = (producto) => {
    carrito.push(producto.nombre)
}

boton.addEventListener("click", () => alert(carrito))

boton2.addEventListener("click", () => {
    localStorage.clear();
    carrito.innerHTML = "";
    carrito.length = 0;
    alert("productos borrados");
})

