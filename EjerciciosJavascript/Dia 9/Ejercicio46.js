/*  Crea una función flecha y asígnala a una variable llamada hola. La función debe recibir un argumento name (con valor por defecto "Pedro") y debe retornar la frase "Hola " seguido del nombre y un signo de exclamación.

Nota: Utiliza plantillas de strings para la creación de la frase.

// escribe acá tu función flecha

// código de prueba
console.log(hola()) // "Hola Pedro!"
console.log(hola("Maria")) // "Hola Maria!"  */

const hola = (name='Pedro')=> {
  return `"Hola ${name}!"`}
  

// código de prueba
console.log(hola()) // "Hola Pedro!"
console.log(hola("Maria")) // "Hola Maria!" 