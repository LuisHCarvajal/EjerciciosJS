/*Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.

Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 5, el programa debe imprimir "Hola Mundo" 5 veces:*/

let cont=1
const frase = prompt('Ingrese una frase')
const num = parseInt(prompt('Ingrese un número'))
while (cont <= num)
  {
    console.log(frase)
    cont++
  }