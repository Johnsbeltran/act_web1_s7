const inventario = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 1200,
    categoria: "Electrónicos",
    stock: 15
  },
  {
    id: 2,
    nombre: "Teléfono inteligente",
    precio: 800,
    categoria: "Electrónicos",
    "stock": 25
  },
  {
    id: 3,
    nombre: "Mochila",
    precio: 50,
    categoria: "Accesorios",
    stock: 50
  },
  {
    id: 4,
    nombre: "Auriculares",
    precio: 100,
    categoria: "Electrónicos",
    stock: 40
  },
  {
    id: 5,
    nombre: "Mouse inalámbrico",
    precio: 25,
    categoria: "Accesorios",
    stock: 75
  }
];

console.log(inventario);

const totalProductos = inventario.reduce((acumulador, producto) => {
  return acumulador + producto.stock;
}, 0);

console.log(`Hay un total de ${totalProductos} productos en el inventario.`);

const valorTotal = inventario.reduce((acumulador, producto) => {
  return acumulador + (producto.precio * producto.stock);
}, 0);

console.log(`El valor total del inventario es de $${valorTotal}.`);
