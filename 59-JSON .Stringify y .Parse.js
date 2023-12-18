/*

**JSON.stringify() y JSON.parse() en JavaScript:**

- **Teoría:**
  - `JSON.stringify()` es un método en JavaScript que convierte un objeto JavaScript o un valor en una cadena JSON. Este método es útil cuando deseas enviar datos a un servidor o almacenarlos de manera estructurada.
  - `JSON.parse()` es un método que convierte una cadena JSON en un objeto JavaScript. Esto es útil cuando recibes datos en formato JSON y deseas trabajar con ellos en tu aplicación.

- **JSON.stringify() - Ejemplo de Código:**
  */
  // Creación de un objeto JavaScript
  let usuario = {
    nombre: 'Ana',
    edad: 30,
    ciudad: 'Ejemplo City'
  };

  // Convertir el objeto a una cadena JSON
  let usuarioJSON = JSON.stringify(usuario);
  console.log(usuarioJSON);
  
  
  
  
  
  
  
  

//JSON.parse() - Ejemplo de Código:**
  
  // Cadena JSON recibida, por ejemplo, desde un servidor
  let usuarioJSON = '{"nombre":"Ana","edad":30,"ciudad":"Ejemplo City"}';

  // Convertir la cadena JSON a un objeto JavaScript
  let usuario = JSON.parse(usuarioJSON);
  console.log(usuario.nombre); // Imprime 'Ana'
  
/*
- **Comparación Cotidiana:**
  - Puedes pensar en `JSON.stringify()` como tomar un objeto (por ejemplo, una caja con juguetes) y empaquetarlo en una caja más grande (cadena JSON) para enviarlo o almacenarlo de manera ordenada. `JSON.parse()` sería abrir esa caja más grande y extraer los juguetes originales (convertir la cadena JSON de nuevo a un objeto).
  
  
  

**Resumen:**
- `JSON.stringify()` convierte un objeto JavaScript en una cadena JSON.
- Ejemplo: `JSON.stringify({nombre: 'Ana', edad: 30})` produce `{"nombre":"Ana","edad":30}`.
- `JSON.parse()` convierte una cadena JSON en un objeto JavaScript.
- Ejemplo: `JSON.parse('{"nombre":"Ana","edad":30}')` produce un objeto con las propiedades correspondientes.
- Estos métodos son esenciales para la comunicación de datos estructurados entre el cliente y el servidor en aplicaciones web.

*/