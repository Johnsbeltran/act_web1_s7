/* Crea un array de estudiantes con nombre, edad, notas (array de números).
Usa map() para:

Crear un nuevo array con solo los nombres
Crear un array con el promedio de cada estudiante
Agregar una propiedad estado ("Aprobado" si promedio >= 70, "Reprobado" si < 70)
*/

const estudiantes = [
    { nombre: "Ana", edad: 20, notas: [85, 90, 78] },
    { nombre: "Luis", edad: 22, notas: [60, 65, 70] },
    { nombre: "María", edad: 19, notas: [92, 88, 95] },
];

const calcularPromedio = (notas) => notas.reduce((acum, nota) => acum + nota, 0) / notas.length;


const nombres = estudiantes.map(estudiante => estudiante.nombre);
console.log(nombres);

const promedios = estudiantes.map(estudiante => calcularPromedio(estudiante.notas));
console.log(promedios);

const estudiantesConEstado = estudiantes.map(estudiante => {
    const promedio = calcularPromedio(estudiante.notas);
    const estado = promedio >= 70 ? "Aprobado" : "Reprobado";
    return { ...estudiante, promedio, estado };
});

console.log("\nEstudiantes con estado y promedio:");
console.log(estudiantesConEstado);
