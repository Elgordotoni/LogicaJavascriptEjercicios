//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const cuentaVocalesConsonantes = (cadena="")=>{
    //validaciones
    
    //logica
    let consonantes = 0
    let vocales = 0
    cadena = cadena.toLocaleLowerCase()
    
    for(letra of cadena){
      if (/[aeiou]/.test(letra)) {
        vocales++
      }
      if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {
        consonantes++
      }
    }
      return console.info({
        cadena,
        consonantes,
        vocales
      })
    
  }
  /*
  cuentaVocalesConsonantes("Hola mundo como estas?")
  
  */
  
  
  
  
  
  
  //19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
  
  
  const validarNombre = (nombre = "") => {
    if (!nombre) {
      return console.warn(`No ingresaste nombre`);
    }
    if (typeof nombre !== "string") {
      return console.error(`El valor "${nombre}" ingresado NO es una cadena de texto`);
    }
    
    let expReg = /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);
    
    return expReg
      ? console.info(`${nombre} es un nombre válido`)
      : console.warn(`${nombre} NO es un nombre válido`);
  };
  
  //validarNombre("Gaston de Michele");
  
  
  
  
  
  //20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
  
  const validarEmail = (email = "") => {
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)@[a-z0-9-]+(\.[a-z0-9-]+)(\.[a-z]{2,15})/i.test(email);
    return (expReg)
    ? console.info(`${email} es un email valido`)
    : console.info(`${email} NO es un email valido`)
  }
  
  //validarEmail("gaston")
  //validarEmail("gaston_dm_22@hotmail.com")
  
  
  
  
  
  //ejercicio de práctica con 19-20
  const validarEnParametro = (mail = "", expresion = undefined) =>{
    //validaciones:
    
  //validacion importante
  if (!(expresión instanceof RegExp)) {
   console.warn('no ingresaste una expresión regular')
  }
  expReg = expresion.test(mail)
  
  return(expReg)
  ? console.info(`${mail} es un email valido`)
  : console.info(`${mail} NO es un email valido`)
  }
  /*
  validarEnParametro(`gaston`, /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/g)
  */
  
  //21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe.mi_funcion([1, 4, 5]) devolverá[1, 16, 25].
  
  const nuevoArreglo = (arr = undefined)=>{
    if (arr===undefined) {
      return console.warn("No ingresaste arreglo")
    }
      if (!(arr instanceof Array)) {
        return console.warn(`Lo que ingrsaste no es un arreglo`)
    }
    if (arr.length===0) {
     return console.error(`No ingresaste un numero`)
    }
    for(let num of arr){
      if(typeof(num)!== "number"){
        return console.info(`no ingresaste un numero como arreglo`)
      }
    }
    const newArr = arr.map( el => el * el)
    return console.info(`Arreglo original :${arr},
  Arreglo elevado al cuadrado:${newArr}`)
  }
  //nuevoArreglo()
  //nuevoArreglo("numero")
  //nuevoArreglo([])
  //nuevoArreglo([1,2,3])
  
  
  
  
  
  /*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe.miFuncion([1, 4, 5, 99, -60]) devolverá[99, -60].
  
  
  const nuevoArreglo2 = (arr = undefined) => {
    if (arr === undefined) {
      return console.warn("No ingresaste arreglo");
    }
    if (!(arr instanceof Array)) {
      return console.warn("Lo que ingresaste no es un arreglo");
    }
    if (arr.length === 0) {
      return console.error("No ingresaste un número");
    }
    for (let num of arr) {
      if (typeof num !== "number") {
        return console.info("No ingresaste un número como arreglo");
      }
    }
    return console.log(`Arreglo original: [${arr}]\nArreglo con MAYOR valor: ${Math.max(...arr)}\nArreglo con MENOR valor: ${Math.min(...arr)}`);
  };
  
  nuevoArreglo2([10, 25, 150, 20, 5, 3]);
  
  */
  
  
  
  
  //23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe.miFuncion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) devolverá { pares: [2, 4, 6, 8, 0], impares: [1, 3, 5, 7, 9] }.
  
  const numeros = (arr = undefined)=>{;
    if (arr === undefined) {
      return console.warn("No ingresaste arreglo");
    }
    if (!(arr instanceof Array)) {
      return console.warn("Lo que ingresaste no es un arreglo");
    }
    if (arr.length === 0) {
      return console.error("No ingresaste un número");
    }
    for (let num of arr) {
      if (typeof num !== "number") {
        return console.info("No ingresaste un número como arreglo");
      }
    }
    
  // Utilizando una arrow function dentro del filter para condicionar el resultado en el console.log
  return console.info({
  par: arr.filter( num => num % 2 === 0)
  })
  }
  numeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  
  
  
  
  //La expresión regular que uso para el email en este video / [a - z0 - 9] + (\.[_a - z0 - 9] + ) * @[a - z0 - 9 - ] + (\.[a - z0 - 9 - ] + ) * (\.[a - z] { 2, 15 }) / i
  
  
  
  function factorial(x) {
    // Caso base: si x es 0 o 1, el factorial es 1.
    if (x === 0 || x === 1) {
      return 1;
    } else {
      // Caso recursivo: calcula (x-1)! y luego multiplica por x.
      return x * factorial(x - 1);
    }
  }
  
  // Ejemplo de uso:
  const numero = 7;
  const resultado = factorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
  
  
  class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.hijos = [];
    }
  
    agregarHijo(nodoHijo) {
      this.hijos.push(nodoHijo);
    }
  }
  
  // Crear nodos
  const raiz = new Nodo("A");
  const hijo1 = new Nodo("B");
  const hijo2 = new Nodo("C");
  
  // Conectar nodos
  raiz.agregarHijo(hijo1);
  raiz.agregarHijo(hijo2);
  
  console.log(raiz);
  
  
  
  
  // Define la función de ordenamiento por inserción
  function insercion(A) {
    for (let i = 1; i < A.length; i++) {
      let valor = A[i];
      let j = i - 1;
  
      while (j >= 0 && A[j] > valor) {
        A[j + 1] = A[j];
        j--;
      }
  
      A[j + 1] = valor;
    }
  
    // Devuelve la lista ordenada
    return A;
  }
  
  // Función para solicitar al usuario una lista de números separados por comas y llamar a la función de ordenamiento
  function ordenarInsercionUsuario() {
    // Pide al usuario que ingrese una lista de números separados por comas
    let entradaUsuario = prompt("Ingresa una lista de números separados por comas:");
  
    // Convierte la entrada del usuario en un arreglo de números
    let miLista = entradaUsuario.split(",").map(Number);
  
    // Llama a la función insercion para ordenar la lista ingresada por el usuario
    let listaOrdenada = insercion(miLista);
  
    // Imprime la lista ordenada
    console.log("Lista ordenada:", listaOrdenada);
  }
  
  // El usuario llama a la función ordenarInsercionUsuario para iniciar el proceso
  ordenarInsercionUsuario();