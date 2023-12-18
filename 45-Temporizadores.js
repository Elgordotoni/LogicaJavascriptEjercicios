/*en esta clase vi temporizadores setTimeout y setInterval , entiendo que son para asignar un intervalo de ejecución, 

setTimeout:
para asignar un intervalo y ejecutar solo una vez.

setInterval:
Para asignar un intervalo y que este se ejecute infinitamente.

dos funciones simples:

```javascript
// Función con setTimeout
function ejecutarUnaVez() {
  setTimeout(function() {
    console.log("Esta función se ejecutó una vez después de un retraso.");
  }, 2000); // 2000 milisegundos (2 segundos)
}

// Función con setInterval
function ejecutarInfinitamente() {
  setInterval(function() {
    console.log("Esta función se ejecuta infinitamente en un intervalo de tiempo.");
  }, 3000); // 3000 milisegundos (3 segundos)
}

// Llamar a las funciones
ejecutarUnaVez();
ejecutarInfinitamente();


La primera función `ejecutarUnaVez` utiliza `setTimeout` para ejecutar su código una vez después de un retraso de 2 segundos. La segunda función `ejecutarInfinitamente` utiliza `setInterval` para ejecutar su código repetidamente en un intervalo de 3 segundos. Ambas funciones imprimirán mensajes diferentes en la consola para diferenciarse.*/