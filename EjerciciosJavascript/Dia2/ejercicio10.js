/*El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula:

peso / altura^2
Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30 */

const peso = parseInt(prompt('Ingrese su peso en kg'));
const altura = parseFloat(prompt('Ingrese su altura en metros(Ej. 1.78)'));
let BMI = peso / Math.pow(altura, 2);

if (BMI < 18.5)
  {
    console.log('Su BMI es de', BMI, 'Bajo de peso')
  }
  else if (BMI >= 18.5 && BMI <= 24.9)
    {
      console.log('Su BMI es de', BMI, 'Normal')
    }
    else if (BMI >= 25 && BMI <= 29.9)
      {
        console.log('Su BMI es de', BMI, 'Sobrepeso')
      }
      else
        {
          console.log('Su BMI es de', BMI, 'Obeso')
        }
    
