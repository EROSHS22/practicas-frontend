# Ejercicio 3 Tailwind - Responsive, estados y dark mode


## Preguntas

md:flex-row y mobile-first: Se aplica en tablet y en todas las pantallas superiores (lg, xl, etc.). Es mobile-first porque Tailwind usa reglas min-width: los estilos sin prefijo aplican a móviles y cada breakpoint añade o sobrescribe estilos hacia arriba.

Solo visible en móvil: Se usa block md:hidden (o flex md:hidden). Se muestra por defecto en pantallas pequeñas y se oculta (display: none) a partir de 768px.

darkMode: "class" vs "media":

"media": Automático. Depende del ajuste del sistema operativo (prefers-color-scheme); no permite botón en la interfaz.

"class": Manual. Se activa solo agregando class="dark" a <html>, permitiendo alternarlo con un botón y JavaScript.
