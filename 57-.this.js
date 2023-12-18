//El concepto de "scope" (ámbito) en JavaScript se refiere a la accesibilidad y visibilidad de variables en una porción específica de código. El scope determina dónde una variable o función es declarada y dónde puede ser referenciada.

//Hay dos tipos principales de scope en JavaScript:

/*1. **Global Scope (Ámbito global):**
   - Las variables declaradas fuera de cualquier función o bloque tienen un ámbito global.
   - Estas variables pueden ser accedidas desde cualquier parte del código, ya sea dentro de funciones, bloques, o en el ámbito global mismo.*/

   
   let variableGlobal = 'Soy global';

   function ejemplo() {
     console.log(variableGlobal); // Puedo acceder a la variable global
   }
   
   
   /*

2. **Local Scope (Ámbito local):**
   - Las variables declaradas dentro de una función o bloque tienen un ámbito local.
   - Estas variables solo pueden ser accedidas dentro de la función o bloque donde fueron declaradas.
*/
  //ej:
   function ejemplo() {
     let variableLocal = 'Soy local';
     console.log(variableLocal); // Puedo acceder a la variable local

     // Sin embargo, no puedo acceder a variableLocal fuera de esta función
   }
   /*

**El uso de `this` en JavaScript:**

- En el contexto de funciones, el valor de `this` depende de cómo se invoca la función.
- En una función normal, `this` hace referencia al objeto global (`window` en un navegador, `global` en Node.js).
- En el contexto de un objeto, `this` hace referencia al objeto mismo.
*/

//Ejemplo:

let persona = {
  nombre: 'Juan',
  saludar: function() {
    console.log('Hola, soy ' + this.nombre);
  }
};

persona.saludar(); // Devuelve 'Hola, soy Juan'
/*

En este ejemplo, `this.nombre` dentro de la función `saludar` hace referencia al atributo `nombre` del objeto `persona`.

Es crucial comprender el scope y cómo `this` se comporta en diferentes contextos para evitar errores y escribir código más efectivo en JavaScript. ¡Espero que esta explicación te sea de ayuda!*/