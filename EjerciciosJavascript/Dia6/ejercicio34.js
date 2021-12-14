/*  Escribe una función llamada promedio que reciba un arreglo de números y retorne el promedio los elementos.

// escribe la función acá

// código de prueba
console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200    */

function promedio(arreglo)
  {
    let suma = 0;
    for (item of arreglo)
      {
        suma = suma + item;
      }
    let prom = (suma/arreglo.length);
    return prom;   
  }
console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200