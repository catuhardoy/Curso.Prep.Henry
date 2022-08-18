// No cambies los nombres de las funciones.


arreglo =["hola", 9 , true, "que tal"]
function devolverPrimerElemento(array) {
   return array [0]
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
}

// let arreglo =["hola", 9 , true, "que tal"]
function devolverUltimoElemento(array) {
  

  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1]
}


function obtenerLargoDelArray(array) {
  
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}

// arreglo = [4, 7 , 5, 1]
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  
  for (let i = 0; i< array.length ; i++ ){
    array[i] ++ ;
  
}
return array
}

// let arreglo = ["filipa", "catu"]
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}

// arreglo = [4, 7 , 5, 1]
function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
    array.unshift(elemento)
    return array
}

// arreglo = ["hello", "world", "wu"]
function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let juntarPalabras = palabras.join (" ")
  
  return juntarPalabras

}

// arreglo = ["catu", "tomi", "juan"]
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.indexOf(elemento)>=0){
  return true
}return false
}

// let numeros = [1, 4, 3, 7]

function agregarNumeros(numeros) {
  let total = 0
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  for (let i = 0; i< numeros.length ; i++ ){
  total += numeros [i]
  }
return total
}

// let resultadosTest = [3, 4, 7, 10, 9]

function promedioResultadosTest(resultadosTest) {
  
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let total = 0
  for (let i = 0; i < resultadosTest.length; i++ ){
    suma = total += resultadosTest [i];
}
return suma/resultadosTest.length 
}


let numeros = [3, 5, 9, 12, 9]
let elMasGrande = numeros [0]
function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  for (let i = 0; i< numeros.length; i++){
    if (elMasGrande < numeros [i]){
      elMasGrande = numeros[i]
    }
  }
  return elMasGrande
}

// let lista = [4, 5, 6];

function multiplicarArgumentos() {
// Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length < 1){
    return 0
  }
  let total = 1; 
  for (let i = 0 ; i < arguments.length ; i++) {
      total = total * arguments [i];
    }
    return total;
  }



// let arreglo = [12, 19, 23, 4]

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí:
  let contador = 0;
  for (let i = 0 ; i < arreglo.length ; i++){
    if (arreglo[i] > 18){
      contador ++;
    }
    return contador;
  }

}


function diaDeLaSemana(numeroDeDia) {
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana"
  }
  else{
    return "Es dia Laboral"
  } 
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = n.toString()
    if (num.charAt(0)=== "9"){
      return true
    }
    return false
  }
  



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
  for (let i = 0; i<arreglo.length; i++){
    if (arreglo[i] === arreglo [i + 1])
    return true
  }
  return false
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevoArray = [];
  for (let i = 0; i<array.length; i++){
    if (array [i] === "Enero" || array [i] === "Marzo" || array [i] === "Noviembre"){
    nuevoArray.push(array[i]);}
  }
  if (nuevoArray.length < 3){
  return "No se encontraron los meses pedidos";
  }
  else{
    return nuevoArray;
  }

  }


let array = [3, 5, 120, 300, 59, 876]
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let mayoresACien = []
  for (let i = 0; i < array.length; i++){
    if (array [i] > 100 ){
      mayoresACien.push(array[i]); 
  } 
    }
    return mayoresACien
  }


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  
  nuevoArray = []
  let i = 0
  do{
    numero += 2;
    if (numero === i){
    break;
    }
    i++;
    return "Se interrumpió la ejecución"
  } 

  while (i <= 10){
    nuevoArray.push(numero)
  }
  return nuevoArray
  }
 
  

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  do{
    numero += 2;
    i++
  }
  while (i <= 10);

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
