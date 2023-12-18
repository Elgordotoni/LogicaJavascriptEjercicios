//CLASE 64: ESTILOS Y VARIABLES


/*

*Resumen sobre `style` y `getComputedStyle` en JavaScript:*

1. *`style` Property:*
   - *Uso:* Permite acceder y modificar estilos en línea definidos directamente en el atributo `style` del elemento HTML.
   - *Cambios Inmediatos:* Modificar esta propiedad refleja cambios inmediatos en la presentación del elemento.
   - *Limitaciones:* No proporciona información sobre estilos heredados ni aquellos provenientes de hojas de estilo externas.
   - *Ejemplo:*
     javascript
     var miElemento = document.getElementById("miElemento");
     miElemento.style.backgroundColor = "blue";
     

2. *`getComputedStyle`:*
   - *Uso:* Proporciona una representación calculada de todos los estilos aplicados al elemento, incluyendo estilos heredados y definidos externamente.
   - *Solo Lectura:* Permite obtener información sobre los estilos, pero no modificar directamente estilos en línea.
   - *Información Completa:* Útil para obtener detalles precisos sobre la presentación final de un elemento.
   - *Ejemplo:*
     javascript
     var miElemento = document.getElementById("miElemento");
     var estilosCalculados = window.getComputedStyle(miElemento);
     var colorFondoCalculado = estilosCalculados.backgroundColor;
     

*Elección de Método:*
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




/*
//acceder a variables css - Custom properteies css
const $html = document.documentElement;
$body = document.body;

//accedo a las variables
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")


//las aplico en el html mediante javascript
$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor


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

1. *`classList`:*
   - *Descripción:* `classList` es una propiedad que devuelve una lista de clases de un elemento como un objeto DOMTokenList. Proporciona métodos para agregar, eliminar y verificar clases de manera fácil y eficiente.
   - *Métodos comunes:*
     - `add(className)`: Agrega una clase al elemento.
     - `remove(className)`: Elimina una clase del elemento.
     - `toggle(className)`: Agrega la clase si no está presente, la elimina si ya está presente.
     - `contains(className)`: Verifica si el elemento tiene una clase específica.

   javascript
   // Ejemplo de uso de classList
   var miElemento = document.getElementById("miElemento");
   miElemento.classList.add("nuevaClase");
   miElemento.classList.remove("otraClase");
   

2. *`className`:*
   - *Descripción:* `className` es una propiedad que devuelve una cadena de texto que representa todas las clases de un elemento. Puedes modificar esta cadena para agregar o eliminar clases, pero es menos versátil que `classList`.
   - *Operaciones comunes:*
     - Concatenación de cadenas para agregar clases.
     - Sustitución de cadenas para eliminar clases.

   javascript
   // Ejemplo de uso de className
   var miElemento = document.getElementById("miElemento");
   miElemento.className = "nuevaClase";
   

*Diferencias clave:*
- *`classList`:*
  - Más versátil y fácil de usar para agregar, eliminar y verificar clases.
  - Ofrece métodos específicos y claros para manipular clases.
  - Mejor en situaciones donde necesitas realizar varias operaciones con clases.

- *`className`:*
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

//1. *`textContent`:*
//   - *Descripción:* Propiedad que devuelve o establece el contenido de texto de un elemento, excluyendo las etiquetas HTML.
  // - *Uso:*
  /*  
     var miElemento = document.getElementById("ejemplo");
     var texto = miElemento.textContent; // Obtener texto
     miElemento.textContent = "Nuevo texto"; // Establecer texto
    

//2. *`innerHTML`:*
//   - *Descripción:* Propiedad que devuelve o establece el contenido HTML de un elemento, incluyendo todas las etiquetas.
  
     
     var miElemento = document.getElementById("ejemplo");
     var contenidoHTML = miElemento.innerHTML; // Obtener contenido HTML
     miElemento.innerHTML = "<p>Nuevo contenido</p>"; // Establecer contenido HTML
    

   - *Descripción:* Propiedad que devuelve o establece el contenido HTML completo de un elemento, incluyendo el propio elemento.
   - *Uso:*
     ```javascript
     
     var miElemento = document.getElementById("ejemplo");
     var contenidoCompleto = miElemento.outerHTML; // Obtener contenido HTML completo
     miElemento.outerHTML = "<div id='nuevoEjemplo'>Contenido reemplazado</div>"; // Reemplazar completamente el elemento
    

/*Estas propiedades son útiles para manipular el contenido de elementos en el DOM, ya sea para obtener información o para modificar la estructura HTML de la página de manera dinámica.
*/










