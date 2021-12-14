/* Programa que pida 6 numeros por pantalla y los meta dentro de un arreglo*/
let cont = 1;
let arreglo = [];
while (cont <= 6) {
  arreglo.push(prompt(`Ingrese el ${cont} numero`));
  //arreglo[cont] = prompt(`Ingrese el ${cont}) numero`)
  cont++;
}
console.log(arreglo);
console.log(arreglo.reverse())