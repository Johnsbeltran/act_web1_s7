// Objeto con propiedades anidadas
let usuario = {
    nombre: "Sofia",
    edad: 28,
    ubicacion: {
        calle: "Estadio",
        ciudad: "Medellín",
        pais: "Colombia"
    },
    datosDeContacto: {
        correo: "sofia.perez@email.com",
        telefono: "987-654-3210"
    }
};

let { nombre, edad } = usuario;
console.log(`Nombre: ${nombre}, Edad: ${edad}`);

let { nombre: nombreUsuario, edad: edadUsuario } = usuario;
console.log(`Nombre del usuario: ${nombreUsuario}, Edad del usuario: ${edadUsuario}`);


let { estadoCivil = "desconocido", nombre: nombreNuevo } = usuario;
console.log(`Estado civil: ${estadoCivil}`);

let {
    ubicacion: { calle, ciudad, pais },
    datosDeContacto: { correo, telefono }
} = usuario;
console.log(`Ubicación: ${calle}, ${ciudad}, ${pais}`);
console.log(`Contacto: ${correo}, ${telefono}`);

let { nombre: nombreExtraido, ...otrosAtributos } = usuario;
console.log(`Nombre extraído: ${nombreExtraido}`);
console.log("Otros atributos:", otrosAtributos);
