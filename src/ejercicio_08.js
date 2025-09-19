let lenguajes = ['JavaScript', 'HTML', 'CSS', 'C++', 'C#'];
console.log("Array original:", lenguajes);

let primerosTres = lenguajes.slice(0, 3);
console.log("Primeros tres lenguajes:", primerosTres);

let primeroYUltimo = [lenguajes[0], lenguajes[lenguajes.length - 1]];
console.log("Primer y último lenguaje:", primeroYUltimo);

let [primerLenguaje, ...restoDeLenguajes] = lenguajes;
console.log("Primer lenguaje:", primerLenguaje);
console.log("Resto de los lenguajes:", restoDeLenguajes);

let variableUno = 5;
let variableDos = 10;
console.log("Valores originales: variableUno =", variableUno, "variableDos =", variableDos);

[variableUno, variableDos] = [variableDos, variableUno];
console.log("Valores intercambiados: variableUno =", variableUno, "variableDos =", variableDos);
