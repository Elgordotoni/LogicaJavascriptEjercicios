/*

**Web APIs en JavaScript - Resumen de Estudio:**

- **Teoría:**
  - Las Web APIs (Interfaces de Programación de Aplicaciones Web) son conjuntos de herramientas y reglas que permiten la comunicación entre diferentes software a través de la web.
  - En JavaScript, las Web APIs son proporcionadas por el entorno del navegador y permiten la interacción entre el código JavaScript y recursos externos, como servidores y el DOM (Document Object Model).

- **Objeto Window y Web APIs:**
  - El objeto `Window` es la interfaz principal en JavaScript que representa la ventana del navegador y actúa como el contexto global.
  - A través del objeto `Window`, se accede a diversas Web APIs que brindan funcionalidades específicas, como manipulación del DOM, solicitudes HTTP, geolocalización, etc.

- **Ejemplo de Código - Uso de Fetch API:**
  ```javascript
  */
  // Ejemplo de uso de Fetch API para obtener datos de un servidor
  window.fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  /*

- **Comparación Cotidiana:**
  - Puedes pensar en las Web APIs como interfaces que te permiten interactuar con diferentes servicios en la web, de manera similar a cómo utilizas la interfaz de un aparato para controlarlo. Por ejemplo, pulsar un botón en un control remoto (JavaScript) envía una señal a través de una interfaz (Web API) para cambiar el canal en un televisor (DOM).

**Resumen:**
- Las Web APIs son conjuntos de herramientas que permiten a las aplicaciones web interactuar con servicios externos y recursos del navegador.
- A través del objeto `Window` en JavaScript, se accede a diversas Web APIs como la Fetch API, Geolocation API, etc.
- Ejemplos de código, como el uso de Fetch API, ilustran cómo realizar solicitudes HTTP de manera asincrónica en JavaScript.
- La analogía cotidiana ayuda a entender cómo las Web APIs actúan como intermediarios para la comunicación entre diferentes componentes en el desarrollo web.*/