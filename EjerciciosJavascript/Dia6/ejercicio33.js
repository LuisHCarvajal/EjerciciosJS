/* Escribe una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena.

Nota: puedes asumir que cada palabra está separada por espacio.

// escribe la función acá

// código de prueba
console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"  */

function capitalizar(cadena)
  {
    const arr = cadena.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }

    const str2 = arr.join(" ");
    return str2;
  }

console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"  
