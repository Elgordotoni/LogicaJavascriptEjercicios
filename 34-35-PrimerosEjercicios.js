/*

//1)crear una función que devuelva la cantidad de caracteres que tiene la cadena de texto ingresada.


//de manera DECLARADA 
function contarCaracteres(cadena = "") {
  if(!cadena){
   console.warn("cadena esta vacía") 
  }else{
   console.log(`la cadena "${cadena}" tiene "${cadena.length}"de caracteres`) 
  }
}
  contarCaracteres("hola bb knhgnk")
  //de nuevo para practicar
 
 function caracterContado(cadena = ""){
   if (!cadena) {
     console.warn("la cadena se encuentra vacía")
   } else {
    console.log(`la cadena  "${cadena}"contiene "${cadena.length}" de caracteres`)
   }
 }
 caracterContado()
 caracterContado("Hola")
 
 //de manera EXPRESADA con operador ternario
 const contarC = (cadena = "") =>(!cadena)
 ?console.warn("cadena esta vacía")
 :console.info(`la cadena de la función expresada "${cadena}" contiene "${cadena.length}" de caracteres`)
 contarC()
 contarC("sogksialdnfndlslsm")
 
//de nuevo para practicar
const contarCadena2 = (cadena = "") =>
(!cadena)
?console.warn("cadena esta vaciaaa")
:console.info(`la cadena "${cadena} cuenta con "${cadena.length}" caracteres`)

contarCadena2("13fjdjsknffnxidnddn")
contarCadena2()






//EJERCICIO DOS''
//2)crear una funcion que te devuelva el texto recortado segun el numero de caracteres indicados, pe. miFuncion("hola mundo", 4) Devolvera hola.

function numeroRecortado(corte = "", longitud = undefined){
  if (!corte) {
   console.warn("cadena vacia") 
  } else {
   console.info(corte.slice(0,longitud)) 
  }
}

numeroRecortado("Hola mundo", 6)




//ahora con expresada y ternario

const cualQuiera = (inicio="",largo=undefined)=>
(!inicio)
?console.warn("cadena vacía")
:console.info(inicio.slice(0, largo))

cualQuiera("Lospiojos",1)
cualQuiera()






//ahora igual pero concatenando otro ternario para agregar la condición que devuelve un mensaje si no ingresaste la LONGITUD es decir el segundo valor.

const recorTando = (cadena = "",longitud = undefined)=>
(!cadena)
?console.warn("no ingresaste texto")
:(longitud===undefined)
?console.warn("no ingresaste la longitud")
:console.info(cadena.slice(0,longitud))

recorTando()
recorTando("Hola mundo")
recorTando("Hola mundo",6)


*/




//3)programa una funcion que dada una string te devuelva un array de textos separadoa por cierto caracter,pe. miFuncion("hola que tal") me devolvera ["hola","que","tal"]

function palabrasArray(cadena ="", caracter = undefined){
    if (!cadena) {
      console.warn("no ingresaste cadena de texto")
    } else {
     if (caracter===undefined) {
       console.warn("no ingresaste el carácter separador")
     } else {
       console.info(cadena.split(caracter))
     } 
    }
  }
  palabrasArray("hola mundo bienvenido", " ")
  
  //ahora con expresada y operador terrario
  
  const funcionSeparar = (cadena="", valor=undefined)=>
  (!cadena)
  ?console.warn("no ingresaste cadena")
  :(valor===undefined)
  ?console.warn("no ingresaste carácter")
  :console.info(cadena.split(valor))
  
  funcionSeparar("Hola como estas? espero que bien"," ")
  
  //4)programa una función que repita el texto x veces, pe. miFuncion("Hola Mundo",3) devolverá Hola Mundo Hola Mundo Hola Mundo.
  
  const holaMundo = (texto="", cantidad= undefined) =>{
  if (!texto) return console.warn("no ingresaste texto")  
  if (cantidad===undefined) {
  console.warn("no ingresaste numero")  
  }//se pueden quitar las llaves del if
  if (Math.sign(cantidad)===-1) {
    console.warn("ingresaste un numero que no es valido")
  }
  if(cantidad===0){
    console.error("el numero que ingresaste es 0")
  }
  for (let i = 1; i <= cantidad; i++) {
    console.info(`${texto}, ${i}`)
  }
  }
  holaMundo("Hola mundo",3)
  holaMundo("hola mundo",0)
  holaMundo("",1)
  holaMundo("Hola mundo", -2)