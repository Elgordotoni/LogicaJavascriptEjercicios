/*
En el contexto del desarrollo web y JavaScript, el DOM (Document Object Model) es una representación jerárquica de la estructura de un documento HTML o XML. Los nodos son los elementos individuales en este modelo, y los elementos son partes específicas del documento, como etiquetas, atributos y contenido. Los selectores son patrones que te permiten acceder y manipular elementos del DOM.

**Ejemplo de Código:**
Supongamos que tienes el siguiente HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Mi Página</title>
</head>
<body>
  <div id="miDiv">
    <p>Hola, soy un párrafo dentro de un div.</p>
  </div>
</body>
</html>
```

puedes acceder al párrafo usando selectores y manipularlo así:

*/
// Acceder al div por su id
var miDiv = document.getElementById("miDiv");

// Acceder al párrafo dentro del div
var miParrafo = miDiv.getElementsByTagName("p")[0];

// Cambiar el contenido del párrafo
miParrafo.innerHTML = "¡Hola, soy un nuevo contenido!";


/*
Imagina el DOM como una estructura de organización de una biblioteca. Los nodos serían los libros individuales, los elementos serían las páginas o capítulos específicos, y los selectores serían las etiquetas o categorías que te permiten encontrar libros relacionados. Por ejemplo, si quisieras cambiar el título de un libro en la biblioteca, usarías el identificador único del libro (equivalente a un id en el DOM) para encontrarlo y luego cambiar el título.*/