# JavaScript — Referencia rápida

## Variables

**Nomenclatura:**

| Estilo | Ejemplo | Uso en JS |
|---|---|---|
| camelCase | `nombreUsuario` | variables, funciones (el estándar en JS) |
| PascalCase | `NombreUsuario` | clases, componentes (React) |
| snake_case | `nombre_usuario` | casi no se usa en JS, sí en Python/DB |
| kebab-case | `nombre-usuario` | nombres de archivo, clases CSS, no variables JS |
| SCREAMING_SNAKE | `API_URL` | constantes globales/config |

**`const`, `let`, `var`:**

```js
var x = 1;   // function-scoped, hoisting raro, evitar
let y = 2;   // block-scoped, se puede reasignar
const z = 3; // block-scoped, no se puede reasignar (pero si es objeto/array, su contenido sí)
```

- Default: usa `const`. Si necesitas reasignar, `let`. `var` casi nunca (scope de función, no de bloque → bugs).
- `const arr = [1,2]; arr.push(3);` es válido — `const` bloquea la reasignación de la variable, no la mutación del contenido.

---

## Clean Code — lo esencial

- **Nombres buscables**: nada de `x`, `tmp`, `d`. `const diasRestantes = 5` en vez de `const d = 5`.
- **Evita mapeo mental**: que el nombre diga qué es, para no tener que "traducir" en tu cabeza (`u` → usuario cada vez que lo lees).
- **Evita contexto innecesario**: si la clase ya se llama `Coche`, el método no necesita llamarse `coche.cocheColor()`, con `coche.color()` basta.
- **Máximo 2 argumentos por función** (idealmente). Si necesitas más, pasa un objeto: `crearUsuario({ nombre, edad, email })` en vez de `crearUsuario(nombre, edad, email, activo, rol)`.
- **No dupliques código**: si copy-pasteas algo dos veces, extráelo a una función.
- **Evita efectos secundarios inesperados**: una función que dice `calcularTotal()` no debería, de paso, guardar algo en `localStorage` o mutar una variable global. Que haga lo que dice que hace y nada más.
- **No encapsules condicionales sin nombre**: en vez de `if (fecha.getMonth() > 6 && fecha.getFullYear() < 2024)`, usa `if (esFechaValida(fecha))`.
- **Evita condicionales negativos**: `if (!esInvalido)` es más difícil de leer que `if (esValido)`.
- **Evita comprobación manual de tipos** (`typeof x === "string"` regado por todo el código) — si el proyecto lo permite, usa TypeScript.
- **Elimina código muerto**: funciones o bloques que ya no se llaman desde ningún lado, bórralos (para eso está git).
- **Clases de ES6 mejor que funciones constructoras de ES5.**
- **Composición mejor que herencia** cuando puedas: en vez de heredar de una clase gigante, arma el objeto combinando piezas más chicas.
- **`async/await` mejor que `.then()` encadenado** — se lee lineal, más fácil de seguir.
- **No ignores errores atrapados**: un `catch (e) {}` vacío es una bomba de tiempo. Como mínimo, `console.error(e)`.
- **Comenta solo lógica compleja**, no lo obvio (`// suma dos números` arriba de `a + b` sobra).
- **No uses comentarios como marcadores** (`////////// SECCIÓN LOGIN //////////`) — si necesitas dividir así, probablemente ese archivo debería partirse en varios.

---

## Magic strings / magic numbers

Valores literales regados por el código sin explicación de qué significan.

```js
// mal
if (status === 3) { ... }

// bien
const STATUS_APROBADO = 3;
if (status === STATUS_APROBADO) { ... }
```

Facilita cambiar el valor en un solo lugar y que el código se explique solo.

---

## Principios SOLID (aplicados a JS, resumen)

- **S** — Single Responsibility: una función/clase hace una sola cosa.
- **O** — Open/Closed: se puede extender sin modificar el código existente (ej. agregar un nuevo tipo sin tocar el `switch` de los demás).
- **L** — Liskov Substitution: una subclase debe poder reemplazar a su clase padre sin romper nada.
- **I** — Interface Segregation: mejor varias interfaces chicas y específicas que una gigante que obliga a implementar cosas que no usas.
- **D** — Dependency Inversion: depende de abstracciones, no de implementaciones concretas (ej. recibe el `fetch` como parámetro en vez de llamarlo directo adentro, para poder mockearlo en tests).

