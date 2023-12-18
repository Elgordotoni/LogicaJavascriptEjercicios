/*
**Generators en JavaScript:**

- **Definición:**
  - Los generadores son funciones especiales que pueden ser pausadas y luego resumidas.
  - Se crean utilizando la palabra clave `function*` y contienen declaraciones `yield` que especifican los valores a ser generados.

- **Pausa y Resumen:**
  - Los generadores permiten pausar su ejecución mediante `yield`, y luego se pueden reanudar desde el último punto de pausa.
  - Esto facilita la implementación de iteradores y simplifica el manejo de operaciones asíncronas.

- **Método `next()`:**
  - Los generadores devuelven un objeto con las propiedades `value` y `done` al llamar al método `next()`.
  - `value` contiene el valor producido por `yield`, y `done` indica si la función generadora ha completado su ejecución.

Ejemplo de un generador simple:
```javascript
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = simpleGenerator();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }
```

- **Uso en Iteración:**
  - Los generadores son útiles para la creación de iteradores de manera más concisa.
  - Se pueden utilizar en bucles `for...of` para simplificar la lógica de iteración.

Ejemplo de iteración con generador:
```javascript
function* rangeGenerator(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (const num of rangeGenerator(1, 5)) {
  console.log(num);
}
// Output: 1, 2, 3, 4, 5
```

En resumen, los generadores en JavaScript son funciones especiales que facilitan la creación de iteradores y el manejo de operaciones asíncronas, permitiendo pausar y resumir la ejecución de la función.