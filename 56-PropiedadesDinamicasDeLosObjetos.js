//En JavaScript, puedes agregar, modificar y eliminar propiedades de objetos de forma dinámica. Esto es posible gracias a la naturaleza flexible de los objetos en este lenguaje.

/**Teoría:**

- Las propiedades en JavaScript pueden ser definidas y manipuladas en tiempo de ejecución.
- Puedes agregar una nueva propiedad a un objeto simplemente asignándole un valor.
- Si intentas acceder a una propiedad que no existe, se devuelve `undefined`.
- También puedes modificar el valor de una propiedad existente y eliminar propiedades.
*/
//**Ejemplo de código:**


// Objeto con propiedades iniciales
let persona = {
  nombre: 'Juan',
  edad: 25
};

// Agregar una nueva propiedad
persona.ciudad = 'Ciudad de Ejemplo';

// Modificar el valor de una propiedad existente
persona.edad = 26;

// Acceder a una propiedad
console.log(persona.nombre); // Devuelve 'Juan'
console.log(persona.ciudad); // Devuelve 'Ciudad de Ejemplo'

// Eliminar una propiedad
delete persona.edad;

// Intentar acceder a la propiedad eliminada
console.log(persona.edad); // Devuelve undefined


/*comparación cotidiana:**

- Imagina un formulario en línea donde los usuarios pueden ingresar información. En un principio, el formulario puede tener campos básicos como "Nombre" y "Edad". Sin embargo, a medida que el usuario interactúa más, podrías querer agregar dinámicamente campos adicionales, como "Ciudad", para almacenar información adicional.

**Consejos adicionales:**

- Ten en cuenta que cuando usas propiedades dinámicas, es importante manejarlas con cuidado y documentar claramente su propósito.
- Si bien JavaScript te permite ser flexible con las propiedades, es recomendable tener un diseño claro y consistente en tu código.

Esta flexibilidad en la manipulación de propiedades te permite adaptar dinámicamente la estructura de tus objetos según las necesidades de tu aplicación. ¡Espero que este ejemplo y explicación te sean útiles!
*/