/*
un `Set` es una estructura de datos que te permite almacenar elementos únicos, lo que significa que no puede haber duplicados en un conjunto. Aquí tienes un ejemplo básico:

*/
// Crear un Set
let miSet = new Set();

// Añadir elementos al Set
miSet.add("Hola");
miSet.add("Mundo");
miSet.add("JavaScript");

// Intentar agregar un elemento duplicado
miSet.add("Hola"); // Esto no se añadirá porque "Hola" ya está en el Set

// Tamaño del Set
console.log("Tamaño del Set:", miSet.size); // Salida: 3

// Verificar si un elemento está en el Set
console.log("¿JavaScript está en el Set?", miSet.has("JavaScript")); // Salida: true

// Eliminar un elemento del Set
miSet.delete("Mundo");

// Iterar a través de los elementos del Set
console.log("Elementos del Set:");
miSet.forEach(elemento => console.log( elemento));



/*
En este ejemplo, creamos un `Set` llamado `miSet`, añadimos algunos elementos, intentamos añadir un duplicado (que no se añade), verificamos la existencia de un elemento, eliminamos un elemento y finalmente iteramos a través de los elementos del `Set`. Los conjuntos son útiles cuando necesitas almacenar elementos únicos y no te importa el orden en el que se almacenan.
*/
