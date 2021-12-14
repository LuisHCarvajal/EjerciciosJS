/*Escribe un programa para la consola que le pida al usuario un número y sume todos los números desde 1 hasta ese número.

Por ejemplo, si el usuario ingresa el número 5, el programa debe imprimir 15 (1+2+3+4+5). Si el usuario ingresa el número 10, el programa debe imprimir 55.*/
let sum = 0
const num=parseInt(prompt('Ingrese un número'))
for (let acum = 1; acum <= num; acum++)
{
  sum = sum + acum 
}
console.log(sum)