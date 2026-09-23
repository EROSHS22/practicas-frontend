Cuestionario teórico final
Responde a las siguientes preguntas. Se necesita mínimo un 7 para aprobar.

Respuestas cortas: con dos o tres frases bien explicadas es suficiente. Se valora más que entiendas el concepto que que copies la definición.

HTML y accesibilidad
¿Qué diferencia hay entre <div> y <section>? ¿Cuándo usarías cada uno?
*R-> Div contenedor genrico sin valor semantico, section aporta semantica e indica el contenido agrupado*
Tienes un botón que sólo contiene un icono SVG. ¿Qué le falta para que sea accesible y por qué?
*R-> Atributo arial-label para dejar claro que accion hace el boton*
¿Para qué sirve el atributo for de un <label>?
*R-> Vincula la etiqueta de texto con un input*
Estilos y Tailwind
¿Qué son las custom properties de CSS y qué ventaja tienen sobre repetir el valor?
*R-> Variables nativas, centralizan valores de diseño*
En Tailwind, ¿qué diferencia hay entre theme y theme.extend en la configuración?
*R-> Theme sobre escribe por completo los valores por default de tailwind, theme.extend solo añade valores personalizados*
md:flex-row ¿se aplica sólo en tablet? Explica qué significa que Tailwind sea mobile-first.
*R-> Significa que los estilos se aplican a pantallas mas pequeñas los breakpoints a medida de que la pantalla crece*
¿Por qué :class="text-${color}-500" no funciona en Tailwind?
*R-> No funciona ya que tailwind solo compila cadenas de texto complestas y estaticas no es dinamico*
¿Por qué es mejor extraer un componente que usar @apply?
*R-> unificacion del HTML, logica en un solo lugar y es reutilizable*
JavaScript
Diferencias entre var, let y const. ¿Cuál usas por defecto y por qué?
*R-> var: scope mas amplio provocando bugs, vulnerabilidad, let: scope de bloque al igual que const, let se usa cuando sabes que el valor va cambiar, const algo que no va cambiar*
¿Cuáles son los valores falsy de JavaScript?
*R-> valores que evaluan como falsos en un contexto booleaneo*
¿Qué diferencia hay entre || y ??? Pon un caso en el que dan resultados distintos.
*R-> || evalua cualquier valor falsy mientras ?? evalua solamente null o undefined*
¿Qué diferencia hay entre map y forEach?
*R-> map: procesa todo en un array  y devuelve un nuevo array con datos transformados foreach solo recorre el array*
¿Qué devuelve find si no encuentra nada? ¿Y filter?
*R-> find: undefined , filter: []
¿Qué hace el optional chaining (?.) y qué problema te ahorra?
*R-> ahorra escribir validaciones y te proteje de que se rompa la aplicacion*
¿Qué es el hoisting?
*R-> la prioridad de comportamiento de las funciones, declaraciones* 
TypeScript
¿Para qué sirve TypeScript? ¿Qué te aporta si el código ya funcionaba en JavaScript?
*R-> es javascript pero tipado, añade un sistema de tipado con lo que podemos confiar que los datos que nos dan tiene el tipo de dato esperado*
¿Por qué unknown es más seguro que any?
*R-> any desativa el tipado, unknow typescript te obliga a verificar el valor antes de ejecutar*
¿Qué ventaja tiene Pick<Dog, "name"> frente a escribir una interface nueva a mano?
*R-> vinculacion de tipo directamente en la intefaz*
¿Para qué se usa un genérico (<T>)?
*R-> se puede crear funciones, clases o interfaces reutilizables donde se puede trabajar con multiples tipos de datos*
Vue
¿Qué es la reactividad?
*R-> sistema donde rastrea automaticamente que variables se estan usando y actualoza el DOM de forma eficiente*
Diferencias entre v-if y v-show. ¿Cuándo usarías cada uno?
*R-> destruye y crea el nodo en el DOM, vshow: altera propieda del css*
¿Cómo se comunica un componente hijo con su padre? ¿Y un padre con su hijo?
*R-> mediante el props con un evento  mediante emits*
Diferencias entre computed y watch. ¿Cuál usarías para calcular un total?
*R-> computed: cuando se nesecite calcular y retorna un valo, watch: se ocupa cuando nesecitas checar una variable para reaccionar a su cambio sin devolver un valor*
¿Qué es un composable y para qué sirve?
*R-> funciones que extraen  y agrupan logica de estado reactiva*
¿Cuándo tiene sentido usar Pinia en lugar de pasar props?
*R-> Cuando nesecitamos mantener un estado compartido o acceder a los mismos datos desde componetes alejados*

Nuxt
¿Qué diferencia hay entre SSR y CSR? ¿Qué ventaja tiene el SSR para el SEO?
*R-> SSR server-side rendering el servidor ensambla el html y se lo entrega al navegador, Client-side (CSR) el html llega sin nada y javascript lo construye posteriormente*
¿Cuándo se usa useFetch y cuándo $fetch?
*R-> es un composable que se utiliza para cargar la informacion  que construye vistas*
¿Para qué sirve un layout?
*R-> envoltorio visual comun alrededor del contenido principal*
¿Para qué sirve un middleware? Pon un ejemplo real.
*R-> Interceptan al usuario antes de darle permiso de navegar a una ruta especifica un ejemplo seria un middleware de autentificacion que revisa si hay un token valido, si no lo hay no le da acceso*
¿Por qué es importante devolver un 404 de verdad y no sólo pintar "no encontrado"?
*R-> por el status de codigo de error cuando pone no encontrado es un 200 google pensara que es una pagina validad cuando no lo es con el 404 lo descartan*
Git y forma de trabajar
¿Desde qué rama se crean siempre las ramas nuevas?
*R-> de la rama principal (main)*
¿Cuándo se puede trabajar directamente sobre main?
*R-> nunca se debe trabajar en main solo con PR o MERGE tras el proceso de pruebas y revisiones*
¿Qué son los conventional commits? Diferencia entre feat, fix y chore.
*R-> estandar de sintaxis de descripcion  para commits feat: introducion de carateristicas nuevas, fix: reparar un bug o error, chore: cosas que no alteren el codigo funcional*
¿Qué es un linter y qué problema resuelve en un equipo?
*R-> Herramienta que analiza el codigo para dectetar errores tempranos y fuerza un estilo de formato estandar*
¿Qué es la deuda técnica?
*R-> Es el costo que asume un proyecto por a ver legido una solucion incorrecta o codigo mal diseñado para salir del paso algun problema*