//      67-Recorriendo el DOM

// TEORIA

/*Resumen de Métodos y Propiedades de Navegación en el DOM:

1. *`children`:*
  - *Descripción:* Propiedad que devuelve una colección de nodos hijos de un elemento.
  - *Ejemplo:*
     
   var hijos = miElemento.children;
    

2. *`parentElement`:*
 - *Descripción:* Propiedad que devuelve el elemento padre de un elemento.
  - *Ejemplo:*
    
    var padre = miElemento.parentElement;
     

3. *`firstElementChild`:*
   - *Descripción:* Propiedad que devuelve el primer elemento hijo de un elemento.
   - *Ejemplo:*
    
     var primerHijo = miElemento.firstElementChild;
     

4. *`lastElementChild`:*
  - *Descripción:* Propiedad que devuelve el último elemento hijo de un elemento.
  - *Ejemplo:*
    
     var ultimoHijo = miElemento.lastElementChild;
    

5. *`previousElementSibling`:*
  - *Descripción:* Propiedad que devuelve el elemento hermano anterior de un elemento.
   - *Ejemplo:*
    
     var hermanoAnterior = miElemento.previousElementSibling;
     

6. *`nextElementSibling`:*
   - *Descripción:* Propiedad que devuelve el elemento hermano siguiente de un elemento.
   - *Ejemplo:*
     
     var hermanoSiguiente = miElemento.nextElementSibling;
     

7. *`closest(selector)`:*
  - *Descripción:* Método que devuelve el ancestro más cercano que coincide con el selector proporcionado.
   - *Ejemplo:*
     
     var divCercano = miElemento.closest("div");
    

8. *`closest("body")`:*
   - *Descripción:* Método que devuelve el ancestro más cercano que es el cuerpo (`<body>`) del documento.
   - *Ejemplo:*

    var cuerpoCercano = miElemento.closest("body");
    

9. *`children3.closest("section")`:*
   - *Descripción:* Método que busca el ancestro más cercano de un elemento con la etiqueta "section".
   - *Ejemplo:*
     
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
     ""

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


//forma con create element 
//document.addEventListener('DOMContentLoaded', function() {
  const $figure = document.createElement("figure");
  const img = document.createElement("img");
  const $figcaption = document.createElement("figcaption");
  const $figcaptionText = document.createTextNode("Animals");
  const $cards2 = document.querySelector(".cards");

  img.setAttribute("src", "https://picsum.photos/id/238/200/300");
  img.setAttribute("alt", "Animals")
  $figure.classList.add("card")

  $figcaption.appendChild($figcaptionText);
  $figure.appendChild(img);
  $figure.appendChild($figcaption);
  $cards2.appendChild($figure);



//Con innerHTML
const $figure2 = document.createElement("figure")

$figure2.innerHTML = `
<img src="https://picsum.photos/id/233/200/300" alt="Nature" >
<figcaption>Roads</figcaption>
`

$figure2.classList.add("card")
$cards.appendChild($figure2)





//})



//Con  Create element consumiendo un arreglo:
const estaciones = ["primavera","verano","otoño","invierno"],
$ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>")//escribimos en el html (aunque es una mala practica)
document.body.appendChild($ul)//añadimos la ul al html

estaciones.forEach((el) => {
  const $li = document.createElement("li");//creamos li
  $li.textContent = el;//añadimos valor a cada li
  $ul.appendChild($li)//añadimos el li al ul
})



//Con innerHTML consumiendo un arreglo:
const continentes = ["America","Africa","Asia","Europa","Oceania"]
$ul2 = document.createElement("ul")

document.write("<h3>Continentes del mundo</h3>")//escribimos en el html (aunque es una mala practica)
document.body.appendChild($ul2)//añadimos la ul al html

$ul2.innerHTML = "";
continentes.forEach((el)=>{$ul2.innerHTML += `<li>${el}</li>`})

 

//Con create element y Fragment(MEJOR PRACTICA) 
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","diciembre"],
$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment()

meses.forEach((el) => {
  const $li = document.createElement("li");//creamos li
  $li.textContent = el;//añadimos valor a cada li
  $fragment.appendChild($li)//añadimos el LI al FRAGMENTO
})

document.write("<h3>Estaciones del año</h3>")//escribimos en el html (aunque es una mala practica)
$ul3.appendChild($fragment)//Añadimos el fragmento al ul
document.body.appendChild($ul3)//añadimos la ul al html



















//            69- Templates HTML


const $cards3 = document.querySelector(".cards"),
$template2 = document.getElementById("template-card").content,
$fragment2 = document.createDocumentFragment(),
cardContent = [
  {
    title: "Tecnología",
    img: "https://picsum.photos/200"
  },
  {
    title: "Animales",
    img: "https://picsum.photos/200"
  },
  {
    title: "Arquitectura",
    img: "https://picsum.photos/200"
  },
  {
    title: "Gente",
    img: "https://picsum.photos/200"
  },
  {
    title: "Naturaleza",
    img: "https://picsum.photos/200"
  },
]

cardContent.forEach((el)=>{
  $template2.querySelector("img").setAttribute("src",el.img),
  
  $template2.querySelector("img").setAttribute("alt", el.title)
  
  $template2.querySelector("figcaption").textContent = el.title

  let $clone = document.importNode($template2,true)
  $fragment2.appendChild($clone)
})

$cards3.appendChild($fragment2)












//70- modificando elementos de manera antigua:


/*
Método replaceChild
Método removeChild
Método insertBefore 

*Resumen de Métodos de Manipulación de Nodos en JavaScript:*

1. **`replaceChild`:
   - Descripción:** Método que reemplaza un nodo hijo existente con otro.
   - Código:
    
     var nuevoNodo = document.createElement("p");
     var nodoExistente = document.getElementById("viejoNodo");
     var padre = nodoExistente.parentNode;

     padre.replaceChild(nuevoNodo, nodoExistente);
     

2. `removeChild`:
   - Descripción: Método que elimina un nodo hijo de su padre.
   - Código:
    
     var nodoAEliminar = document.getElementById("nodoEliminar");
     var padre = nodoAEliminar.parentNode;

     padre.removeChild(nodoAEliminar);
     

3. `insertBefore`:
   - Descripción: Método que inserta un nodo antes de otro nodo hijo en el mismo padre.
   - Código:
     
     var nuevoNodo = document.createElement("p");
     var nodoExistente = document.getElementById("nodoExistente");
     var padre = nodoExistente.parentNode;

     padre.insertBefore(nuevoNodo, nodoExistente);
     

Estos métodos son esenciales para la manipulación dinámica de la estructura del DOM en JavaScript, permitiendo reemplazar, eliminar o insertar nodos de manera controlada.
*/
















