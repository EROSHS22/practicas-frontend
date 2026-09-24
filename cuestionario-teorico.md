### HTML y accesibilidad

**¿Qué diferencia hay entre `<div>` y `<section>`? ¿Cuándo usarías cada uno?**
> `<div>` es un contenedor genérico sin valor semántico, `<section>` aporta semántica e indica el contenido agrupado.

**Tienes un botón que sólo contiene un icono SVG. ¿Qué le falta para que sea accesible y por qué?**
> El atributo `aria-label` para dejar claro qué acción hace el botón.

**¿Para qué sirve el atributo `for` de un `<label>`?**
> Vincula la etiqueta de texto con un input.

---

### Estilos y Tailwind

**¿Qué son las custom properties de CSS y qué ventaja tienen sobre repetir el valor?**
> Son variables nativas, centralizan valores de diseño.

**En Tailwind, ¿qué diferencia hay entre `theme` y `theme.extend` en la configuración?**
> `theme` sobrescribe por completo los valores por default de Tailwind, `theme.extend` solo añade valores personalizados.

**`md:flex-row` ¿se aplica sólo en tablet? Explica qué significa que Tailwind sea mobile-first.**
> Significa que los estilos se aplican a pantallas más pequeñas y los breakpoints a medida que la pantalla crece.

**¿Por qué `:class="text-${color}-500"` no funciona en Tailwind?**
> No funciona ya que Tailwind solo compila cadenas de texto completas y estáticas, no es dinámico.

**¿Por qué es mejor extraer un componente que usar `@apply`?**
> Por la unificación del HTML y la lógica en un solo lugar, y es reutilizable.

---

### JavaScript

**Diferencias entre `var`, `let` y `const`. ¿Cuál usas por defecto y por qué?**
> `var`: scope más amplio provocando bugs y vulnerabilidad. `let`: scope de bloque al igual que `const`. `let` se usa cuando sabes que el valor va a cambiar, `const` para algo que no va a cambiar.

**¿Cuáles son los valores falsy de JavaScript?**
> Valores que evalúan como falsos en un contexto booleano.

**¿Qué diferencia hay entre `||` y `??`? Pon un caso en el que dan resultados distintos.**
> `||` evalúa cualquier valor falsy mientras `??` evalúa solamente `null` o `undefined`.

**¿Qué diferencia hay entre `map` y `forEach`?**
> `map` procesa todo en un array y devuelve un nuevo array con datos transformados. `forEach` solo recorre el array.

**¿Qué devuelve `find` si no encuentra nada? ¿Y `filter`?**
> `find`: `undefined` | `filter`: `[]`

**¿Qué hace el optional chaining (`?.`) y qué problema te ahorra?**
> Ahorra escribir validaciones y te protege de que se rompa la aplicación.

**¿Qué es el hoisting?**
> La prioridad de comportamiento de las funciones y declaraciones.

---

### TypeScript

**¿Para qué sirve TypeScript? ¿Qué te aporta si el código ya funcionaba en JavaScript?**
> Es JavaScript pero tipado. Añade un sistema de tipado con lo que podemos confiar en que los datos que nos dan tienen el tipo de dato esperado.

**¿Por qué `unknown` es más seguro que `any`?**
> `any` desactiva el tipado, `unknown` en TypeScript te obliga a verificar el valor antes de ejecutar.

**¿Qué ventaja tiene `Pick<Dog, "name">` frente a escribir una interface nueva a mano?**
> Vinculación de tipo directamente en la interfaz.

**¿Para qué se usa un genérico (`<T>`)?**
> Se pueden crear funciones, clases o interfaces reutilizables donde se puede trabajar con múltiples tipos de datos.

---

### Vue

**¿Qué es la reactividad?**
> Sistema donde rastrea automáticamente qué variables se están usando y actualiza el DOM de forma eficiente.

**Diferencias entre `v-if` y `v-show`. ¿Cuándo usarías cada uno?**
> `v-if` destruye y crea el nodo en el DOM. `v-show` altera la propiedad del CSS.

**¿Cómo se comunica un componente hijo con su padre? ¿Y un padre con su hijo?**
> Un padre con su hijo mediante `props`, y un hijo con su padre con un evento mediante `emits`.

**Diferencias entre `computed` y `watch`. ¿Cuál usarías para calcular un total?**
> `computed`: cuando se necesite calcular y retornar un valor. `watch`: se ocupa cuando necesitas checar una variable para reaccionar a su cambio sin devolver un valor.

**¿Qué es un composable y para qué sirve?**
> Funciones que extraen y agrupan lógica de estado reactiva.

**¿Cuándo tiene sentido usar Pinia en lugar de pasar props?**
> Cuando necesitamos mantener un estado compartido o acceder a los mismos datos desde componentes alejados.

---

### Nuxt

**¿Qué diferencia hay entre SSR y CSR? ¿Qué ventaja tiene el SSR para el SEO?**
> SSR (Server-Side Rendering): el servidor ensambla el HTML y se lo entrega al navegador. CSR (Client-Side Rendering): el HTML llega sin nada y JavaScript lo construye posteriormente.

**¿Cuándo se usa `useFetch` y cuándo `$fetch`?**
> `useFetch` es un composable que se utiliza para cargar la información que construye las vistas.

**¿Para qué sirve un layout?**
> Envoltorio visual común alrededor del contenido principal.

**¿Para qué sirve un middleware? Pon un ejemplo real.**
> Interceptan al usuario antes de darle permiso de navegar a una ruta específica. Un ejemplo sería un middleware de autenticación que revisa si hay un token válido; si no lo hay, no le da acceso.

**¿Por qué es importante devolver un 404 de verdad y no sólo pintar "no encontrado"?**
> Por el status de código de error. Cuando pone "no encontrado" y es un código 200, Google pensará que es una página válida cuando no lo es. Con el código 404 la descartan.

---

### Git y forma de trabajar

**¿Desde qué rama se crean siempre las ramas nuevas?**
> De la rama principal (`main`).

**¿Cuándo se puede trabajar directamente sobre `main`?**
> Nunca se debe trabajar en `main`, solo con PR (Pull Request) o Merge tras el proceso de pruebas y revisiones.

**¿Qué son los conventional commits? Diferencia entre feat, fix y chore.**
> Estándar de sintaxis de descripción para commits. `feat`: introducción de características nuevas. `fix`: reparar un bug o error. `chore`: cosas que no alteren el código funcional.

**¿Qué es un linter y qué problema resuelve en un equipo?**
> Herramienta que analiza el código para detectar errores tempranos y fuerza un estilo de formato estándar.

**¿Qué es la deuda técnica?**
> Es el costo que asume un proyecto por haber elegido una solución incorrecta o código mal diseñado para salir del paso de algún problema.
