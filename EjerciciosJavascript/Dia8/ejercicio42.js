/*  Escribe una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares que existen en el arreglo:

// escribe la función acá

// código de prueba
console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
console.log(pares([7, 921, 43, 9649])) // []
Nota: Intenta utilizar el método filter de los arreglos para solucionar este ejercicio.  */

function pares(nums) {
  return nums.filter(num=>num%2===0) 
}

// código de prueba
console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
console.log(pares([7, 921, 43, 9649])) // []