//71- DOM: Modificando ELementos de manera mas moderna.

/*
insertAdjacent...
.insertAdjacentElement(position,el) = appendChild
.insertAdjacentHTML(posiion,html) = innerHTML
.insert.AdjacentText(position,text) = textContent


Posiciones:
beforebegin(hermano anterior)
afterbegin(primer hijo)
beforeend(Ultimo hijo)
afterend(hermano siguiente)


*/
//Ej codigo de insertAdjacentElement:

const $cards4 = document.querySelector(".cards")
$newCard = document.createElement("figure")

$newCard.innerHTML = `
<img src="https://picsum.photos/id/232/200/300" alt="Any" >
<figcaption>Stars</figcaption>
`;

$newCard.classList.add("card")

$cards4.insertAdjacentElement("beforebegin", $newCard)
//$cards4.insertAdjacentElement("afterbegin", $newCard)
//$cards4.insertAdjacentElement("beforeend", $newCard)
//$cards4.insertAdjacentElement("AdjacentText", $newCard)













//72 - DOM : Manejadores de Eventos

/**
 * 📝 Los Eventos

    👉 Es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario y definir ciertos comportamientos del documento q sucedan en cierto momento o cuando se cumplan algunas condiciones.

    👉 Ahora, las funciones q se ejecutan en un Evento es lo q se conoce como el Event Handler o traducido Manejadores de Eventos, o tmb Observadores o Escuchadores.
    
    👉 Hay 3 maneras de definir los Eventos en JS : 
 */
    
