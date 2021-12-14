/* Crea una variable llamada persona de tipo objeto literal con las siguientes propiedades:

peso - 65
estatura - 1.8
bmi - una función que retorne el índice de masa corporal de la persona. Recuerda que la fórmula es peso/estatura^2 (peso sobre estatura al cuadrado).
// escribe tu código acá

// código de prueba
console.log(persona.bmi()); // 20.061728395061728     */

function frecuencias(str, arr={}, counter =0){
    if(str[0] && str[0] !== ' ' && !arr[str[0]]){
        for (let l= 0; l<str.length; l++){
            if (str[l] === str[0] ){
                counter++    
            }
        }
    arr[str[0]] = counter
    }
    if (str.length >0){
        frecuencias(str.slice(1), arr)
    }
    return arr
}
// código de prueba
console.log(frecuencias("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }