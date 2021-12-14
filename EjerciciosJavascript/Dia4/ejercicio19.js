/*Escribe un programa que:

Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
Elimine el segundo elemento.
Recorra e imprima el arreglo.
Ejemplo:

Ingresa un número> 5
1
3
4
5*/
const numeros = []
const num = parseInt(prompt('Ingrese un número'))
for (let i=0; i<num; i++)
  {
    numeros[i]=i+1
    console.log(numeros[i])
  }