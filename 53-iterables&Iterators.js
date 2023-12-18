/* iterables e iterators en JavaScript:

- **Iterable:**
  - Un objeto es iterable si puede ser iterado, es decir, si se puede recorrer o visitar sus elementos uno por uno.
  - Los objetos iterables en JavaScript incluyen Arrays, Strings, Mapas, Sets, entre otros.
  - Se puede iterar sobre un iterable utilizando un bucle `for...of` o el método `forEach()`.

- **Iterator:**
  - Un objeto que implementa el protocolo del iterador.
  - Debe tener un método llamado `next()` que devuelve un objeto con las propiedades `value` (valor actual) y `done` (indicador de finalización).
  - Cuando `done` es `true`, significa que la iteración ha terminado; de lo contrario, `value` contiene el siguiente elemento en la secuencia.''

Ejemplo de iterable (Array):
```javascript
const myArray = [1, 2, 3];

// Iterando con for...of
for (const element of myArray) {
  console.log(element);
}

// También se puede utilizar forEach
myArray.forEach(element => console.log(element));
```

Ejemplo de iterator personalizado:
```javascript
const myIterator = {
  data: [1, 2, 3],
  index: 0,
  next: function() {
    return this.index < this.data.length ?
      { value: this.data[this.index++], done: false } :
      { done: true };
  }
};

// Utilizando el iterator personalizado
console.log(myIterator.next()); // { value: 1, done: false }
console.log(myIterator.next()); // { value: 2, done: false }
console.log(myIterator.next()); // { value: 3, done: false }
console.log(myIterator.next()); // { done: true }
```

//En resumen, un iterable es un objeto que puede ser recorrido, y un iterator es un objeto que define cómo se realiza ese recorrido.