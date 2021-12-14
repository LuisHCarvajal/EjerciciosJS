/*  Escribe una función llamada descifrar que reciba un string y un objeto. Utiliza las propiedades del objeto para reemplazar los caracteres de la cadena y retorna el resultado:

// escribe tu función acá

// código de prueba
console.log(descifrar("h0l4", { 0: "o", 4: "a" })); // "hola"
console.log(descifrar("pyrmizo", { y: "e", z: s })); // "permiso"
console.log(descifrar("igual", { h: "n" })); // "igual"  */

function descifrar(cadena,objeto) {
  let cadena1 =""
  for (let item of cadena)
    {
      /*Encuentra una key dentro del objeto y remplaza si existe por el objeto en la posicion de la key(objeto[key]) y sino por la letra del string(item)   */
      Object.keys(objeto).find(key => key === item)?
      cadena1 += objeto[item]:
      cadena1 += item  
    }
    return cadena1
  }
  
// código de prueba
console.log(descifrar("h0l4", { 0: "o", 4: "a" })); // "hola"
console.log(descifrar("pyrmizo", { y: "e", z: "s" })); // "permiso"
console.log(descifrar("igual", { h: "n" })); // "igual"  