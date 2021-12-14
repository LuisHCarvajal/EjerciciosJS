/*Escribe un programa que le pida al usuario ingresar un número.

Si el número es múltiplo de 3 debe imprimir en la consola "bing".
Si el número es múltiplo de 5 debe imprimir en la consola "bong".
Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.*/

const num = parseInt(prompt('Ingresa Un número'))
const res3 = (num % 3)
const res5 = (num % 5)
if (res3 === 0 && res5 === 0 ) 
  {
    console.log('El numero', num, 'bingbong')
  }
  else if (res3 === 0)
    {
      console.log('El numero', num, 'bing')
    }
    else if (res5 === 0)
    {
      console.log('El numero', num, 'bong')
    }
    else
      {
        console.log('El numero', num, 'no es multiplo ni de 3 ni de 5')
      }
  