## DRY (Don't Repeat Yourself)

Si la misma lógica aparece en 2+ lugares, extráela a una función/módulo compartido. La señal de alerta es copy-paste con mínimos cambios.

## Early return

```js
// anidado, difícil de leer
function procesar(usuario) {
  if (usuario) {
    if (usuario.activo) {
      return hacerAlgo(usuario);
    }
  }
  return null;
}

// early return
function procesar(usuario) {
  if (!usuario) return null;
  if (!usuario.activo) return null;
  return hacerAlgo(usuario);
}
```

Sal de la función apenas sepas que no hay nada más que hacer, en vez de anidar `if`s.

## Deuda técnica

Todo atajo que tomas ahora ("lo dejo así por ahora, luego lo arreglo") y que te va a costar tiempo extra después. No es necesariamente malo — a veces es la decisión correcta por tiempo/presupuesto — pero hay que ser consciente de que se está generando y, idealmente, dejarlo anotado (TODO, ticket, etc).

---

## Destructuring

```js
const usuario = { nombre: "Ana", edad: 30, email: "a@x.com" };
const { nombre, edad } = usuario;
const { email: correo } = usuario; // renombrar

const numeros = [1, 2, 3];
const [primero, segundo] = numeros;

// en parámetros de función
function saludar({ nombre, edad }) {
  return `Hola ${nombre}, tienes ${edad}`;
}

// con valor default
const { rol = "usuario" } = usuario;
```

## IIFE (Immediately Invoked Function Expression)

```js
(function () {
  // corre una sola vez, apenas se define
  console.log("init");
})();
```

Se usaba para evitar contaminar el scope global antes de que existieran los módulos ES6. Hoy es poco común salvo casos puntuales (ej. inicializadores que no quieres exponer).

## Template strings

```js
const nombre = "Pindar";
console.log(`Hola, ${nombre}. Tienes ${2024 - 1998} años.`);

// multilínea
const html = `
  <div>
    <p>${nombre}</p>
  </div>
`;
```

## Nullish coalescing (`??`)

```js
const valor = entrada ?? "default";
```

Solo usa el default si `entrada` es `null` o `undefined` — a diferencia de `||`, que también lo usaría si `entrada` es `0`, `""` o `false` (falsy pero válido).

```js
const cantidad = 0;
cantidad || 10  // → 10 (bug si 0 es un valor válido)
cantidad ?? 10  // → 0 (correcto)
```

## Optional chaining (`?.`)

```js
const ciudad = usuario?.direccion?.ciudad; // undefined si algo en el camino no existe, sin explotar
usuario?.metodoQueTalVezNoExiste?.();       // funciona también con llamadas a función
```

Evita el clásico `Cannot read property 'x' of undefined`.

## Spread y rest

```js
// spread: "desempaqueta"
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];        // [1,2,3,4]
const obj2 = { ...obj1, extra: 1 };  // copia + agrega/sobreescribe

// rest: "empaqueta" lo que sobra
function sumar(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}
const [primero, ...resto] = [1, 2, 3]; // primero=1, resto=[2,3]
```

---

## Scope

- **Global**: accesible desde cualquier parte del archivo/programa.
- **Function scope**: `var` vive dentro de toda la función, sin importar bloques `{}`.
- **Block scope**: `let`/`const` viven solo dentro del `{}` donde se declararon (`if`, `for`, etc).

```js
if (true) {
  var a = 1;
  let b = 2;
}
console.log(a); // 1 (var se "escapó" del bloque)
console.log(b); // ReferenceError
```

## Hoisting

JS "sube" las declaraciones al inicio de su scope antes de ejecutar el código — pero no de la misma forma para todo.

