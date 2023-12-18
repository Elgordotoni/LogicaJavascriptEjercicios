function cuadradoPromise(value){
    if(typeof value !== "number" ){
    return Promise.reject(`error, el valor "${value}" ingresado no es un numero`)
    }
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                value,
                result: value * value
            });
        }, 0| Math.random()*1000)
    });
    }
    
    
    
    async function funcionAsyncDeclarada() {
      try {
        console.log("inicio de async function")
       //igualamos una variable a la funcion que queremos utilizar pero antes usamos un await para que no se ejecute t0do al mismo tiempo.
        let obj = await cuadradoPromise(0)
        console.log(`async function: ${obj.value}, ${obj.result}`);
       
          obj = await cuadradoPromise(1)
        console.log(`async function: ${obj.value}, ${obj.result}`)
         
        
          obj = await cuadradoPromise(2)
        console.log(`async function: ${obj.value}, ${obj.result}`)
        
        
      } catch (error) {
        console.error(error)
      }
    }
    
    funcionAsyncDeclarada()




    //Async pero con funcion expresada
 
const funcionAsynExpresada = async () =>{
    
    try {
        console.log("inicio de async function")
       //igualamos una variable a la funcion que queremos utilizar pero antes usamos un await para que no se ejecute t0do al mismo tiempo.
        let obj = await cuadradoPromise(0)
        console.log(`async function: ${obj.value}, ${obj.result}`);
       
          obj = await cuadradoPromise(1)
        console.log(`async function: ${obj.value}, ${obj.result}`)
         
        
          obj = await cuadradoPromise(2)
        console.log(`async function: ${obj.value}, ${obj.result}`)
        
        
      } catch (error) {
        console.error(error)
      }

}

funcionAsynExpresada()
