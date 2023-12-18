// Los `WeakSet` y `WeakMap` son estructuras de datos en JavaScript diseñadas para almacenar colecciones de objetos débilmente ligados, lo que significa que no impiden que los objetos que contienen sean recolectados por el recolector de basura si no hay otras referencias a esos objetos.

//1. WeakSet:**

//Explicación teórica:**
//  - Un `WeakSet` es una colección de objetos. A diferencia de un `Set`, solo puede contener objetos y no valores primitivos.
//  - Los objetos dentro de un `WeakSet` están débilmente ligados, lo que significa que no evitan que esos objetos sean eliminados por el recolector de basura si no hay otras referencias a ellos.

//- **Ejemplo de código:**
//  ```javascript
  let weakSet = new WeakSet();
  
  let obj1 = { mensaje: 'Hola' };
  let obj2 = { mensaje: 'Mundo' };

  weakSet.add(obj1);
  weakSet.add(obj2);

  console.log(weakSet.has(obj1)); // Devuelve true
  console.log(weakSet.has(obj2)); // Devuelve true

  // Eliminar objeto del WeakSet
  weakSet.delete(obj1);

  console.log(weakSet.has(obj1)); // Devuelve false
//  ```

//- **Comparación cotidiana:**
 //imagina que tienes una lista de recordatorios importantes y cada recordatorio tiene un objeto asociado. Si decides eliminar un recordatorio, este también eliminará la asociación con el objeto correspondiente.

//**2. WeakMap:**

//- **Explicación teórica:**
//  - Similar a `WeakSet`, un `WeakMap` es una colección de pares clave-valor donde las claves son objetos y los valores pueden ser cualquier cosa.
//  - Las claves en un `WeakMap` también están débilmente ligadas.

//- **Ejemplo de código:**
//  ```javascript
  let weakMap = new WeakMap();
  
  let clave1 = { id: 1 };
  let valor1 = 'Información importante';

  weakMap.set(clave1, valor1);

  console.log(weakMap.get(clave1)); // Devuelve 'Información importante'

  // Eliminar clave del WeakMap
  weakMap.delete(clave1);

  console.log(weakMap.get(clave1)); // Devuelve undefined
//  ```

//- **Comparación cotidiana:**
//  - Imagina un mapa donde las llaves son objetos y los valores son detalles específicos asociados a esos objetos. Si decides eliminar la entrada del mapa para un objeto, también eliminarás la información asociada.






//diferencias con map y set
/*
¡Claro! Vamos a utilizar ejemplos más sencillos para ilustrar las diferencias.

### `Map` vs. `WeakMap`:

#### Map:
```javascript
// Usando Map
const myMap = new Map();

// Creando un objeto como clave
const keyObj = { name: "John" };

myMap.set(keyObj, "Some value");

// La referencia a keyObj se mantiene, incluso si se elimina la única referencia externa
console.log(myMap.get(keyObj)); // Output: Some value
```

#### WeakMap:
```javascript
// Usando WeakMap
const myWeakMap = new WeakMap();

// Creando un objeto como clave
const weakKeyObj = { name: "Jane" };

myWeakMap.set(weakKeyObj, "Another value");

// La referencia a weakKeyObj puede ser recolectada si no hay otras referencias externas
console.log(myWeakMap.get(weakKeyObj)); // Output: Another value
```

### `Set` vs. `WeakSet`:

#### Set:
```javascript
// Usando Set
const mySet = new Set();

// Creando objetos
const obj1 = { id: 1 };
const obj2 = { id: 2 };

mySet.add(obj1);
mySet.add(obj2);

// Las referencias a obj1 y obj2 se mantienen incluso si se eliminan las referencias externas
console.log(mySet.has(obj1)); // Output: true
```

#### WeakSet:
```javascript
// Usando WeakSet
const myWeakSet = new WeakSet();

// Creando objetos
const weakObj1 = { id: 3 };
const weakObj2 = { id: 4 };

myWeakSet.add(weakObj1);
myWeakSet.add(weakObj2);

// La referencia a weakObj1 podría ser recolectada si no hay otras referencias externas
console.log(myWeakSet.has(weakObj1)); // Output: true
```

En resumen, los "Weak" (débiles) permiten que las referencias a los objetos sean recolectadas si no hay otras referencias externas, lo que puede ser útil para evitar posibles problemas de retención de memoria en ciertos escenarios.
*/