/*Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.*/

const aleatorio = parseInt((Math.random()*10))
let num=parseInt(prompt('Digite un numero entre 1 y 10'))

while (num != aleatorio)
  {
    console.log('Lo siento, intenta nuevamente!')
    num = parseInt(prompt('Digite un numero entre 1 y 10'))
  }
  console.log('Felicitaciones , ese era el numero!')