# HTML — Apuntes de consulta rápida

> Guía para consultar conceptos, etiquetas y buenas prácticas de HTML.

---

# 1. ¿Qué es HTML?

**HTML** significa **HyperText Markup Language**.

Sirve para crear la **estructura y el contenido** de una página web.

HTML **no es un lenguaje de programación**. Es un lenguaje de marcado.

### HTML se encarga de:

* Títulos
* Textos
* Imágenes
* Enlaces
* Formularios
* Listas
* Tablas
* Estructura de la página
* Significado semántico del contenido

### Ejemplo básico

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi página</title>
</head>

<body>
    <h1>Hola mundo</h1>
    <p>Mi primera página web.</p>
</body>
</html>
```

---

# 2. Estructura básica de un documento HTML

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Título de la página</title>
</head>

<body>

    <!-- Contenido visible -->

</body>

</html>
```

## Partes importantes

### `<!DOCTYPE html>`

Indica que el documento utiliza **HTML5**.

### `<html>`

Elemento raíz de todo el documento.

```html
<html lang="es">
```

`lang="es"` indica que el idioma principal es español.

### `<head>`

Contiene información sobre la página que normalmente no aparece directamente en pantalla.

Puede contener:

```html
<meta>
<title>
<link>
<style>
<script>
```

### `<body>`

Contiene el contenido visible de la página.

---

# 3. Etiquetas HTML

La mayoría de elementos HTML tienen:

```html
<etiqueta>Contenido</etiqueta>
```

Ejemplo:

```html
<p>Hola</p>
```

* `<p>` → apertura
* `Hola` → contenido
* `</p>` → cierre

## Elementos sin cierre

Algunos elementos no necesitan etiqueta de cierre.

Ejemplo:

```html
<img>
<input>
<br>
<meta>
<link>
```

---

# 4. Atributos

Los atributos proporcionan información adicional sobre un elemento.

```html
<etiqueta atributo="valor">
```

Ejemplo:

```html
<img src="foto.jpg" alt="Un paisaje">
```

Aquí:

* `src` → atributo
* `"foto.jpg"` → valor
* `alt` → atributo
* `"Un paisaje"` → valor

---

# 5. Elementos semánticos

La **semántica** significa utilizar etiquetas según el significado del contenido.

Esto ayuda a:

* Accesibilidad
* SEO
* Organización del código
* Lectores de pantalla
* Mantenimiento del proyecto

## Estructura semántica típica

```html
<header>
    <nav>
        ...
    </nav>
</header>

<main>

    <section>
        ...
    </section>

    <article>
        ...
    </article>

</main>

<footer>
    ...
</footer>
```

## Etiquetas importantes

### `<header>`

Cabecera de una página o sección.

```html
<header>
    <h1>Mi página</h1>
</header>
```

### `<nav>`

Zona destinada a la navegación.

```html
<nav>
    <a href="/">Inicio</a>
    <a href="/contacto">Contacto</a>
</nav>
```

### `<main>`

Contenido principal de la página.

Debe representar el contenido central.

```html
<main>
    <h1>Noticias</h1>
</main>
```

### `<section>`

Agrupa contenido relacionado.

```html
<section>
    <h2>Noticias deportivas</h2>
    <p>...</p>
</section>
```

### `<article>`

Contenido independiente que podría entenderse por sí mismo.

Ejemplos:

* Noticia
* Entrada de blog
* Publicación
* Artículo

```html
<article>
    <h2>Nuevo artículo</h2>
    <p>Contenido...</p>
</article>
```

### `<aside>`

Contenido complementario.

```html
<aside>
    <h2>Contenido relacionado</h2>
</aside>
```

### `<footer>`

Pie de página o de una sección.

```html
<footer>
    <p>© 2026 Mi página</p>
</footer>
```

---

# 6. `<div>` vs elementos semánticos

`<div>` es un contenedor **genérico**.

```html
<div>
    contenido
</div>
```

No describe qué significa el contenido.

Cuando exista una etiqueta semántica adecuada, normalmente es mejor utilizarla.

❌ Poco descriptivo:

```html
<div class="header">
```

✅ Más semántico:

```html
<header>
```

---

# 7. Títulos

HTML tiene seis niveles de títulos:

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Subsubtítulo</h3>
<h4>...</h4>
<h5>...</h5>
<h6>...</h6>
```

### Orden recomendado

```text
h1
 ├── h2
 │    ├── h3
 │    └── h3
 └── h2
      └── h3
