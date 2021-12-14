/* Escribe una función llamada saludar que reciba un objeto que representa una persona y retorne la frase como se muestra a continuación:

// escribe tu función acá

// código de prueba
const pedro = { nombre: "Pedro", edad: 23 };
console.log(saludar(pedro)); // "Hola Pedro, tienes 23 años"

const maria = { nombre: "Maria", edad: 35 };
console.log(saludar(maria)); // "Hola Maria, tienes 35 años"

const juan = { nombre: "Juan" };
console.log(saludar(juan)); // "Hola Juan"
El objeto siempre tendrá la llave nombre. La llave edad es opcional y cuando no está presente deberás omitir la parte ", tienes x años".    */

function saludar(persona) {
  return persona.edad?`Hola ${persona.nombre}, tienes ${persona.edad} años`:`Hola ${persona.nombre}`
}

// código de prueba
const pedro = { nombre: "Pedro", edad: 23 };
console.log(saludar(pedro)); // "Hola Pedro, tienes 23 años"

const maria = { nombre: "Maria", edad: 35 };
console.log(saludar(maria)); // "Hola Maria, tienes 35 años"

const juan = { nombre: "Juan" };
console.log(saludar(juan)); // "Hola Juan"