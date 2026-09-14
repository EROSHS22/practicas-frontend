# Ejercicio 2, Hoisting y comparaciones

## Parte 1

``` js
console.log(a);
var a = "hola";
```
respuesta = undefined

``` js
console.log(b);
let b = "hola";
```
respuesta = ReferenceError

``` js
console.log(c);
const c = "hola";
```
respuesta = ReferenceError

```js
sayHi();

function sayHi() {
  console.log("Hola desde sayHi!");
}
```
respuesta = Hola desde sayHi!

```js
function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye();
```
resultado = Adios desde sayBye!

## Parte 2

```js
// == vs ===
console.log(1 == "1"); //true
console.log(1 === "1"); // false
console.log(null == undefined); //true
console.log(null === undefined); // false

// Valores falsy
console.log(Boolean("")); //false
console.log(Boolean(0)); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// NaN
console.log(NaN == NaN); // false
console.log(Number.isNaN(Number("hola"))); // true
```