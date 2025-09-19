/* Dado un array de ventas con producto, cantidad, precio, y fecha,
   usa el método reduce() para calcular:
   - Total de ingresos.
   - Producto más vendido (por cantidad).
   - Promedio de venta por transacción.
*/

let ventas = [
    { producto: "Computador", cantidad: 2, precio: 1200, fecha: "2024-10-01" },
    { producto: "Mouse", cantidad: 5, precio: 20, fecha: "2025-09-17" },
    { producto: "Teclado", cantidad: 3, precio: 50, fecha: "2024-08-15" },
    { producto: "Pantalla", cantidad: 1, precio: 300, fecha: "2024-07-20" },
];

const totalIngresos = ventas.reduce((total, venta) => total + (venta.cantidad * venta.precio), 0);
console.log("Total de ingresos:");
console.log(`$${totalIngresos}`);


const productoMasVendido = ventas.reduce((masVendido, venta) => {
    if (venta.cantidad > masVendido.cantidad) {
        return venta;
    }
    return masVendido;
});
console.log("\nProducto más vendido:");
console.log(productoMasVendido);

const promedioVenta = totalIngresos / ventas.length;
console.log("\nPromedio
