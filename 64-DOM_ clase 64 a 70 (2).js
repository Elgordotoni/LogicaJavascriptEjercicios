//CLASE 64: ESTILOS Y VARIABLES


/*

**Resumen sobre `style` y `getComputedStyle` en JavaScript:**

1. **`style` Property:**
   - **Uso:** Permite acceder y modificar estilos en línea definidos directamente en el atributo `style` del elemento HTML.
   - **Cambios Inmediatos:** Modificar esta propiedad refleja cambios inmediatos en la presentación del elemento.
   - **Limitaciones:** No proporciona información sobre estilos heredados ni aquellos provenientes de hojas de estilo externas.
   - **Ejemplo:**
     ```javascript
     var miElemento = document.getElementById("miElemento");
     miElemento.style.backgroundColor = "blue";
     ```

2. **`getComputedStyle`:**
   - **Uso:** Proporciona una representación calculada de todos los estilos aplicados al elemento, incluyendo estilos heredados y definidos externamente.
   - **Solo Lectura:** Permite obtener información sobre los estilos, pero no modificar directamente estilos en línea.
   - **Información Completa:** Útil para obtener detalles precisos sobre la presentación final de un elemento.
   - **Ejemplo:**
     ```javascript
     var miElemento = document.getElementById("miElemento");
     var estilosCalculados = window.getComputedStyle(miElemento);
     var colorFondoCalculado = estilosCalculados.backgroundColor;
     ```

**Elección de Método:**
- Usa `style` cuando necesitas cambios rápidos y directos en estilos en línea.
- Utiliza `getComputedStyle` cuando necesitas información completa sobre los estilos aplicados, especialmente cuando provienen de diversas fuentes, después de que la página ha cargado completamente. Estos cambios no son inmediatos y requieren el uso de métodos adicionales para la manipulación de estilos.

En muchos casos, ambos métodos se utilizan en conjunto según los requisitos específicos de la tarea en JavaScript.

*/


//práctica con Jon

//llamo la etiqueta que quiero modificar
const $linkDOM = document.querySelector(".link-dom")

console.log($linkDOM.style)

//modifico los estilos desde aca con setproperty
$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("display", "block")
//igual pero con la notacion del punto
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem"; 


//acceder a variables css - Custom prperteies css
const $html = document.documentElement;
$body = document.body;

//accedo a las variables
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")


//las aplico en el html mediante javascript
$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

/*
//modificar variables, (establesco el color que seria pink)
$html.style.setProperty("--dark-color", "pink")
//cambia el valor dinamicamente, pero no en la variable, por lo tanto hay que llamar nuevamente la variable aplicandole los valores con getComputedStyle
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

//ahora si se aplica el cambio modificando el valor de la propiedad con setProperty
$body.style.setProperty("background-color", varDarkColor)





*/





//CLASE 65: CLASSLIST Y CLASSNAME


/*TEORIA

`classList` y `className` son propiedades de los objetos de elementos DOM en JavaScript que te permiten trabajar con las clases CSS de un elemento, pero tienen diferencias clave en cómo manejan las operaciones y cómo acceden a las clases.

1. **`classList`:**
   - **Descripción:** `classList` es una propiedad que devuelve una lista de clases de un elemento como un objeto DOMTokenList. Proporciona métodos para agregar, eliminar y verificar clases de manera fácil y eficiente.
   - **Métodos comunes:**
     - `add(className)`: Agrega una clase al elemento.
     - `remove(className)`: Elimina una clase del elemento.
     - `toggle(className)`: Agrega la clase si no está presente, la elimina si ya está presente.
     - `contains(className)`: Verifica si el elemento tiene una clase específica.

   ```javascript
   // Ejemplo de uso de classList
   var miElemento = document.getElementById("miElemento");
   miElemento.classList.add("nuevaClase");
   miElemento.classList.remove("otraClase");
   ```

2. **`className`:**
   - **Descripción:** `className` es una propiedad que devuelve una cadena de texto que representa todas las clases de un elemento. Puedes modificar esta cadena para agregar o eliminar clases, pero es menos versátil que `classList`.
   - **Operaciones comunes:**
     - Concatenación de cadenas para agregar clases.
     - Sustitución de cadenas para eliminar clases.

   ```javascript
   // Ejemplo de uso de className
   var miElemento = document.getElementById("miElemento");
   miElemento.className = "nuevaClase";
   ```

**Diferencias clave:**
- **`classList`:**
  - Más versátil y fácil de usar para agregar, eliminar y verificar clases.
  - Ofrece métodos específicos y claros para manipular clases.
  - Mejor en situaciones donde necesitas realizar varias operaciones con clases.

- **`className`:**
  - Menos funcionalidades que `classList`.
  - Requiere manipulación directa de cadenas, lo que puede ser menos intuitivo y más propenso a errores.
  - Puede ser más adecuado para casos simples o cuando solo necesitas realizar una operación con clases.

En general, se recomienda utilizar `classList` debido a su mayor flexibilidad y facilidad de uso en comparación con `className`.

*/




