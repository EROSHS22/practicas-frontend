# Reporte de Correcciones: Ejercicio 1

Dejo por aquí el reporte con las correcciones aplicadas al código HTML del Ejercicio 1.

## 1. Etiqueta de navegación: `<nav>`
Reemplacé la etiqueta `<navbar>` por `<nav>`. Aunque "navbar" es un término que solemos usar mucho, no es una etiqueta válida en el estándar HTML5. Usar `<nav>` asegura que tanto el navegador como los motores de búsqueda identifiquen correctamente el menú.

## 2. Estructura semántica: `<main>` y `<section>`
Cambié el `<div>` principal por la etiqueta `<main>` y agrupé el contenido secundario en un `<section>`. Usar demasiados `<div>` no le dice nada al navegador sobre la estructura. Con `<main>`, dejamos bien claro cuál es el contenido principal de la página.

## 3. Jerarquía lógica de encabezados
El código original saltaba directamente de un `<h1>` a un `<h3>`. Ajusté esto usando un `<h2>`. Es importante no saltarse niveles en los títulos para mantener un índice lógico, lo cual es básico para la accesibilidad y el SEO.

## 4. Semántica en el texto: `<strong>` en lugar de `<b>`
Cambié las etiquetas `<b>` por `<strong>`. Mientras que `<b>` solo hace que el texto se vea en negritas (un cambio meramente visual), `<strong>` le da un peso semántico real, indicando que esa parte del texto tiene mayor relevancia.

## 5. Elemento `<dialog>`
Había un botón de cierre con la instrucción `onclick="myDialog.close()"`, pero el elemento `myDialog` no existía en el código. Lo solucioné envolviendo esa sección ( en una etiqueta `<dialog id="myDialog">`, para que la función de cerrar tenga un objetivo real.

## 6. Idioma del documento
Por último, cambié el atributo de la etiqueta raíz a `lang="es"`. Como todo el contenido está en español, dejarlo en `en` (inglés) genera problemas con traductores automáticos y lectores de voz.