```

No se deben elegir únicamente por cómo se ven.

El nivel representa **jerarquía**, no tamaño visual.

---

# 8. Párrafos y texto

## Párrafo

```html
<p>Este es un párrafo.</p>
```

## Texto importante

```html
<strong>Texto importante</strong>
```

## Texto enfatizado

```html
<em>Texto enfatizado</em>
```

## Texto marcado

```html
<mark>Texto resaltado</mark>
```

## Texto pequeño

```html
<small>Texto secundario</small>
```

---

# 9. `<br>`

`<br>` produce un salto de línea.

```html
Hola<br>
Mundo
```

Resultado:

```text
Hola
Mundo
```

### ⚠️ No usar `<br>` para hacer espacios

❌

```html
Texto<br><br><br>
Otro texto
```

Para separación visual es mejor usar **CSS**.

`<br>` debe utilizarse cuando realmente existe un salto de línea dentro del contenido.

---

# 10. Enlaces

Se utiliza `<a>`.

```html
<a href="https://example.com">
    Visitar página
</a>
```

## Abrir en otra pestaña

```html
<a href="https://example.com" target="_blank" rel="noopener">
    Abrir página
</a>
```

## Enlace interno

```html
<a href="/contacto">
    Contacto
</a>
```

## Enlace a una sección

```html
<a href="#contacto">
    Ir al contacto
</a>

<section id="contacto">
    <h2>Contacto</h2>
</section>
```

---

# 11. Imágenes

```html
<img src="foto.jpg" alt="Descripción de la imagen">
```

## Atributos importantes

### `src`

Ruta de la imagen.

```html
src="imagenes/foto.jpg"
```

### `alt`

Texto alternativo.

```html
alt="Perro jugando en el parque"
```

El `alt` es importante para:

* Accesibilidad
* Lectores de pantalla
* Cuando la imagen no carga

### Imagen decorativa

Si una imagen solamente es decoración y no aporta información:

```html
<img src="decoracion.png" alt="">
```

---

# 12. Listas

## Lista desordenada

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

Resultado:

* HTML
* CSS
* JavaScript

## Lista ordenada

```html
<ol>
    <li>Primero</li>
    <li>Segundo</li>
    <li>Tercero</li>
</ol>
```

## Elemento de lista

Siempre utiliza:

```html
<li>
```

dentro de:

```html
<ul>
```

o:

```html
<ol>
```

---

# 13. Emmet

**Emmet** permite escribir abreviaciones para generar HTML rápidamente.

## Ejemplo

Escribir:

```text
!
```

genera una estructura HTML básica.

## Crear un elemento

```text
p
```

Resultado:

```html
<p></p>
```

## Clase

```text
div.contenedor
```

Resultado:

```html
<div class="contenedor"></div>
```

## ID

```text
div#principal
```

Resultado:

```html
<div id="principal"></div>
```

## Varias clases

```text
div.card.destacada
```

Resultado:

```html
<div class="card destacada"></div>
```

## Hijos

```text
ul>li
```

Resultado:

```html
<ul>
    <li></li>
</ul>
```

## Hermanos

```text
h1+p
```

Resultado:

```html
<h1></h1>
<p></p>
```

## Multiplicar

```text
li*3
```

Resultado:

```html
<li></li>
<li></li>
<li></li>
```

## Texto

```text
p{Hola mundo}
```

Resultado:

```html
<p>Hola mundo</p>
```

## Ejemplo combinado

```text
ul.menu>li.item*3>a{Opción $}
```

Resultado:

```html
<ul class="menu">
    <li class="item"><a>Opción 1</a></li>
    <li class="item"><a>Opción 2</a></li>
    <li class="item"><a>Opción 3</a></li>
</ul>
```

---

# 14. SEO

**SEO** = Search Engine Optimization.

Son técnicas para ayudar a que una página sea entendida y encontrada por los motores de búsqueda.

HTML semántico ayuda al SEO porque proporciona significado y estructura.

## Elementos importantes

### `<title>`

```html
<title>Curso de HTML</title>
```

Es el título que normalmente aparece en la pestaña del navegador.

### Descripción

```html
<meta
    name="description"
    content="Curso básico de HTML y desarrollo web"
>
```

### Títulos correctos

```html
<h1>Curso de HTML</h1>

<h2>Introducción</h2>

