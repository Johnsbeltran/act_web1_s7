/*
  Crea un array inicial y demuestra los métodos para manipularlo:
  - push() y pop() para agregar y quitar elementos del final.
  - shift() y unshift() para agregar y quitar del inicio.
  - splice() para insertar, reemplazar o eliminar elementos en una posición específica.
  - slice() para extraer una porción sin modificar el array original.
*/

let numeros = [1, 2, 3, 4, 5];

console.log("Arreglo original:", numeros);

numeros.push(6);
console.log("\nDespués de 'push(6)':", numeros);

let ultimoNumero = numeros.pop();
console.log("Después de 'pop()':", numeros);
console.log("Elemento eliminado con 'pop()':", ultimoNumero);


let primerNumeroEliminado = numeros.shift();
console.log("\nDespués de 'shift()':", numeros);
console.log("Elemento eliminado con 'shift()':", primerNumeroEliminado);


numeros.unshift(100);
console.log("Después de 'unshift(100)':", numeros);


let elementosEliminadosConSplice = numeros.splice(1, 2, "insertado");
console.log("\nDespués de 'splice(1, 2, \"insertado\")':", numeros);
console.log("Elementos eliminados con 'splice()':", elementosEliminadosConSplice);

let porcionDelArray = numeros.slice(1, 4);
console.log("\nArray original después de todas las operaciones:", numeros);
console.log("Nueva porción obtenida con 'slice(1, 4)':", porcionDelArray);
