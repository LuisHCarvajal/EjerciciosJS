/* Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:

Ingresa una frase> esta es una prueba
Esta Es Una Prueba  */

const frase = prompt('Ingrese una frase')

//let frase1 = frase.replace(/\b\w/g,'A')

const words = frase.split(" ")
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

const frase1=words.join()
const frase2=frase1.replace(/,/g,' ')

console.log(frase2)