<h2>Etiquetas</h2>
```

### Contenido semántico

Preferir:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

cuando corresponda.

---

# 15. UX y UI

## UI

**UI = User Interface**

Se refiere a cómo se ve y cómo están organizados los elementos de una interfaz.

Ejemplos:

* Botones
* Colores
* Tipografías
* Menús
* Iconos
* Espaciado

## UX

**UX = User Experience**

Se refiere a cómo es la experiencia del usuario al utilizar el sitio.

Ejemplos:

* Facilidad de navegación
* Claridad
* Rapidez
* Accesibilidad
* Comprensión de las acciones
* Flujo de navegación

### Regla sencilla

**UI = cómo se ve**

**UX = cómo se siente y funciona**

---

# 16. Accesibilidad

La accesibilidad busca que las páginas puedan ser utilizadas por el mayor número posible de personas, incluyendo personas con discapacidades.

## Buenas prácticas

* Utilizar HTML semántico
* Utilizar `label` correctamente
* Proporcionar `alt` en imágenes informativas
* Mantener buen contraste
* No depender solamente del color
* Usar textos claros
* Hacer la navegación accesible mediante teclado
* Crear formularios comprensibles

---

# 17. `aria-label`

`aria-label` proporciona un nombre accesible a un elemento.

Ejemplo:

```html
<button aria-label="Cerrar menú">
    X
</button>
```

Esto puede ayudar a tecnologías de asistencia a entender el propósito del botón.

### ⚠️ No usar ARIA porque sí

Primero utiliza HTML semántico correctamente.

Por ejemplo:

```html
<button>Enviar</button>
```

es preferible a intentar convertir cualquier cosa en un botón usando atributos ARIA.

---

# 18. Contraste de color

El texto debe poder distinguirse claramente del fondo.

❌ Texto gris claro sobre fondo blanco.

✅ Texto con suficiente contraste.

El contraste es importante para la accesibilidad y la legibilidad.

Una herramienta útil para comprobarlo:

**Cool Contrast**

---

# 19. Tamaño de fuente

No conviene diseñar suponiendo que todos utilizan exactamente el mismo tamaño de texto.

Ejemplo:

```css
body {
    font-size: 1rem;
}
```

`rem` permite utilizar como referencia el tamaño de fuente raíz.

La accesibilidad incluye permitir que el texto pueda ampliarse sin romper la página.

---

# 20. Responsive

Una página **responsive** adapta su contenido a diferentes tamaños de pantalla.

Debe funcionar correctamente en:

* PC
* Laptop
* Tablet
* Móvil

## Meta viewport

Dentro de `<head>`:

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```

Esta etiqueta es fundamental para el comportamiento responsive en dispositivos móviles.

---

# 21. Multimedia accesible

## Imagen

```html
<img src="foto.jpg" alt="Descripción">
```

## Audio

Cuando sea necesario, proporciona controles:

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
```

## Video

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
</video>
```

Para contenido importante, considera proporcionar alternativas accesibles como subtítulos o transcripciones.

---

# 22. Formularios

Los formularios permiten al usuario introducir información.

Ejemplo:

```html
<form>
    <label for="nombre">Nombre:</label>

    <input
        type="text"
        id="nombre"
        name="nombre"
    >

    <button type="submit">
        Enviar
    </button>
</form>
```

---

# 23. `<label>`

El `<label>` identifica qué campo debe rellenar el usuario.

```html
<label for="email">
    Correo electrónico
</label>

<input
    type="email"
    id="email"
    name="email"
>
```

La relación se realiza mediante:

```text
label for
    ↓
input id
```

Ejemplo:

```html
<label for="nombre">Nombre</label>

<input id="nombre">
```

### Regla

El valor de:

```html
for="nombre"
```

debe coincidir con:

```html
id="nombre"
```

---

# 24. `<input>`

`<input>` permite introducir distintos tipos de información.

## Texto

```html
<input type="text">
```

## Correo

```html
<input type="email">
```

## Contraseña

```html
<input type="password">
```

## Número

```html
<input type="number">
```

## Fecha

```html
<input type="date">
```

## Checkbox

```html
<input type="checkbox">
```

## Radio

```html
<input type="radio">
```

## Archivo

```html
<input type="file">
```

---

# 25. Atributo `name`

El atributo `name` identifica el dato cuando se envía el formulario.

```html
<input
    type="text"
    name="nombre"
>
```

Es especialmente importante en formularios que realmente van a enviar información.

---

# 26. `placeholder`

Muestra una sugerencia dentro del campo.