```js
console.log(x); // undefined (no error) — la declaración se subió, la asignación no
var x = 5;

console.log(y); // ReferenceError — existe en el "temporal dead zone" pero no se puede usar antes de declararse
let y = 5;

saludar(); // funciona — las function declarations se suben completas
function saludar() { console.log("hola"); }

decir(); // TypeError — las function expressions NO se suben con su valor
const decir = function () { console.log("hey"); };
```

- `var` → hoisting con valor `undefined`.
- `let`/`const` → hoisting pero sin inicializar (zona muerta temporal, error si la usas antes).
- Funciones declaradas con `function nombre(){}` → se suben completas, se pueden llamar antes de donde están escritas en el código.

---

## Clases en JavaScript

```js
class Usuario {
  #password; // campo privado (# = privado real, no por convención)

  constructor(nombre, password) {
    this.nombre = nombre;
    this.#password = password;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }

  static crearInvitado() {
    return new Usuario("Invitado", null);
  }
}

class Admin extends Usuario {
  constructor(nombre, password) {
    super(nombre, password);
    this.rol = "admin";
  }
}
```

- `static` = método/propiedad de la clase, no de la instancia (`Usuario.crearInvitado()`, no `usuario.crearInvitado()`).
- `#campo` = privado de verdad, no accesible desde fuera de la clase.
- `extends` + `super()` = herencia (recuerda: composición > herencia cuando se pueda).

## Comparaciones de igualdad

```js
1 == "1"   // true  (convierte tipos antes de comparar)
1 === "1"  // false (compara tipo y valor, sin conversión)

null == undefined   // true
null === undefined  // false

NaN === NaN  // false (¡NaN nunca es igual a NaN!)
Object.is(NaN, NaN) // true
```

Usa siempre `===` / `!==`. `==` casi nunca es lo que quieres (excepción común: `if (x == null)` para cachar `null` y `undefined` a la vez, a propósito).

---

## JSON

```js
const obj = { nombre: "Ana", edad: 30 };

const texto = JSON.stringify(obj);        // objeto → string: '{"nombre":"Ana","edad":30}'
const objDeVuelta = JSON.parse(texto);    // string → objeto

// stringify con formato legible
JSON.stringify(obj, null, 2);
```

`JSON.stringify` ignora `undefined`, funciones, y `Symbol`. `Date` se convierte a string ISO.

---

## Colecciones

**Objetos** — clave-valor, claves normalmente strings/símbolos:
```js
const obj = { a: 1, b: 2 };
Object.keys(obj);    // ['a', 'b']
Object.values(obj);  // [1, 2]
Object.entries(obj); // [['a',1], ['b',2]]
```

**Map** — clave-valor, pero la clave puede ser cualquier tipo (objeto, función, etc), y mantiene el orden de inserción:
```js
const mapa = new Map();
mapa.set("a", 1);
mapa.set({ x: 1 }, "valor con objeto como clave");
mapa.get("a");     // 1
mapa.has("a");     // true
mapa.size;         // 2
for (const [clave, valor] of mapa) { ... }
```

**Set** — colección de valores únicos, sin duplicados:
```js
const set = new Set([1, 2, 2, 3]); // Set {1, 2, 3}
set.add(4);
set.has(2); // true
[...set];   // convertir a array: [1,2,3,4]

// caso de uso típico: quitar duplicados de un array
const sinDuplicados = [...new Set([1,1,2,3,3])]; // [1,2,3]
```

---

## Bucles e iteraciones

```js
for (let i = 0; i < arr.length; i++) { ... }        // for clásico, cuando necesitas el índice

for (const item of arr) { ... }                      // for...of → itera VALORES (arrays, strings, Map, Set)

for (const key in obj) { ... }                       // for...in → itera CLAVES (objetos; evitar en arrays)

arr.forEach((item, index) => { ... });                // forEach → como for...of pero como método, no puedes hacer break/continue
```

Regla rápida: arrays → `for...of` o `forEach`. Objetos → `for...in` o `Object.entries()` + `for...of`.

---

## Métodos de array

