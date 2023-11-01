//12)programa una funcion que determine si un número es primo o no(aquel que solo es  divisible por si mismo)


const numerosPrimos = (numero = undefined)=>{
    //validaciones
    if (numero === undefined)
      return console.warn('no ingresaste datos')
    
    
    if (typeof numero !== "number") 
      return console.warn("no ingresaste un valor numerico")
      
      if (numero === 0)
      return console.warn("el numero ingresado no puede ser 0")
        
      if (Math.sign(numero)===-1) 
      return console.error("no ingresaste un numero positivo")
      
  
   
    let divisible = false
    for (var i = 2; i < numero; i++) {
      if ((numero % i) ===0) {
       divisible = true 
       break;
      }
    }
    return(divisible)
      ? console.info(`el numero ${numero} NO es un numero primo`)
      : console.info(`el numero ${numero} SI es un numero primo`)
  }
  
  /*
  numerosPrimos()
  numerosPrimos("1")
  numerosPrimos(0)
  numerosPrimos(-1)
  numerosPrimos(6)
  */
  
  
  
  
  
  
  
  
  
  //13)programa una funcion que determine si un numero es par o impar.
  
  const parImpar = (number = undefined)=>{
    if (number===undefined) 
    return console.warn("no ingresaste numero")
    if(number===0)
    return console.warn("el numero 0 no es valido")
    if (typeof(number)!== "number") 
     return console.warn("el tipo de dato ingresado no es un numero")
    if (Math.sign(number)===-1) 
    return console.warn("no se permite numeros negativos")
    
    if (number % 2 === 0) {
     console.info(`el numero ${number} es PAR`)
    } else{
      console.info(`el numero ${number} es IMPAR`)
    }
  }
  /*
  parImpar()
  parImpar("")
  parImpar(-1)
  parImpar(7)
  parImpar(8)
  
  */
  
  
  //14) programa una funcion para convertir de grados celsius a Farenheit.
  const celsiusaFarenheit = (numero=undefined, dato=undefined)=>{
    
    if (numero===undefined)
    return console.info("el valor de temperatura no fue ingresado ")
    
    if(dato===undefined)
    return console.info("el valor de tipo de medicion no fue ingresado")
    
    if(typeof(numero)!=="number")
      console.warn("el dato ingresado no es un numero")
    
    if (typeof(dato)!=="string"||!/C|F/.test(dato))
    return console.warn("valor de unidad no reconocido")
    
    if (dato==="C") {
      return console.info(`${numero}° grados, son ${Math.round((numero*(9/5))+32)}F°`)
    } else if(dato==="F"){
      return console.info(`${numero}° farenheits, son ${Math.round(((numero-32)*(5/9)))}C°`)
    }
  }
  
  //celsiusaFarenheit("cadena")
  celsiusaFarenheit(5,"C")
  celsiusaFarenheit(32,"F")
  
  
  
  
  
  
  
  //15) programa una función para convertir numeros de base binaria a decimal  viceversa. pe miFuncion(100,2) devolvera 4, base 10.
  
  const funcionBinaria = (numero = undefined, base = undefined)=>{
  if (base===2) {
    return console.info(`${numero} base ${base} es = a ${parseInt(numero,base)} base 10`)
  } else if (base===10) {
     return console.info(`${numero} base ${base} es = a ${(numero.toString(2))} base 2`) 
  } else {
  return console.error("el tipo de base no es valido")  
  }
  }
  funcionBinaria(100,2)
  funcionBinaria(100,10)
  
  
  
  
  
  
  
  
  //16) programa una función que devuelva el monto final despues de aplicar un descuento a una cantidad dada. pe miFuncion(1000,20) devolvera 800
  
  const aplicarDescuento = (numero="undefined", descuento = 0)=>
  
  console.info(`${numero} menos el ${descuento} % es = ${numero - ((numero * descuento)/100
  )}`)
  
  aplicarDescuento(30815,15)
  
  
  
  
  
  
  
  //  17)programa una funcion que dada una fecha valida determine cuantos años pasaron al dia de hoy.
  
  const restaFecha = (fecha= undefined)=>{
  if(fecha === undefined)  return console.warn(`no ingresaste la fecha `)
  
  if(!(fecha instanceof Date)) return console.error('el valor que ingresaste no es una fecha valida')
  
  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
  
  aniosEnMs = 1000 * 60 * 60 * 24 *365
  aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMs)
  
  return Math.sign(aniosHumanos)===-1
  ? console.info(`faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
  :Math.sign(aniosHumanos)===1
  ? console.info(`Han pasado ${Math.abs(aniosHumanos)} desde la fecha ${fecha.getFullYear()}`)
  :console.info(`estamos en el año actual ${fecha.getFullYear()}`)
  }
  restaFecha()
  restaFecha(false)
  restaFecha(new Date(1995,8,8))