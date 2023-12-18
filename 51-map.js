
//El objeto Map es una estructura de datos que asocia claves con valores, y puede ser utilizado para almacenar y recuperar información de manera eficiente. Aquí hay un ejemplo de cómo puedes usar `new Map`:


// Crear un nuevo objeto Map
const miMapa = new Map();

// Agregar elementos al Map
miMapa.set('clave1', 'valor1');
miMapa.set('clave2', 'valor2');

// Obtener valores del Map
console.log(miMapa.get('clave1'));  // Salida: valor1
console.log(miMapa.get('clave2'));  // Salida: valor2

// Verificar si una clave existe en el Map
console.log(miMapa.has('clave1'));  // Salida: true
console.log(miMapa.has('clave3'));  // Salida: false

// Tamaño del Map
console.log(miMapa.size);  // Salida: 2

// Eliminar un elemento del Map
miMapa.delete('clave1');

// Iterar sobre las claves y valores del Map
miMapa.forEach((valor, clave) => {
  console.log(clave, valor);
});

// Limpiar todos los elementos del Map
miMapa.clear();


//En este ejemplo, `new Map()` se utiliza para crear una nueva instancia del objeto Map. Luego, mediante métodos como `set`, `get`, `has`, `delete`, `size`, y `forEach`, puedes interactuar con los datos almacenados en el Map. Este objeto es útil cuando necesitas asociar datos de manera estructurada utilizando claves y valores.