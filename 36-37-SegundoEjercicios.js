//5) programa una función que inviertan las palabras de un texto.
/*function palabrasInvertidas(palabra=""){
  if (!palabra) {
   console.warn("el texto esta vacio") 
  } else {
    console.info(palabra.split("").reverse().join(""))//split con comillas vacias separa caracter por carácter en un arreglo, reverse lo invierte, join con comillas vacias lo vuelve cadena de texto nuevamente. 
  }
}
palabrasInvertidas()
palabrasInvertidas("Hola mani")

//ahora con expresada y ternario

const invertirPalabras = (cadena="")=>
(!cadena)
?console.warn("no ingresaste texto")
:console.info(cadena.split("").reverse().join(""))

invertirPalabras()
invertirPalabras("Hola Mundo")
*/





//6)programa una función para contar el numero de veces que se repite una palabra en una cadena de texto larga.

/*



const filtroCadena = (cadena = "", palabra = "") => {
  if (!cadena && !palabra) {
    console.warn("no ingresaste nada");
    return;
  }
  if (!palabra) {
    console.warn("no ingresaste palabra");
    return;
  }
  if (!cadena) {
    console.warn("no ingresaste texto");
    return;
  } 

  let i = 0;
  let contador = 0;
  while (i !== -1) {
    i = cadena.indexOf(palabra, i);
      if(i===0){
      return console.info("la palabra no se encuentra en el texto")
    }
    if (i !== -1) {
      i++;
      contador++;
    }
   
  }

  console.info(`la palabra ${palabra} se repite ${contador} veces`);
};

filtroCadena();
filtroCadena("","Hola")
filtroCadena("Hola Mundo","")
filtroCadena("Hola Mundo","hola")


*/





//practica que se me ocurrió: devolver otro mensaje en caso de no encontrar coincidencia

const filtroCadena = (cadena = "", palabra = "") => {
    if (!cadena && !palabra) {
      console.warn("no ingresaste nada");
      return;
    }
    if (!palabra) {
      console.warn("no ingresaste palabra");
      return;
    }
    if (!cadena) {
      console.warn("no ingresaste texto");
      return;
    }
  
    let i = 0;
    let contador = 0;
    while (i !== -1) {
      i = cadena.indexOf(palabra, i);
      if (i !== -1) {
        i++;
        contador++;
      }
    }
  
    if (contador === 0) {
      console.info("la palabra no se encuentra en el texto");
    } else {
      console.info(`la palabra ${palabra} se repite ${contador} veces`);
    }
  };
  
  /*filtroCadena();
  filtroCadena("", "Hola");
  filtroCadena("Hola Mundo", "");
  filtroCadena("Hola Mundo", "chau");
  filtroCadena("Hola mundo mundo mundo" 
  ,"mundo")*/
  
  
  
  
  
  
  
  //7)programa una función que valide si una palabra o frase es palindromo(que se lee igual al derecho que al reves).
  const palabraPalindroma = (palabra="")=>{
    if (!palabra)
    return console.warn("no ingresaste cadena");
    
    palabra = palabra.toLowerCase()
    let alReves  = palabra.split("").reverse().join("")
    
    return(palabra===alReves)
      ?console.info(`la palabra ${palabra} es palíndroma, al reves seria ${alReves}`)
      :console.info(`la palabra ${palabra} no es palindroma por que al reves seria ${alReves}`)
  }
  
  //palabraPalindroma("Hola")
  //palabraPalindroma("salas")
  //palabraPalindroma("Salas")
  //palabraPalindroma("salas salas")
  
  
  
  
  
  
  
  //8)programa una función que elimine cierto patron de caracteres de un texto dado, por ej ("xzy1","xzy2",(xzy3)) devolvera 1,2,3
  
  const patronReplace = (texto="",patron="" )=>
  (!texto)
  ?console.warn("no ingresaste texto")
  :(!patron)
  ?console.warn("no ingresaste patron")
  :console.info(texto.replace(new RegExp(patron,"ig"),""));
  
  //patronReplace()
  //patronReplace("xyz1,xyz2,xyz3","xyz")
  
  
  
  
  
  
  
  //9)programa una funcion que obtenga un número aleatorio entre 500 y 600
  const numeroAleatorio = ()=>console.info(Math.round(Math.random()*100+500))
  
  
  //numeroAleatorio()
  
  //10)programa una funcion que verifica si un numero es capicua o no.
  
  /*const numeroCapicua = (numero = 0)=> {
    if (!numero) return console.warn("no ingresaste numero")
    
    if (typeof numero !== "number") return console.error(`el valor ingresado ${numero} no es un numero`)
    
    numero = numero.toString()
    let alReves = numero.split("").reverse().join("")
    
  return(numero===alReves)
  ? console.log(`es capicua, ${numero} al reves es ${alReves}`)
  : console.log(`no es capicua, ${numero} al reves es ${alReves}`)
  }
  numeroCapicua()
  numeroCapicua("1")
  numeroCapicua(121)
  numeroCapicua(2000)
  */
  
  
  
  
  
  
  //11)programa una función que calcule el factorial de un numero()
  
  const factoRial = (numero = undefined)=>{
    if(numero === undefined) return console.warn("no ingresaste datos")
    if(typeof numero!=="number") return console.warn("el dato ingresado no es un numero")
    if(numero===0)return console.error("el numero no puede ser 0")
    if (Math.sign(numero)===-1) return console.error("el numero no puede ser negagivo")
   
   let factorial = 1
   
    for (let i = numero; i > 1; i--) {
      factorial *= i //esto es igual a factorial = factorial * i
    }
    return console.info(`el numero factorial de ${numero} es ${factorial}`)
  }
  
  
  factoRial()
  factoRial("138")
  factoRial(0)
  factoRial(-5)
  factoRial(6)