```html
<input
    type="text"
    placeholder="Escribe tu nombre"
>
```

### ⚠️ `placeholder` NO sustituye a `<label>`

❌

```html
<input placeholder="Correo">
```

✅

```html
<label for="correo">
    Correo electrónico
</label>

<input
    id="correo"
    name="correo"
    placeholder="ejemplo@gmail.com"
>
```

---

# 27. `required`

Hace que un campo sea obligatorio.

```html
<input
    type="text"
    required
>
```

El navegador impedirá normalmente enviar el formulario si el campo está vacío.

---

# 28. Validaciones

HTML permite realizar validaciones básicas sin JavaScript.

## Email

```html
<input
    type="email"
    required
>
```

## Número mínimo

```html
<input
    type="number"
    min="1"
>
```

## Número máximo

```html
<input
    type="number"
    max="100"
>
```

## Longitud mínima

```html
<input
    type="text"
    minlength="3"
>
```

## Longitud máxima

```html
<input
    type="text"
    maxlength="20"
>
```

---

# 29. `autocomplete`

Indica al navegador qué tipo de información representa un campo.

Ejemplo:

```html
<input
    type="email"
    name="email"
    autocomplete="email"
>
```

Otros valores comunes:

```html
name
email
tel
street-address
postal-code
username
current-password
new-password
```

Esto puede mejorar la experiencia del usuario.

---

# 30. `autocapitalize`

Controla la capitalización automática en dispositivos que la soportan.

Ejemplo:

```html
<input
    type="text"
    autocapitalize="words"
>
```

Valores comunes:

```text
none
sentences
words
characters
```

### Ejemplo

```html
<input
    type="text"
    autocapitalize="words"
>
```

Puede ser útil para nombres.

---

# 31. Botones

```html
<button type="submit">
    Enviar
</button>
```

Tipos comunes:

### Enviar formulario

```html
<button type="submit">
    Enviar
</button>
```

### Botón normal

```html
<button type="button">
    Abrir
</button>
```

### Reset

```html
<button type="reset">
    Restablecer
</button>
```

### ⚠️ Importante

Dentro de un `<form>`, un `<button>` sin `type` puede comportarse como botón de envío.

Por claridad, especifica el tipo.

---

# 32. `<textarea>`

Sirve para textos largos.

```html
<label for="mensaje">
    Mensaje
</label>

<textarea
    id="mensaje"
    name="mensaje"
></textarea>
```

---

# 33. `<select>`

Crea una lista de opciones.

```html
<label for="pais">
    País
</label>

<select id="pais" name="pais">
    <option value="mx">México</option>
    <option value="es">España</option>
    <option value="ar">Argentina</option>
</select>
```

---

# 34. `fieldset` y `legend`

Sirven para agrupar controles relacionados.

```html
<fieldset>

    <legend>Datos personales</legend>

    <label for="nombre">
        Nombre
    </label>

    <input
        id="nombre"
        name="nombre"
    >

</fieldset>
```

Son especialmente útiles para formularios y accesibilidad.

---

# 35. Formularios: ejemplo completo

```html
<form>

    <fieldset>

        <legend>Registro</legend>

        <label for="nombre">
            Nombre
        </label>

        <input
            type="text"
            id="nombre"
            name="nombre"
            autocomplete="name"
            required
        >

        <label for="email">
            Correo electrónico
        </label>

        <input
            type="email"
            id="email"
            name="email"
            autocomplete="email"
            required
        >

        <label for="edad">
            Edad
        </label>

        <input
            type="number"
            id="edad"
            name="edad"
            min="1"
            max="120"
        >

        <button type="submit">
            Registrarse
        </button>

    </fieldset>

</form>
```

---

# 36. Errores comunes

## ❌ Usar `<br>` para crear espacios

```html
Texto<br><br><br>
```

Usa CSS para el diseño.

---

## ❌ Usar placeholder como etiqueta

```html
<input placeholder="Nombre">
```

Mejor:

```html
<label for="nombre">
    Nombre
</label>

<input
    id="nombre"
    name="nombre"
    placeholder="Ej. Ana"
>
```

---

## ❌ Elegir `h1`, `h2`, etc. por tamaño

No hagas esto:

```html
<h1>Texto pequeño</h1>
<h4>Texto principal</h4>
```

Los encabezados representan jerarquía.

---

## ❌ Utilizar `<div>` para absolutamente todo

```html
<div>
    <div>
        <div>
            ...
        </div>
    </div>
</div>
```

