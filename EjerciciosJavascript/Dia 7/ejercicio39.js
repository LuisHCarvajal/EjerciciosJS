/* Escribe una función llamada frecuencias que reciba un string y retorne un objeto con el número de veces que aparece cada carácter (exceptuando el espacio en blanco):

// escribe tu función acá

// código de prueba
console.log(frecuencias("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }     */

function frecuencias(str){
  let obj = {}
    for (let letra of str){
        if(letra === ' '|| obj[letra] ){
            continue
        }
        let counter = 0;
        for (let i=0; i < str.length; i++){
            if (str[i] === letra){
                counter ++
            }
        }
        obj[letra] = counter
    }
    return obj
}
// código de prueba
console.log(frecuencias("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }