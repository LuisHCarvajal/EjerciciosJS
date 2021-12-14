/* Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común. Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".

Ejemplo 1:

Ingresa frase 1> German
Ingresa frase 2> Gabriela
Los caracteres en común son: G, e, r, a
Ejemplo 2:

Ingresa frase 1> Hola
Ingresa frase 2> Bye
No se encontraron caracteres en común  */

const frase1 = prompt('Ingrese la primera frase: ');
const frase2 = prompt('Ingrese una segunda frase: ');
let cont = 0;
let result=''
for (let i=0; i<=frase1.length; i++)
  {
    if (!result.includes(frase1[i]) && frase2.includes(frase1[i])){
        result += frase1[i] + ', '
        cont += 1
    }
}
if (cont === 0)
  {
    console.log("No se encontraron caracteres en comun")
  }else 
    {
      console.log(cont)
      console.log(`Los caracteres comunes son: ${result.slice(0,-2)}`)
    }