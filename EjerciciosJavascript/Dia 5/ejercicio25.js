/*Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter "a" por "4".
Reemplaza el caracter "e" por "3".
Reemplaza el caracter "i" por "1".
Reemplaza el caracter "o" por "0".
Ejemplo:

Ingresa una frase> esta es una prueba
3st43sun4pru3b4  */

let frase = prompt('Ingrese una frase')

let frase1 = frase.replace(/ /g,'')
let frase2 = frase1.replace(/a/g,'4')
let frase3 = frase2.replace(/e/g,'3')
let frase4 = frase3.replace(/i/g,'1')
let frase5 = frase4.replace(/o/g,'0')
console.log(frase5)
