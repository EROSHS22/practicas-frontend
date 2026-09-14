# CSS — Referencia rápida

## Custom properties (variables CSS)

```css
:root {
  --color-primario: #6366f1;
  --espaciado: 1rem;
}

.card {
  color: var(--color-primario);
  padding: var(--espaciado);
}

/* con fallback */
.card { color: var(--color-secundario, black); }
```

- Se declaran con `--nombre` y se usan con `var(--nombre)`.
- Son heredables y se pueden sobreescribir en cualquier selector (no solo `:root`), útil para temas o modo oscuro:

```css
[data-theme="dark"] { --color-primario: #a5b4fc; }
```

- No se pueden usar dentro de media queries como valor de breakpoint (`@media (width >= var(--x))` no jala).

---

## Especificidad

De menor a mayor peso:

1. `*` (universal) — 0,0,0,0
2. Elemento / pseudo-elemento (`div`, `::before`) — 0,0,0,1
3. Clase, atributo, pseudo-clase (`.card`, `[type]`, `:hover`) — 0,0,1,0
4. ID (`#header`) — 0,1,0,0
5. `style="..."` inline — 1,0,0,0
6. `!important` — gana a todo lo anterior (evitar, es la última opción)

Reglas prácticas:
- A igual especificidad, gana la que está **después** en el CSS (orden de cascada).
- `.card.destacada` (dos clases) pesa más que `.card` sola.
- Prefiere clases sobre IDs para estilos; usa IDs para JS/anchors, no para CSS.

---

## Reset

Objetivo: quitar estilos por defecto inconsistentes entre navegadores antes de empezar a diseñar.

Lo mínimo que suele llevar un reset:

```css
*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; padding: 0; }
img, picture, video, canvas, svg { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }
ul, ol { list-style: none; }
```

- Va **siempre primero** en el `<link>`, antes de tus estilos propios (si va después, te pisa reglas).
- `box-sizing: border-box` es el más importante: hace que `padding` y `border` no sumen al `width` que definiste.

---

## Pseudo-clases vs pseudo-elementos

**Pseudo-clase** (`:`) — un *estado* de un elemento que ya existe.
```css
a:hover { color: red; }
li:first-child { font-weight: bold; }
input:focus { outline: 2px solid blue; }
li:nth-child(odd) { background: #eee; }
```

**Pseudo-elemento** (`::`) — genera algo que *no existe* en el DOM.
```css
.card::before { content: "★"; }
p::first-line { font-weight: bold; }
::placeholder { color: gray; }
```

Truco para no confundirlos: si describe un *estado* → pseudo-clase (`:`). Si *crea* contenido/parte visual nueva → pseudo-elemento (`::`).

---

## Layout: Flexbox

Unidimensional (una fila o una columna).

```css
.contenedor {
  display: flex;
  flex-direction: row;       /* row | column */
  justify-content: center;   /* eje principal: flex-start, center, space-between, space-around */
  align-items: center;       /* eje cruzado: flex-start, center, stretch */
  flex-wrap: wrap;           /* permite pasar a la siguiente línea */
  gap: 1rem;
}

.item {
  flex-grow: 1;    /* qué tanto crece si sobra espacio */
  flex-shrink: 1;  /* qué tanto se encoge si falta espacio */
  flex-basis: 200px; /* tamaño base antes de crecer/encoger */
}
```

- `justify-content` = eje principal (depende de `flex-direction`).
- `align-items` = eje cruzado (perpendicular al principal).
- `margin-top: auto` en un item empuja todo lo que sigue hacia abajo (truco para footers pegados a botones, como en las cards del ejercicio 3).

Practicar: [Flexbox Froggy](https://flexboxfroggy.com/#es)

---

## Layout: Grid

Bidimensional (filas y columnas a la vez).

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);   /* 3 columnas iguales */
  grid-template-columns: 200px 1fr 1fr;    /* mixto */
  grid-template-rows: auto 1fr auto;
  gap: 2rem;
}