/* ************************************************************************************************************************************** */
     
   //1️⃣ COMO ATRIBUTO DEL HTML
    
   //👀 Muy importante: 
   /*👉 Esta función se va a convertir en el Manejador de Eventos (Event Handler)
    *👉 Cuando una función se convierte en un Event Handler, es decir una función que se ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento en sí, y eso lo podemos acceder con la palabra reservada 'event'
   */
    function holaMundo(){
      alert('Holaaa Mundo')
      console.log(event)  //👈 con esto en la consola, se desencadena un tipo de Objeto MouseEvent (evento del Mouse), y dentro de él se encuentran dos propiedades muy importantes: type y target.
    
     //👉 type.- es el tipo de evento q se desencadeno
     //👉 target.- es el elemento que origino el evento
     
     //👉 Dentro de target estan todos los eventos y propiedades q se pueden usar por dicho elemento y los q estan en null son eventos q no tienen definida dicha función en dichos eventos. En cambio vemos el evento onclick q si tiene definida la funcion holaMundo
   }
   
/* *************************************************************************************************************************************** */
   
  //2️⃣ COMO MANEJADOR SEMÁNTICO
   
  //👉 Se le dice manejador semántico xq va teniendo una coherencia en la manera como la vamos definiendo
  //👉 cuando definamos un evento como semántico igualamos el evento semántico al nombre de la funcion pero sin (), xq los () hacen q cuando se cargue el Navegador se va a ejecutar
   const $eventoSemantico = document.getElementById('evento-semantico')
   $eventoSemantico.onclick = holaMundo //👈 no le ponemos () a la función xq sino al momento q se recarga el Navegador, se estará ejecutando el evento, y luego la consola nos dará undefined, xq el objeto event q mandamos a la consola no estará definido, xq la función se ejecutó asi como va, osea a la hora de cargar como tiene los parentesis se ejecuta.
   
  //👇 esta es otra manera de definir un Evento de tipo semántico, puede ser una función anónima o una arrow function
    $eventoSemantico.onclick = function(e){  //👈 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algun momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
       alert(`Hola Manejador de Evento Semántico`)
       console.log(e)
       console.log(event)
    }
   

