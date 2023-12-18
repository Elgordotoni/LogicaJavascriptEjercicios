/*
DOM (Document Object Model) - Resumen de Estudio:

- **Introducción al DOM:**
  - El DOM (Document Object Model) es una interfaz de programación que representa la estructura de un documento HTML o XML como un conjunto de objetos. En el contexto web, generalmente nos referimos al DOM de un documento HTML.

- **Acceso a Partes Importantes del Documento:**
  - **Acceder a Elementos por ID:**
    */
    let elementoPorId = document.getElementById('miId');
    

  /*Acceder a Elementos por Nombre de Clase:
  */
    let elementosPorClase = document.getElementsByClassName('miClase');
    

  //- **Acceder a Elementos por Etiqueta:**
    
    let elementosPorEtiqueta = document.getElementsByTagName('p');
    

  //Acceder a Elementos por Selector CSS:**
    
    let elementosPorSelector = document.querySelectorAll('.miClase p');
    

  - **Acceder al Primer Elemento por Selector CSS:**
    
    let primerElementoPorSelector = document.querySelector('.miClase');
   

//  - **Acceder a Atributos de un Elemento:**
   
    let valorAtributo = elemento.getAttribute('miAtributo');
    

//  - **Modificar Contenido de un Elemento:**
    
    elemento.innerHTML = 'Nuevo contenido';
    
 // - **Crear y Agregar Elementos:**
    
    let nuevoElemento = document.createElement('div');
    elementoPadre.appendChild(nuevoElemento);
    

/*- **Comparación Cotidiana:**
  - Puedes pensar en el DOM como una representación estructurada de una página web, donde cada elemento es como un objeto con propiedades y métodos que puedes manipular. Acceder al DOM es como usar diferentes herramientas para interactuar con los elementos de una página, ya sea por su identificación única, su clase, o su posición en la estructura.

**Resumen:**
- El DOM representa la estructura de un documento HTML como un conjunto de objetos.
- Se puede acceder a diferentes partes del documento utilizando métodos como `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector`, entre otros.
- La manipulación del DOM permite modificar el contenido, los atributos y agregar nuevos elementos a una página web.
- La analogía cotidiana ayuda a entender cómo acceder y manipular elementos en una página web, similar a usar herramientas para interactuar con objetos en la vida real.*/