// 65- CLASSLIST Y CLASSNAME PRACTICA:


const $card = document.querySelector(".card")


console.log($card)
console.log($card.className)
console.log($card.classList)
console.log($card.classList.contains("rotate-45"))//verifica si hay esa clase y devuelve un boolean

$card.classList.add("rotate-45")// el add agrega esa clase

console.log($card.classList.contains("rotate-45"))

console.log($card.className) 

console.log($card.className)//nombra las clases
console.log($card.classList)//enumera las clases en una especie de arreglo con sus respectivos nombres

$card.classList.remove("rotate-45")//Remove borra clase

console.log($card.classList.contains("rotate-45"))//comprobamos que se haya borrado devolvera false

$card.classList.toggle("rotate-45")//es como un interruptor que vuelve al estado anterior.

console.log($card.classList.contains("rotate-45"))//true

$card.classList.toggle("rotate-45")

console.log($card.classList.contains("rotate-45"))//false

$card.classList.replace("rotate-45","rotate-135")//reemplaza una clase


//add, remove y toggle pueden obtener varias clases a la vez , replace solo una.












//           66- Texto y HTML

//Resumen de Propiedades de Contenido en JavaScript

//1. **`textContent`:**
//   - **Descripción:** Propiedad que devuelve o establece el contenido de texto de un elemento, excluyendo las etiquetas HTML.
  // - **Uso:**
  /*  
     var miElemento = document.getElementById("ejemplo");
     var texto = miElemento.textContent; // Obtener texto
     miElemento.textContent = "Nuevo texto"; // Establecer texto
    

//2. **`innerHTML`:**
//   - **Descripción:** Propiedad que devuelve o establece el contenido HTML de un elemento, incluyendo todas las etiquetas.
  
     
     var miElemento = document.getElementById("ejemplo");
     var contenidoHTML = miElemento.innerHTML; // Obtener contenido HTML
     miElemento.innerHTML = "<p>Nuevo contenido</p>"; // Establecer contenido HTML
    

   - **Descripción:** Propiedad que devuelve o establece el contenido HTML completo de un elemento, incluyendo el propio elemento.
   - **Uso:**
     ```javascript
     
     var miElemento = document.getElementById("ejemplo");
     var contenidoCompleto = miElemento.outerHTML; // Obtener contenido HTML completo
     miElemento.outerHTML = "<div id='nuevoEjemplo'>Contenido reemplazado</div>"; // Reemplazar completamente el elemento
    

/*Estas propiedades son útiles para manipular el contenido de elementos en el DOM, ya sea para obtener información o para modificar la estructura HTML de la página de manera dinámica.
*/










//      67-Recorriendo el DOM

// TEORIA

/*Resumen de Métodos y Propiedades de Navegación en el DOM:**

1. **`children`:**
  - **Descripción:** Propiedad que devuelve una colección de nodos hijos de un elemento.
  - **Ejemplo:**
     
   var hijos = miElemento.children;
    

2. **`parentElement`:**
 - **Descripción:** Propiedad que devuelve el elemento padre de un elemento.
  - **Ejemplo:**
    
    var padre = miElemento.parentElement;
     

3. **`firstElementChild`:**
   - **Descripción:** Propiedad que devuelve el primer elemento hijo de un elemento.
   - **Ejemplo:**
    
     var primerHijo = miElemento.firstElementChild;
     

4. **`lastElementChild`:**
  - **Descripción:** Propiedad que devuelve el último elemento hijo de un elemento.
  - **Ejemplo:**
    
     var ultimoHijo = miElemento.lastElementChild;
    

5. **`previousElementSibling`:**
  - **Descripción:** Propiedad que devuelve el elemento hermano anterior de un elemento.
   - **Ejemplo:**
    
     var hermanoAnterior = miElemento.previousElementSibling;
     

6. **`nextElementSibling`:**
   - **Descripción:** Propiedad que devuelve el elemento hermano siguiente de un elemento.
   - **Ejemplo:**
     
     var hermanoSiguiente = miElemento.nextElementSibling;
     

7. **`closest(selector)`:**
  - **Descripción:** Método que devuelve el ancestro más cercano que coincide con el selector proporcionado.
   - **Ejemplo:**
     
     var divCercano = miElemento.closest("div");
    

8. **`closest("body")`:**
   - **Descripción:** Método que devuelve el ancestro más cercano que es el cuerpo (`<body>`) del documento.
   - **Ejemplo:**

    var cuerpoCercano = miElemento.closest("body");
    

9. **`children3.closest("section")`:**
   - **Descripción:** Método que busca el ancestro más cercano de un elemento con la etiqueta "section".
   - **Ejemplo:**
     
    var sectionCercano = children3.closest("section");
     

Estos métodos y propiedades son herramientas útiles para navegar y manipular la estructura del DOM de manera eficiente en JavaScript.""

*/



          //PRACTICA
          
          
