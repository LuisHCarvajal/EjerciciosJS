/*Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:5
6
7
8
9
10*/

let cont=1
const num1 = parseInt(prompt('Ingrese un número menor'))
const num2 = parseInt(prompt('Ingrese otro número mayor'))
while (num1 <= num2)
  {
    console.log(num1+1)
    num1++
  }