/* ************************************************************************************************************************************** */
     
   //3️⃣ COMO MANEJADOR MÚLTIPLE
   
   //👉 Si deseamos asignar varias funciones a un mismo elemento, tenemos el método .addEventListener() que nos perimite levantar un Escuchador de Eventos
   const $eventoMultiple = document.getElementById('evento-multiple')
   //👇 este método .addEventListener() recibe varios parámetros, pero sólo nos enfocaremos en 2:
   // 1° Nombre de evento
   // 2° Función q se va a ejecutar, pero sin parentesis
   $eventoMultiple.addEventListener('click', holaMundo)
   
   //👇 tmb podemos trabajar con una arrow function
   $eventoMultiple.addEventListener('click', (e) => { //👈 este addEventListener nos dará 2 alerts y 4 console.log, nos da 2 alerts xq en vez de reemplazar como pasa más arriba con el evento de tipo semántico, esta es la ventaja de maneja evento múltiple con addEventListener xq puede ejecutar más funciones
      alert(`Hola Manejador de Evento Múltiple`)
      console.log(e)
      console.log(e.type)
      console.log(e.target)
      console.log(event)
   } )
     
     
     
   //📝NOTA:
   //👉 Cuando escuchemos de Event Handler hacemos referencia a la función q se ejecuta en dicho Evento   
   //👉 Una misma función nos puede servir para desencadenar eventos en diferentes elementos
   //👉 Los eventos semánticos tienen un pequeño inconveniente, si nos damos cuenta, cuando hablabamos de los Prototipos y hablamos de la funcion constructora, y si queriamos agregarle más métodos teniamos q agregarle a su Prototipo, aqui pasa algo similar, el onclick es como agregarle un método al Prototipo del Modelo de eventos del elemento del DOM q se estamos manejando
   //👉 Habrá veces q a lo mejor a un mismo elemento Html le asignemos diferentes Manejadores de Eventos, es decir diferentes funciones q hagan diferentes cosas, bueno la limitante q tienen los eventos de tipo semántico, es q una vez q esta definido el evento semántico sólo va poder ejecutar una función.
   //👉 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algún momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
   
   
   
   
   
   
   
   
   
   
   
   //73-Eventos con parámetros y remover Eventos
   
   
   
   //EVENTOS CON PARÁMETROS:
   //para pasar un parametro a un evento debemos crear una función y a esta llamarla dentro de la función del evento, ej:
   function saludar( nombre = "Desconocid@"){ alert(`Hola ${nombre}`);
     console.log(event)
}

$eventoMultiple.addEventListener("click",()=>{

saludar();

saludar("Gaston");
 });
//esto imprimirá los dos primeros eventos, tercero ejecuta el saludar vacío por lo tanto "Hola Desconocid@" y por último el saludar con el parámetro, es decir "Hola Gaston"




//REMOVER EVENTOS 

$eventoRemover = document.getElementById("evento-remover")//seleccion de etiqueta


const removerDobleClick = (e)=>{
  alert(`Removiendo el evento de tipo ${e.type}`)
  console.log(e)
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true
} //función que imprime el mensaje, remueve y desactiva el HTML 


$eventoRemover.addEventListener("dblclick", removerDobleClick)//ejecutamos el evento y le pasamos la función como valor.















//74- Flujo de eventos, burbuja y captura:

/*
En JavaScript, el tercer parámetro opcional en la función `addEventListener` es `useCapture`, que determina si la fase de captura se activa (`true`) o no (`false`, por defecto). La fase de captura es el proceso inverso de la burbuja de eventos, y ocurre antes de que el evento alcance el objetivo.

Ejemplo de burbuja (por defecto o false):

*/

/*


const $divsEventos = document.querySelectorAll(".eventos-flujo div")


function flujoEventos(e){
  console.log(
   `Hola te saluda ${this.className},el click lo originó ${e.target.className}` 
   
    )
    e.stopPropagation()
}

console.log($divsEventos)

$divsEventos.forEach((div)=>{
  
// div.addEventListener("click",flujoEventos,false)//BURBUJA (Origina desde tres a uno)


//div.addEventListener("click", flujoEventos, true)//CAPTURA (origina desde uno a tres)
 
 
 //el tercer parametro se puede ingresar en un objeto, ej:
 div.addEventListener("click",flujoEventos,{
   capture: false,//burbuja por defecto
   once:true//solo se ejecuta una vez!
   
 })
}) 







//75 - stopPropagation y preventDefault


//para evitar que se propague el evento en los elementos se ejecuta el método stoppropagation(). para evitar que se ejecute una acción normal del dom usamos preventDefault()

//*Aplico en la función del ejercicio anterior el stopp y ahora sigo con este ej:

const $linkEventos = document.querySelector(".eventos-flujo a")

$linkEventos.addEventListener("click", (e)=>{
alert(`Hola soy gastondm`)
e.preventDefault();
e.stopPropagation();

})



*/



