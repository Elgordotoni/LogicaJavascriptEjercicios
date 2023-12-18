/*¡Claro, con gusto! En JavaScript, los proxies son objetos especiales que permiten personalizar el comportamiento fundamental de las operaciones en otro objeto. Pueden ser utilizados para interceptar y personalizar operaciones como lecturas de propiedades, escrituras, invocaciones de funciones y más.

**Teoría:**

- Los proxies se crean mediante el constructor `Proxy`, que toma dos argumentos: el objeto de destino (el objeto que se va a "envolver" con el proxy) y un objeto llamado "manejador" que contiene métodos llamados "trampas" (traps) que especifican cómo se debe manejar cada tipo de operación.

- Hay diversas trampas disponibles, como `get` para acceder a una propiedad, `set` para establecer el valor de una propiedad, `apply` para interceptar llamadas a funciones, entre otros.
*/





// Objeto de destino
let objetivo = {
  nombre: 'Juan',
  edad: 30
};

// Manejador con trampas
let manejador = {
  get: function (obj, propiedad) {
    // Intercepta la lectura de propiedades
    if (propiedad === 'edad') {
      return `La edad es privada`;
    }
    return obj[propiedad];
  },
  set: function (obj, propiedad, valor) {
    // Intercepta la escritura de propiedades
    if (propiedad === 'edad' && typeof valor !== 'number') {
      console.error('La edad debe ser un número');
      return;
    }
    obj[propiedad] = valor;
  }
};

// Crear el proxy
let proxyObjetivo = new Proxy(objetivo, manejador);

// Utilizar el proxy
console.log(proxyObjetivo.nombre); // Devuelve 'Juan'
console.log(proxyObjetivo.edad);   // Devuelve 'La edad es privada'

proxyObjetivo.edad = 25; // Establece la edad a 25
console.log(proxyObjetivo.edad); // Devuelve 'La edad es privada'

proxyObjetivo.edad = 'treinta'; // Muestra un error en la consola
/*

**Explicación:**
- En este ejemplo, el proxy intercepta las operaciones de lectura (`get`) y escritura (`set`) de propiedades.
- Al leer la propiedad `edad`, el proxy devuelve un mensaje personalizado en lugar del valor real.
- Al intentar establecer la propiedad `edad` con un valor no numérico, el proxy muestra un mensaje de error.

**Guardar para estudio:**
- Los proxies son poderosos para modificar el comportamiento de los objetos de manera controlada.
- Puedes personalizar muchas operaciones diferentes utilizando las trampas según tus necesidades.
- Se utilizan comúnmente en patrones de diseño como el patrón de observador, memoización, y más.

Espero que este ejemplo y explicación te sean útiles para estudiar proxies en JavaScript.
*/