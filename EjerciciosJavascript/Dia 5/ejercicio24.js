/*Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay en la frase. Por ejemplo:

Ingresa una frase> Hasta la próxima
La frase tiene 4 caracteres "a"*/

const frase = prompt('Ingrese una frase')
let conta = 0
for (let i of frase)
  {
    if (i==='a')
      {
        conta++
      }
  }
  console.log('La frase tiene', conta, 'caracteres "a"')