//76 - Delegación de eventos 


/*
Con la delegación de eventos lo que evitamos es estar aplicando un evento a cada uno de los elementos con los que deseamos trabajar, esto consume memoria y no es efectivo si deseamos operar con varios de ellos, por eso se delega el evento al document y dentro de la función del parametro del evento aplicamos el condicional if con el metodo match donde le ingresamos la etiqueta en cuestión, dentro del foreach podenos llamar la funcion, vamos a reescribir el codigo del video 74 pero con delegación de eventos.
ventajas:
es mas prolijo.
evitamos propagación.
aplicamos solo una vez el evento.
*/

function flujoEventos2(e){
  console.log(
  `Hola te saluda ${this}, el click lo origino ${e.target.className}` 
    )
}

document.addEventListener("click", (e)=>{
//console.log("click en", e.target)  
  
  
if(e.target.matches(".eventos-flujo div")){
    flujoEventos2(e)
  }
  
  if(e.target.matches(".eventos-flujo a")){
    alert("Hola soy Tongadm con DELEGACION DE EVENTOS")
    e.preventDefault();
  }  
})











//77- BOM: Propiedades y Eventos:

/*BOM, o "Browser Object Model" en inglés, se refiere al conjunto de objetos proporcionados por los navegadores web. Estos objetos permiten la interacción con la ventana del navegador más allá de la manipulación del contenido de la página. Ejemplos comunes incluyen el objeto `window` para controlar la ventana del navegador y el objeto `navigator` para obtener información sobre el navegador del usuario.

en esta clase también vemos eventos, por ej resize se ejecuta cuando cambia el tamaño de la ventana del navegador, scroll cuando movemos la barra tanto eje "Y" como "X" y el evento load, pero este es lento, por eso en estos casos nos conviene el DOMContentLoad() que es más rápido.
*/

//Evento resize que cuelga del DOM,este carga todos los elementos antes de ejecutar. este ejecuta varios console con la Propiedad inner... del objeto windows que cuelga del BOM.
window.addEventListener("resize",(e)=>{
console.clear()
console.log("********resize*********")  

console.log(window.innerWidth)//tamaño del viewport del navegador 
console.log(window.innerHeight)
console.log(window.outerWidth)//tamaño de la ventana (cuando achicamos el navegador)
console.log(window.outerHeight)  
console.log(e)//e representa al resize y este imprime cada vez que achicamos o agrandamos.
})

//Evento scroll que cuelga del DOM,este carga todos los elementos antes de ejecutar. este ejecuta un console con la Propiedad scrollx y scrolly del objeto windows que cuelga del BOM..
window.addEventListener("scroll",(e)=>{
console.clear()
console.log("********scroll*********")   
console.log(window.scrollX)//medida del scroll.
console.log(window.scrollY)
console.log(e) //similar a resize pero con el scroll.
})


//load y DOMContentLoad cumplen la misma funcion pero DOMContentLoad carga mas rapido ya que cuelga del Document. este ejecuta un console con la Propiedad screen del objeto windows que cuelga del BOM.
window.addEventListener("load",(e)=>{
console.clear()
console.log("********scroll*********")   
console.log(window.screenX)
console.log(window.screenY)
console.log(e)
})

//Evento DOMContentLoad que cuelga del DOM,este carga todos los elementos antes de ejecutar. este ejecuta un console con la Propiedad screen del objeto windows que cuelga del BOM.
window.addEventListener("DOMContentLoad",(e)=>{
console.clear()
console.log("********scroll*********")   
console.log(window.screenX)
console.log(window.screenY)
console.log(e)
})
















