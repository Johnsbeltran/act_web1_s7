//Crea un objeto y demuestra: - Object.keys() - obtener claves - Object.values() - obtener valores - Object.entries() - obtener pares clave-valor - Iterar sobre el objeto con forEach()*/

let vehiculo = {
    nombre: "Carro",
    precio: 25000,
    marca: "Mazda",
    disponible: true
};

console.log("Objeto original:", vehiculo);


let claves = Object.keys(vehiculo);
console.log("Claves del objeto:", claves);

let valores = Object.values(vehiculo);
console.log("Valores del objeto:", valores);

let entradas = Object.entries(vehiculo);
console.log("Pares clave-valor:", entradas);

Object.entries(vehiculo).forEach(([clave, valor]) => {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
});
