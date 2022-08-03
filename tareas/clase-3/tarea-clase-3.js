// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

/* 
let nombreIngresado = prompt("Ingrese su nombre: ");
const miNombre = "mauro";
const nombreDePariente = "lucas";

nombreIngresadoEnMinusculas = nombreIngresado.toLowerCase();

if (nombreIngresadoEnMinusculas === miNombre) {
    console.log(`Hola, Tocayo! Yo tambien me llamo ${nombreIngresado}`);
}else if (nombreIngresadoEnMinusculas === nombreDePariente) {
    console.log(`Hola, ${nombreIngresado} te llamas igual que mi pariente!`);
}else {
    console.log(`Hola ${nombreIngresado}!`);
}
 */

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/* 
let edadUsuario = Number(prompt("Ingrese su edad: "));
const miEdad = 27;

if (edadUsuario === miEdad) {
    console.log("Tienes mi misma edad!");
} else if (edadUsuario > miEdad) {
    console.log("Eres mayor que yo");
} else {
    console.log("Eres menor que yo");
}
 */

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


let tieneDni = prompt("Tienes DNI? Si/No");
tieneDni = tieneDni.toUpperCase();
let edadUsuario;

if (tieneDni === "SI") {
    edadUsuario = Number(prompt("Ingrese su edad: "));
    if (edadUsuario > 18) {
        console.log("Puede ingresar al bar");
    } else {
        console.log("No puede ingresar al bar");
    }
} else if (tieneDni === "NO") {
    console.log("No puede ingresar al bar");
} else {
    console.log("No entendimos su respuesta");
}
