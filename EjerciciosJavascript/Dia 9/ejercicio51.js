/* Modifica el ejercicio anterior para que la función max no reciba un arreglo sino un número indeterminado de argumentos.

// escribe tu solución acá

// código de prueba
console.log(max(1, 2, 3, 4)) // 4
console.log(max(63, 85, 39, 24, 3)) // 85  */

/*
function max(...args) {
  return Math.max(...args)
}  */

const max = (...args) => {
  return Math.max(...args)
} 

// código de prueba
console.log(max(1, 2, 3, 4)) // 4
console.log(max(63, 85, 39, 24, 3)) // 85
