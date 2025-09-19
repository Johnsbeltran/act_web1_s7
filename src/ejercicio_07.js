let numerosAleatorios = [45, 5, 30, 89, 99, 23];
let numerosAscendentes = numerosAleatorios.sort((a, b) => a - b);
console.log("Números ordenados ascendentemente:", numerosAscendentes);
let numerosDescendentes = numerosAleatorios.sort((a, b) => b - a);
console.log("Números ordenados descendentemente:", numerosDescendentes);

let nombresAleatorios = ["Ana", "Luis", "María", "Carlos", "Zoe", "Beatriz"];
let nombresAlfabeticos = nombresAleatorios.sort();
console.log("Nombres ordenados alfabéticamente:", nombresAlfabeticos);

let objetosEdad = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 22 },
    { nombre: "María", edad: 30 },
    { nombre: "Carlos", edad: 28 },
];
let objetosOrdenadosPorEdad = objetosEdad.sort((a, b) => a.edad - b.edad);
console.log("Objetos ordenados por edad:", objetosOrdenadosPorEdad);

let numerosInvertidos = numerosAleatorios.reverse();
console.log("Números invertidos:", numerosInvertidos);
