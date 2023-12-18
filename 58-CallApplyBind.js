/*

call` en JavaScript:

- Teoría:
  - El método `call` es una función integrada en JavaScript que se utiliza para invocar una función con un valor específico para `this`.
  - Permite pasar argumentos a la función de manera individual.
  
  
- Ejemplo de código:
  */
  function saludar(saludo) {
    console.log(`${saludo}, ${this.nombre}`);
  }

  let persona = { nombre: 'Juan' };
  saludar.call(persona, 'Hola');
  
 /* - En este ejemplo, `saludar.call(persona, 'Hola')` llama a la función `saludar` con `this` establecido en el objeto `persona` y pasa el argumento `'Hola'` a la función.

- **Explicación detallada:**
  1. Definimos una función llamada `saludar` que acepta un parámetro `saludo`.
  2. Creamos un objeto llamado `persona` con una propiedad `nombre`.
  3. Llamamos a la función `saludar` utilizando `call` en el contexto de `persona` y pasamos `'Hola'` como argumento.
  4. Dentro de la función, `${this.nombre}` se evaluará como `persona.nombre`, ya que `this` ahora hace referencia al objeto `persona`.

- **Comparación cotidiana:**
  - Imagina que `saludar` es como un saludo personalizado, y `call` es como decirle a alguien específico que dé ese saludo. En este caso, le estamos diciendo a la función `saludar` que se refiera al objeto `persona` y que use `'Hola'` como saludo.

**Resultado esperado:**
  - La llamada a `saludar.call(persona, 'Hola')` imprimirá en la consola: `Hola, Juan`.

El método `call` es especialmente útil cuando deseas ejecutar una función en un contexto específico y también proporcionarle argumentos de manera individual. ¡Espero que esta explicación aclare tus dudas!*/






""

/*Concepto de `apply` en JavaScript:**

- **Teoría:**
  - `apply` es un método de las funciones en JavaScript que te permite llamar a una función y establecer el valor de `this` (el contexto) al ejecutarla. Además, te permite pasar un array (o un objeto similar a un array) como lista de argumentos para esa función.

- **Ejemplo de código:**
*/
  function sumar(a, b) {
    return a + b;
  }

  let argumentos = [3, 5];
  let resultado = sumar.apply(null, argumentos);
  

/*Explicación detallada:**
  1. Imagina que tienes una función `sumar` que toma dos números y devuelve su suma.
  2. Ahora, tienes un array llamado `argumentos` con los valores `[3, 5]`.
  3. Utilizas `apply` para llamar a la función `sumar`. El primer argumento (`null` en este caso) es el valor que se utilizará como `this` cuando se ejecute la función, pero como no estamos cambiando el contexto, utilizamos `null`.
  4. El segundo argumento de `apply` es el array `argumentos`, que se pasa como lista de argumentos a la función `sumar`.
  5. La función `sumar` se ejecuta con los valores `[3, 5]` como argumentos, y el resultado se almacena en la variable `resultado`.

- **Comparación cotidiana:**
  - Puedes pensar en `apply` como un método que toma una función y un conjunto de argumentos, y luego ejecuta esa función con esos argumentos específicos.

**Resultado esperado:**
  - En este ejemplo, `resultado` contendrá el valor `8`, ya que `3 + 5` es igual a `8`.

En resumen, `apply` es útil cuando tienes una función que espera recibir argumentos de manera individual, pero tienes esos argumentos almacenados en un array. Te permite llamar a la función y pasarle los argumentos desde un array. ¡Espero que esta explicación sea más clara!
*/







/* ahora vamos a hablar de `bind`

**Concepto de `bind` en JavaScript:**

- **Teoría:**
  - `bind` es un método de las funciones en JavaScript que crea una nueva función con un valor específico para `this` y, opcionalmente, algunos argumentos predefinidos.
  - A diferencia de `call` y `apply`, `bind` no ejecuta la función de inmediato; en cambio, devuelve una nueva función que puedes ejecutar más tarde.

- **Ejemplo de código:**
  ```javascript
  function saludar(saludo) {
    console.log(`${saludo}, ${this.nombre}`);
  }
*/
  let persona = { nombre: 'Ana' };
  let saludarPersona = saludar.bind(persona, 'Hola');
  
/*
- **Explicación detallada:**
  1. Tenemos una función `saludar` que toma"" un parámetro `saludo` y muestra un mensaje utilizando ese saludo y el nombre de `this`.
  2. Creamos un objeto llamado `persona` con una propiedad `nombre`.
  3. Utilizamos `bind` para crear una nueva función llamada `saludarPersona`. Le pasamos `persona` como el valor para `this` y `'Hola'` como un argumento predefinido.
  4. Ahora, `saludarPersona` es una función que puedes llamar más adelante.

- **Comparación cotidiana:**
  - Puedes pensar en `bind` como si estuvieras "enlazando" una función a un contexto específico y, opcionalmente, proporcionando algunos valores predefinidos.

**Uso de la nueva función:**
  */
  
  saludarPersona(); // Imprime 'Hola, Ana'
  
/*
En este caso, cuando llamamos a `saludarPersona()`, se ejecuta la función original `saludar` con `this` establecido en `persona` y el saludo predefinido `'Hola'`.

**Consideraciones adicionales:**
- Puedes usar `bind` para crear funciones parcialmente aplicadas, donde algunos argumentos ya están definidos.
- Es comúnmente usado para manejar eventos en el DOM o cuando necesitas fijar un contexto específico para una función que se utilizará más adelante.

En resumen, `bind` te permite crear una nueva función con un valor específico para `this` y, opcionalmente, algunos argumentos predefinidos, sin ejecutar la función de inmediato. ¡Espero que esta explicación sea clara!
*/