const $cards = document.querySelector(".cards")

console.log($cards.children)
console.log($cards.parentElement)
console.log($cards.firstElementChild)
console.log($cards.LastElementChild)
console.log($cards.PreviousElementSibiling)
console.log($cards.NextElementSibiling)
console.log($cards.closest("div"))
console.log($cards.closest("body"))
console.log($cards.closest("section"))
















//.        68 - Elementos y Fragmentos


/*Teoria
Resumen de Creación de Elementos y Fragmentos en JavaScript:

1. Crear Elemento:
Teoría: Para agregar dinámicamente elementos al DOM, se utiliza el método `createElement`. Este método crea un nuevo elemento con el nombre de la etiqueta especificada.
   Código:
    
     var nuevoElemento = document.createElement("div");
  

2. Añadir Contenido:
   Teoría: Puedes agregar contenido a un elemento recién creado utilizando las propiedades `textContent` o `innerHTML`.
   Código:
   
     nuevoElemento.textContent = "Nuevo Contenido";
     

3. Añadir Atributos:
  Teoría: Utiliza el método `setAttribute` para añadir atributos al nuevo elemento.
   Código:
    
     nuevoElemento.setAttribute("class", "miClase");
     

4. Añadir al DOM:
   Teoría: Para agregar el nuevo elemento al DOM, utiliza métodos como `appendChild` en el padre deseado.
   Código:
    
     var contenedor = document.getElementById("contenedor");
     contenedor.appendChild(nuevoElemento);
     

5. Crear Fragmento:
   Teoría: Los fragmentos son útiles para mejorar el rendimiento al agregar múltiples elementos al DOM de una vez. Se crean con `createDocumentFragment`.
   Código:
     
     var fragmento = document.createDocumentFragment();
     

6.Agregar al Fragmento:
   Teoría: Agrega elementos al fragmento de la misma manera que al DOM, utilizando métodos como `appendChild`.
   Código:
     
     var nuevoElemento1 = document.createElement("p");
     nuevoElemento1.textContent = "Elemento 1";
     fragmento.appendChild(nuevoElemento1);

     var nuevoElemento2 = document.createElement("p");
     nuevoElemento2.textContent = "Elemento 2";
     fragmento.appendChild(nuevoElemento2);
     

7. Agregar Fragmento al DOM:
   Teoría: Una vez que has agregado todos los elementos al fragmento, puedes añadir el fragmento al DOM, mejorando la eficiencia.
   Código:
    
     contenedor.appendChild(fragmento);
     

Este proceso te permite crear, personalizar y agregar elementos de manera eficiente al DOM utilizando JavaScript. La creación de fragmentos es especialmente útil cuando trabajas con varios elementos para evitar múltiples manipulaciones costosas en el DOM.*/





//           Practica 


/*
const $figure = document.createElement("figure")
const img = document.createElement("img")
const $figcaption = document.createElement("figcaption")
const $figcaptionText = document.createTextNode("Animals")
const $cards = document.querySelector(".cards")

img.setAttribute("src","https://picsum.photos/id/238/200/300")

$figcaption.appendChild($figcaptionText)
$figure.appendChild($figcaption)
$figure.appendChild(img)
$cards.appendChild($figure)
*/



document.addEventListener('DOMContentLoaded', function() {
  const $figure = document.createElement("figure");
  const img = document.createElement("img");
  const $figcaption = document.createElement("figcaption");
  const $figcaptionText = document.createTextNode("Animals");
  const $cards = document.querySelector(".cards");

  img.setAttribute("src", "https://picsum.photos/id/238/200/300");

  $figcaption.appendChild($figcaptionText);
  $figure.appendChild(img);
  $figure.appendChild($figcaption);
  $cards.appendChild($figure);
})

