/*Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!".*/

const aleatorio = parseInt((Math.random()*10))
let num=parseInt(prompt('Digite un numero entre 1 y 10'))
if (num === aleatorio)
  {
    console.log('Felicitaciones , ese era el numero!')
  }
  else  {
          console.log('Lo siento, intenta nuevamente!')
        }