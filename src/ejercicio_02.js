let productos = [
    { id: 1, nombre: "Computador", precio: 1500, categoria: "Electrónicos", stock: 10 },
    { id: 2, nombre: "Smartphone", precio: 800, categoria: "Electrónicos", stock: 25 },
    { id: 3, nombre: "Camiseta", precio: 20, categoria: "Ropa", stock: 50 },
    { id: 4, nombre: "Libro", precio: 15, categoria: "Papelería", stock: 30 },
    { id: 5, nombre: "Auriculares", precio: 100, categoria: "Electrónicos", stock: 15 }]

let productosElectronicos = productos.filter(producto => producto.categoria === "Electrónicos");
console.log("Productos de la categoría 'Electrónicos':");
console.log(productosElectronicos);

let productosStockMenor10 =  productos.filter(producto => producto.stock<10);
console.log("Productos con stock menor a 10:");
console.log(productosStockMenor10);

let productosPrecioMas500 = productos.filter(producto => producto.precio>500);
console.log("Productos con precio mayor a $500:");
console.log(productosPrecioMas500);