.item-grande {
  grid-column: span 2;   /* ocupa 2 columnas */
}
```

- `repeat(auto-fit, minmax(200px, 1fr))` = columnas responsivas sin media queries: caben las que quepan según el ancho, mínimo 200px cada una.
- Flexbox para alinear cosas en una dirección (nav, botones), Grid para layouts de página completa o galerías/cards.

Practicar: [CSS Grid Garden](https://cssgridgarden.com/#es)

---

## `gap`

Funciona en flex y en grid, reemplaza el viejo truco de márgenes en los hijos.

```css
.contenedor { display: flex; gap: 1rem; }          /* espacio horizontal y vertical */
.contenedor { display: grid; gap: 1rem 2rem; }     /* fila columna */
```

No necesitas `margin` en los items para separarlos si usas `gap` en el padre.

---

## Unidades de medida

| Unidad | Relativa a | Uso típico |
|---|---|---|
| `px` | nada, fija | bordes finos (1px), cosas que no deben escalar |
| `rem` | font-size del `html` | tipografía, spacing, la opción por defecto para casi todo |
| `em` | font-size del elemento padre | cuando quieres que algo escale junto con el texto de su contenedor (ej. padding de un botón según su propio font-size) |
| `%` | tamaño del elemento padre | anchos fluidos (`width: 50%`) |
| `vw` / `vh` | 1% del ancho / alto del viewport | elementos a pantalla completa, hero sections |
| `dvh` | igual que `vh` pero se recalcula si cambia el viewport visible | alto de pantalla completa en móvil (evita el bug de la barra de direcciones) |

Regla rápida: tipografía y spacing → `rem`. Layout fluido → `%` o `fr` (grid). Pantalla completa → `dvh`, no `vh`, si es para móvil.

---

## Media queries (sintaxis nueva)

```css
/* Vieja sintaxis */
@media (min-width: 768px) { }

/* Nueva sintaxis (range syntax) */
@media (width >= 768px) { }
@media (400px <= width <= 768px) { }
```

[Referencia de la sintaxis nueva](https://dev.to/duxtech/media-queries-range-syntax-1o2l#id2)

---

## Mobile-first

```css
/* Base: estilos para móvil */
.grid-cards { grid-template-columns: 1fr; }

/* Se agrega, no se quita, conforme crece el ancho */
@media (width >= 768px) {
  .grid-cards { grid-template-columns: repeat(2, 1fr); }
}
@media (width >= 1024px) {
  .grid-cards { grid-template-columns: repeat(3, 1fr); }
}
```

Reglas de oro:
- Los estilos base (fuera de cualquier `@media`) son los de la pantalla más chica.
- Las media queries usan `>=` (nunca `<=` para "agregar cosas al crecer").
- No olvides `<meta name="viewport" content="width=device-width, initial-scale=1">` en el `<head>` — sin esto el celular renderiza como escritorio y ninguna media query se dispara.
- Comprobar con DevTools → modo de dispositivo (Ctrl+Shift+M), no estrechando la ventana del navegador de escritorio.

---

## Cómo se traduce esto a Tailwind

| CSS puro | Tailwind |
|---|---|
| `display: flex; align-items: center;` | `flex items-center` |
| `justify-content: space-between;` | `justify-between` |
| `display: grid; grid-template-columns: repeat(3, 1fr);` | `grid grid-cols-3` |
| `gap: 1rem;` | `gap-4` |
| `@media (width >= 768px) { grid-template-columns: repeat(3,1fr); }` | `md:grid-cols-3` |
| `@media (width >= 1024px) { ... }` | `lg:...` |
| `:hover` | `hover:...` |
| `--color-primario` | tokens del theme (`bg-primary` si lo configuras) |

Tailwind es mobile-first por defecto: una clase sin prefijo (`grid-cols-1`) es la base, y `md:`/`lg:` son exactamente `@media (width >= 768px)` y `@media (width >= 1024px)`. Si entiendes bien flexbox, grid y mobile-first en CSS puro, Tailwind es solo memorizar nombres de clases para lo mismo que ya sabes hacer.