Si existe una etiqueta semántica adecuada, úsala.

---

## ❌ Crear botones falsos

```html
<div onclick="hacerAlgo()">
    Enviar
</div>
```

Preferible:

```html
<button type="button">
    Enviar
</button>
```

Los elementos HTML adecuados ya proporcionan comportamiento y accesibilidad.

---

# 37. Cheat Sheet rápido

| Necesito...         | Utilizo         |
| ------------------- | --------------- |
| Título principal    | `<h1>`          |
| Subtítulo           | `<h2>`          |
| Párrafo             | `<p>`           |
| Enlace              | `<a>`           |
| Imagen              | `<img>`         |
| Lista               | `<ul>` / `<ol>` |
| Elemento de lista   | `<li>`          |
| Cabecera            | `<header>`      |
| Navegación          | `<nav>`         |
| Contenido principal | `<main>`        |
| Sección             | `<section>`     |
| Artículo            | `<article>`     |
| Contenido adicional | `<aside>`       |
| Pie de página       | `<footer>`      |
| Contenedor genérico | `<div>`         |
| Formulario          | `<form>`        |
| Etiqueta de campo   | `<label>`       |
| Campo               | `<input>`       |
| Texto largo         | `<textarea>`    |
| Opciones            | `<select>`      |
| Botón               | `<button>`      |
| Agrupar formulario  | `<fieldset>`    |
| Nombre de grupo     | `<legend>`      |
| Salto de línea      | `<br>`          |

---

# 38. Atributos que conviene recordar

| Atributo         | Para qué sirve                  |
| ---------------- | ------------------------------- |
| `id`             | Identificador único             |
| `class`          | Agrupar elementos para CSS/JS   |
| `href`           | Dirección de un enlace          |
| `src`            | Ruta de un recurso              |
| `alt`            | Texto alternativo de imágenes   |
| `title`          | Información adicional           |
| `name`           | Nombre de un dato de formulario |
| `value`          | Valor de un control             |
| `placeholder`    | Sugerencia en un campo          |
| `required`       | Campo obligatorio               |
| `disabled`       | Desactiva un control            |
| `readonly`       | Hace un campo de solo lectura   |
| `autocomplete`   | Ayuda al autocompletado         |
| `autocapitalize` | Controla mayúsculas automáticas |
| `aria-label`     | Nombre accesible                |
| `target`         | Define dónde abrir un enlace    |

---

# 39. Checklist antes de terminar una página

### Estructura

* [ ] ¿Tengo `<!DOCTYPE html>`?
* [ ] ¿Tengo `<html lang="es">`?
* [ ] ¿Tengo `<head>`?
* [ ] ¿Tengo `<meta charset="UTF-8">`?
* [ ] ¿Tengo `viewport`?
* [ ] ¿Tengo `<title>`?
* [ ] ¿Tengo `<body>`?

### Semántica

* [ ] ¿Estoy usando `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` y `<footer>` cuando corresponde?
* [ ] ¿Estoy evitando usar `<div>` innecesariamente?
* [ ] ¿Los encabezados tienen una jerarquía lógica?

### Accesibilidad

* [ ] ¿Las imágenes importantes tienen `alt`?
* [ ] ¿Los formularios tienen `<label>`?
* [ ] ¿Hay suficiente contraste?
* [ ] ¿Los elementos se pueden utilizar con teclado?
* [ ] ¿Los botones dicen claramente qué hacen?

### Formularios

* [ ] ¿Cada campo tiene `name` cuando corresponde?
* [ ] ¿Los `label` están conectados con los `input`?
* [ ] ¿Estoy usando el `type` correcto?
* [ ] ¿Uso `required` cuando el campo debe ser obligatorio?
* [ ] ¿Uso `autocomplete` cuando es útil?
* [ ] ¿Uso `placeholder` como ayuda y no como sustituto de `label`?

---

# 40. Regla mental para HTML

Cuando tengas una duda, piensa:

```text
¿Qué contenido tengo?
        ↓
¿Qué significa?
        ↓
¿Qué etiqueta representa ese significado?
        ↓
¿Es accesible?
        ↓
¿Está bien estructurado?
```

HTML no debería responder solamente a:

> "¿Cómo hago que se vea así?"

También debería responder:

> "¿Qué significa este contenido?"

Esa diferencia es básicamente la que separa una página hecha a base de etiquetas tiradas por ahí de una página web bien construida.
