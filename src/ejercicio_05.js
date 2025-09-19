/* Crea un array de usuarios con id, nombre, email y estado (activo/inactivo).
Implementa búsquedas usando:
- find() para buscar un usuario por su email.
- findIndex() para obtener la posición de un usuario por su id.
- some() para verificar si existen usuarios inactivos.
- every() para verificar si todos los usuarios tienen un email válido.
*/

let cuentasDeUsuario = [
    { id: 1, nombreDeUsuario: "Juan", correoElectronico: "juan@gmail.com", estaActivo: true },
    { id: 2, nombreDeUsuario: "Ana", correoElectronico: "ana.gmail.com", estaActivo: false },
    { id: 3, nombreDeUsuario: "Luis", correoElectronico: "luis@gmail.com", estaActivo: true },
];

let usuarioPorCorreo = cuentasDeUsuario.find(usuario => usuario.correoElectronico === "ana.gmail.com");
console.log("Usuario encontrado por correo electrónico:");
console.log(usuarioPorCorreo);


let indiceDeUsuario = cuentasDeUsuario.findIndex(usuario => usuario.id === 2);
console.log("\nPosición del usuario con ID 2:");
console.log(indiceDeUsuario);


let hayUsuariosInactivos = cuentasDeUsuario.some(usuario => usuario.estaActivo === false);
console.log("\n¿Hay usuarios inactivos?");
console.log(hayUsuariosInactivos);

let todosTienenCorreoValido = cuentasDeUsuario.every(usuario => usuario.correoElectronico.includes("@"));
console.log(todosTienenCorreoValido);
