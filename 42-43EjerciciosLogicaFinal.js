/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const funcionConversora = (arr = undefined) =>{
    console.info({
      arr,
      ascendente: arr.map(el => el).sort((a,b)=>(a-b)),
      descendente: arr.map(el => el).sort((a,b)=>(b-a))
     } )
  }
  
  funcionConversora([1,5,7,6,5,9])
  
  
  
  
  
  /*
  25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
  */
  
  
  /*práctica antes de hacer el ejercicio 
  const frutas = ["manzana", "plátano", "naranja", "pera", "uva"];
  
  const frutasConIndice = frutas.filter((fruta, index, arreglo) => {
    console.log(`Índice: ${index}, Fruta: ${fruta}`);
    console.log(arreglo)
    return fruta.length > 5;
  });
  
  console.log(frutasConIndice);
  
  
  
  
  //practica para entender mejor el tema
  const frutasConIndice2 = frutas.filter((fruta, index) => {
    return fruta.length > 5;
  });
  console.log(frutasConIndice2)
  
  */
  /*
  
  const quitarDuplicados = (arr = undefined)=>{
  return console.info({
    original: arr,
    sinDuplicados: arr.filter((value,index,self) => self.indexOf(value)=== index)
  })
  console.log(index)
  }
  quitarDuplicados(["x",10,"10",10,2,true,true,"x"])
  /*
  
  */
  
  //función tabla de multiplicar
  // Declaración de variables
  let tablaNum;
  let tablaHasta;
  let contador = 1;
  let multiplicacion;
  
  // Solicitar al usuario el número para la tabla de multiplicación
  /*console.log("Ingrese el número del cual desea conocer la tabla de multiplicación:");
  tablaNum = parseInt(prompt("Número:"));
  
  // Solicitar al usuario el número hasta el cual desea conocer la tabla
  console.log("Ingrese el número hasta donde desea conocer la tabla:");
  tablaHasta = parseInt(prompt("Número:"));
  
  while (contador <= tablaHasta) {
      multiplicacion = tablaNum * contador;
      console.log(tablaNum + " * " + contador + " = " + multiplicacion);
      contador++;
  }
  */
  
  
  /*26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
  */
  /*
  //antes de ecmascript
  let acumulador = 0;
  let promedio;
  let numero;
  
  for (let i = 1; i <= 4; i++) {
      numero = parseFloat(prompt("Ingrese el número: " + i));
      acumulador += numero;
  }
  
  promedio = acumulador / 4;
  console.log("El promedio de los números ingresados es: " + promedio);
  
  */
  
  
  
  //con metodología mas nueva.
  
  const promedioMetodo = (arr = undefined)=>{
    //primero hirian las validaciones 
    
    //codigo
    return console.info(
    arr.reduce((total,numero,index,arr)=>{
      total+=numero
      if(index===arr.length-1){
        return `el numero promedio de ${arr.join("+")} es ${total/arr.length} `
    } else{
       return total
      
    }
     } ))
  
  }
  
  promedioMetodo([1,7,3,10,5,6,7,8])