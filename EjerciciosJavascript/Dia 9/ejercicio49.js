/*  Crea una función flecha y asígnala a una variable obtenerImpares. La función debe recibir un arreglo de números y retornar todos los impares.

Nota: Utiliza el método filter y pásale una función flecha como argumento.

// escribe tu solución acá

// código de prueba
console.log(obtenerImpares([1, 2, 3, 4, 5])) // [1, 3, 5]
console.log(obtenerImpares([64, 35, 27])) // [35, 27]
console.log(obtenerImpares([])) // []  */ 
/*
function obtenerImpares(arreglo) {
  return arreglo.filter(num => num % 2 === 1)
}   */


// Lo mismo de esta otra manera, como variable
const obtenerImpares = (arreglo) => {
  return arreglo.filter(num => num % 2 === 1)
}

// código de prueba
console.log(obtenerImpares([1, 2, 3, 4, 5])) // [1, 3, 5]
console.log(obtenerImpares([64, 35, 27])) // [35, 27]
console.log(obtenerImpares([])) // []