```js
const numeros = [1, 2, 3, 4, 5];

numeros.map(n => n * 2);              // [2,4,6,8,10] — transforma, mismo largo
numeros.filter(n => n % 2 === 0);     // [2,4] — filtra, largo <= original
numeros.find(n => n > 3);             // 4 — primer elemento que cumple, o undefined
numeros.reduce((acc, n) => acc + n, 0); // 15 — reduce todo a un solo valor
numeros.some(n => n > 4);             // true — ¿al menos uno cumple?
numeros.every(n => n > 0);            // true — ¿todos cumplen?
```

**Inmutabilidad — no mutar el array original:**

```js
// mutan el original (evitar si no es intencional)
arr.push(x); arr.pop(); arr.splice(i, 1); arr.sort(); arr.reverse();

// no mutan, regresan uno nuevo (preferir)
const nuevo = [...arr, x];               // en vez de push
const sinUltimo = arr.slice(0, -1);      // en vez de pop
const ordenado = [...arr].sort();        // copia antes de ordenar
```

`map`, `filter`, `reduce` nunca mutan el array original — por eso son la base de la programación funcional en JS.

---

## `this`

```js
const obj = {
  nombre: "Ana",
  saludar() {
    console.log(this.nombre); // "Ana" — this = quien llamó al método (obj)
  },
  saludarArrow: () => {
    console.log(this.nombre); // undefined — arrow function NO tiene su propio this,
                                // toma el del scope donde se definió (aquí, global)
  }
};
```

- Función normal: `this` depende de *cómo se llama* la función, no de dónde se definió.
- Arrow function: `this` depende de dónde se *definió*, nunca cambia. Por eso son útiles dentro de callbacks (`setTimeout`, `.then()`, event listeners) cuando quieres mantener el `this` del contexto de afuera.

## Type casting

```js
String(123);      // "123"
Number("123");    // 123
Number("abc");    // NaN
Boolean(0);        // false
Boolean("");       // false
Boolean("0");      // true (string no vacío = truthy, ¡ojo!)

// conversión implícita (evitar depender de esto)
"5" + 1    // "51" (concatena)
"5" - 1    // 4   (convierte a número)
```

Prefiere conversión explícita (`Number(x)`, `String(x)`) sobre trucos implícitos (`+x`, `x + ""`), es más legible.

## Manejo de errores

```js
try {
  const data = JSON.parse(textoInvalido);
} catch (error) {
  console.error("Error al parsear:", error.message);
} finally {
  // corre siempre, haya error o no
}

// con async/await
async function obtenerDatos() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error; // re-lanzar si quien llama necesita saber que falló
  }
}

// error personalizado
class ValidationError extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ValidationError";
  }
}
```

Nunca dejes un `catch` vacío — como mínimo, loguéalo.

## Warnings y errores en consola

- `console.log()` — info general.
- `console.warn()` — advertencia, no rompe nada pero algo está mal (aparece en amarillo).
- `console.error()` — error real (aparece en rojo, con stack trace).
- `console.table(arr)` — para ver arrays de objetos como tabla, muy útil debugueando.

---

## LocalStorage

```js
localStorage.setItem("token", "abc123");
localStorage.getItem("token");     // "abc123"
localStorage.removeItem("token");
localStorage.clear();              // borra todo

// solo guarda strings — para objetos:
localStorage.setItem("usuario", JSON.stringify({ nombre: "Ana" }));
const usuario = JSON.parse(localStorage.getItem("usuario"));
```

- Persiste aunque cierres el navegador (a diferencia de `sessionStorage`, que se borra al cerrar la pestaña).
- Solo strings, ~5-10MB de límite, síncrono (bloquea el hilo principal si abusas de él).
- No metas ahí nada sensible (tokens de larga duración, contraseñas) — es accesible desde cualquier JS que corra en la página (riesgo de XSS).

---

## Recursos del temario

- [Curso de JavaScript](https://www.aprendejavascript.dev/)
- [Style guide de Airbnb](https://github.com/airbnb/javascript)
- [Documentación Alebat — módulo JS](https://documentacion.verticales.alebat.com/formacion/javascript/modulo-1/javascript/)
- [Clean Code JS en español](https://github.com/andersontr15/clean-code-javascript-es)