//78 - BOM: METODOS

//👉 Manda una alerta
//window.alert("Alerta");

//👉 Manda una confirmacion, es decir, manda un mensaje y el usuario tiene que aceptar o rechazar la peticion
//window.confirm("Confirmación");

//👉 Manda un aviso, es igual que el confirm pero a su vez tiene un input para que pueda mandarnos un mensaje
//window.prompt("Aviso");

//*🧠 Recordatorio: A todo lo que cuelga de window no es necesario especificarle su padre, entonces queda asi

//alert("Alerta")
//confirm("Confirmacion")
//prompt("Aviso")

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana")

  let ventana

$btnAbrir.addEventListener("click", e => {
  //👉 Abre la direccion que le digamos
  ventana = window.open("https://jonmircha.com")
})

$btnCerrar.addEventListener("click", e => {
  //👉 Cierra la ventana
  ventana.close()
})

$btnImprimir.addEventListener("click", e => {
  //👉 Le da la opcion al usuario para que pueda imprimir la pagina web
  window.print()
})











//79 - BOM, objetos: URL, Historial y Navegador.
/*
💌 BOM: Objetos: URL, Historial y Navegador ( Apuntes ) 


///==========================================================================================================\\\


💮Intro

Anteriormente vimos metodos , eventos ,propiedades del BOM que se centran en las caracteristicas del objeto window , ya que es el objeto global ( ventana ) del navegador. Hoy vamos a ver 3 objetos muy importantes que cuelgan de window .

///==========================================================================================================\\\


♻ Objetos


🌐 Location : Este objeto tiene varias propiedades y metodos , ahora vamos a ver las propiedades mas importantes

💥location.origin : Este indica la ruta de la cual se origina , y si usamos liveserver nos dara el ip del servidor

💥location.protocol : Nos indica si el protocolo es http , file , etc

💥location.host : Nos indica el ip y el puerto del servidor.

💥location.hostName : Nos indicara el nombre del domino

💥location.port : Nos indica el puerto del servidor

💥location.hash : Este detecta el valor url que esta despues de un hash

💥location.pathname : Es el archivo en el cual estamos consultando.

💥location.search: Almacena los parametros que les pasamos por la Url.


🌐 History : Este objeto tiene una propiedad importante que es la longitud ( length) y el valor que tenga dara referencia  de las paginas que podemos acceder desde atras o adelante , guarda el posicionamiento en el historial en el cual nos encontramos, y el valor cambiara segun cuanto navegemos en las paginas. ( Funcionan como los botones de atras y adelante de la web )

💥 history.back : Con este indicamos cuantas paginas queremos regresar 
💥 history.forward : Este hace lo contrario osea cuantas paginas queremos ir adelante 
💥 history.go : Con este indicamos a donde queremos ir , si le indicamos -1 significa la pagina antes de otra , su valor puede ser positivo ( Para paginas adelante )  o negativo. ( para ir a una pagina de atras)



🌐 Navigator : Es un objeto bastante complejo con un monton d apis y objetos , da propiedades como el lenguaje , la plataforma , el sistema operativo , ahora vamos a ver las propiedades del navigator.

💥navigator.connection : nos da informacion si estamos conectados e informacion de la conexion del usuario
💥navigator.geolocalizacion : api de google para que nos muestre la ubicacion
💥navigator.mediaDevices: Nos indica si hay camaras , microfonos , etc
💥navigator.mimeTipes : Es el tipo de formato que acepta el navegador.
💥navigator.onLine : Este es el indicador que detecta si el usuario pierde o vuelve a conectarse a la red
💥navigator.servirceWorker : es una api que nos ayuda convertir en un sitio web , en una aplicacion instalable
💥navigator.storage : api de almacenamiento 
💥navigator.usb : este detecta dispositivos usb 
💥navigator.userAgent : nos da informacion sobre la plataforma que se conecta a nuestra aplicacion.


///==========================================================================================================\\\

*/










