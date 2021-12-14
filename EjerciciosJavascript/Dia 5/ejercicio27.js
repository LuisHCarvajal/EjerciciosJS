/* Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva línea. Por ejemplo:

Ingresa una frase> esta es una prueba
esta
es
una
prueba   */

const frase = prompt('Ingrese una frase')

const words = frase.split(" ")
for (let i = 0; i < words.length; i++) 
  {
    console.log(words[i])  
  }