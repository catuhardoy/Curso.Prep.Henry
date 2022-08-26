// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    // en el push entro a el valor del objeto objeto[clave]
  //Escribe tu código aquí
  // var nuevoArray = []
  // for (let clave in objeto){
  //   nuevoArray.push ([clave ,objeto[clave]])
  // }
  // return nuevoArray

  var arr = [1, 2, 3, 4];
  console.log(arr[0]);
  var nuevoArray = [];
  for (let clave in objeto){
    nuevoArray.push([clave, objeto[clave]])   
    // nuevoArray[clave]
  }
return nuevoArray
}
// no entiendo los corchetes de clave


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
// string = "que tul"
  nuevoObjeto = {}

  
  for (let i = 0; i< string.length ; i++){
    var caracter = string[i]; // string[i]

    if (!nuevoObjeto[caracter]) {
      nuevoObjeto[caracter] = 0;
    }

    nuevoObjeto[caracter]++;
  }

  return nuevoObjeto
}

  // }
 




//   nuevoObjeto = {}
//   for (let i = 0; i < string.length; i++){
//     if (!nuevoObjeto[string[i]]){
//       nuevoObjeto[string[i]] = 0
//     }
//     nuevoObjeto[string[i]] += 1
//   }
// return nuevoObjeto
// }


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var minusculas = ""
  var mayusculas = ""
  for (let i =0; i<s.length; i++) {
    if (s[i] === s[i].toUpperCase() ){
      mayusculas = mayusculas + s[i]
    }
    else {
      minusculas = minusculas + s[i]
    }
  }

  return mayusculas + minusculas
}





//   var mayusculas = ""
//   var minusculas = ""
//   for (let i = 0 ; i<s.length; i++){
//     if (s[i] === s[i].toUpperCase()){

//    var mayusculas = mayusculas + s[i]
//   //  el string mayuscula es igual al string vacio mas la letra que le sumamos.
//   } else{ 
//   var minusculas = minusculas + s[i];
//   }
// }
// return mayusculas + minusculas
// }


function asAmirror(str) {
//   //La función recibe una frase. 
//   //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
//   //pero con cada una de sus palabras invertidas, como si fuera un espejo.
//   //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
//   //Escribe tu código aquí
  let palabras = str.split(" ")
  for (let i = 0; i < palabras.length; i++){
    palabras[i] = palabras[i].split("").reverse().join("");
  }

  return palabras.join(" ")
}
  
// }

// function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
//   let palabras = str.split(" ")
//   let ret = []
  
//   for (let i = 0; i < palabras.length; i++){
//     let palabra = palabras[i]
//     let palabraInvertida = ""

//     for (let j = palabra.length - 1 ; j>=0 ; j--){
//       palabraInvertida = palabraInvertida + palabra[j]
//     }

//     ret.push(palabraInvertida)
//   }

//   return ret.join(" ")
  
// }



//  var fraseInvertida = ""
//   for (let i = str.length-1; i>= 0; i--){
//     fraseInvertida += str[i]
//   }
//   return fraseInvertida.split(" ").reverse().join(" ")
// }

  


// no sirve porque push es p arreglo? 
//   var fraseInvertida = []
//   for (let i = 0; i> str.length; i--){
//     fraseInvertida.push(str[i])
//   }
//   return fraseInvertida
// } 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
//   var miNumero = numero.toString()
//   var numeroInvertido = numero.toString().split("").reverse().join("");
  
//     if ( miNumero === numeroInvertido){
//       return "Es capicua"
//     } else{
//       return "No es capicua"
//     }
// }

var string = numero.toString() ;
var numeroInvertido = ""; 
for (var i = string.length -1 ; i>= 0; i--){
  numeroInvertido = numeroInvertido + string [i]
}
if (string === numeroInvertido){
  return "Es capicua"
}else{
  return "No es capicua"
}
}






function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
// var sinAbc = "";
// for (let i = 0; i< cadena.length; i++){
//   if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c"){
//     continue;
//   }else{
//     sinAbc = sinAbc + cadena[i]
//   }
// }
// return sinAbc
// }

var nuevaCadena = ""
for( var i = 0; i< cadena.length; i++){
  if (cadena [i] !== "a" && cadena [i]!== "b" && cadena [i]!== "c"){
  nuevaCadena = nuevaCadena + cadena[i]

  } 
}
return nuevaCadena
}



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a, b){
    if (a.length>b.length){
      return 1;
    }
    if (a.length<b.length){
      return -1
    }
    if (a.length === b.length){
      return 0
    }
  });
  return arr
  
} 


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
// arreglo1 = [4,3,7]
// arreglo2= [2,7,18]
 var arregloDefinitivo = [];

 for (let i = 0; i<arreglo1.length; i++){
   for (let x = 0; x<arreglo2.length; x++){
     if (arreglo1[i] === arreglo2[x]){
       arregloDefinitivo.push(arreglo1[i]);
     }
   }
 }
return arregloDefinitivo

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
